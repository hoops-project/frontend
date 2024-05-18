import { InfiniteQueryObserverResult } from '@tanstack/react-query'
import { useCallback, useEffect, useRef, useState } from 'react'

interface UseInfiniteScrollProps {
  fetchNextPage: InfiniteQueryObserverResult<unknown>['fetchNextPage']
  hasNextPage: boolean | undefined
  rootMargin?: string
  threshold?: number
}

export const useInfiniteScroll = ({
  fetchNextPage,
  hasNextPage,
  rootMargin = '1rem',
  threshold = 0.1,
}: UseInfiniteScrollProps) => {
  const [isFetchingMore, setIsFetchingMore] = useState<boolean>(false)
  const loader = useRef<HTMLDivElement | null>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const target = entries[0]
      if (target.isIntersecting && !isFetchingMore && hasNextPage) {
        setIsFetchingMore(true)
      }
    },
    [isFetchingMore, hasNextPage]
  )

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: rootMargin,
      threshold: threshold,
    })

    if (loader.current) {
      observer.observe(loader.current)
    }

    observerRef.current = observer

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [handleObserver])

  useEffect(() => {
    if (!isFetchingMore) {
      return
    }

    const fetchData = async () => {
      try {
        await fetchNextPage()
      } catch (error) {
        console.error('페이지를 가져오는 중 오류가 발생했습니다.', error)
      } finally {
        setIsFetchingMore(false)
      }
    }

    fetchData()
  }, [fetchNextPage, isFetchingMore])

  return { loader }
}
