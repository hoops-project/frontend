import { Link } from 'react-router-dom'
import BasicButton from '../../components/common/BasicButton/BasicButton.tsx'
import MainNav from '../../components/MainNav/MainNav.tsx'
import MainCarousel from '../../components/MainCarousel/MainCarousel.tsx'
import Calender from '../../components/Calender/Calender.tsx'
import { useSelectBox } from '../../hooks/useSelectBox.ts'
import MainSelectList from '../../components/MainSelectList/MainSelectList.tsx'
import { useEffect, useState } from 'react'
import { CS } from '../../styles/commonStyle.ts'
import { S } from './Main.style.ts'
import { theme } from '../../styles/theme.ts'
import { useDateStore } from '../../store/calender.ts'
import { useGetGameListQuery } from '../../hooks/query/useGetGameListQuery.ts'
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll.ts'
import MatchItem from '../../components/MatchItem/MatchItem.tsx'
import { Match } from '../../types/match.ts'
import dayjs from 'dayjs'
import { useAuthStore } from '../../store/store.ts'
import { SEO } from '../../components/SEO/index.tsx'

export default function Main() {
  const selected = useSelectBox()
  const loginState = useAuthStore((state) => state.isLoggedIn)
  const [isAdmin, setIsAdmin] = useState(false)
  const { date: globalGameDate } = useDateStore()

  const gameFilter = {
    localData: globalGameDate,
    cityName: selected.region,
    fieldStatus: selected.gamePlace,
    gender: selected.gender,
    matchFormat: selected.gameType,
  }

  const { data, fetchNextPage, hasNextPage } = useGetGameListQuery({
    gameFilter,
  })

  const { loader } = useInfiniteScroll({
    fetchNextPage,
    hasNextPage,
  })

  useEffect(() => {
    if (loginState) {
      const userPK = localStorage.getItem('userPK')
      if (userPK === String(1)) {
        setIsAdmin(true)
      } else {
        setIsAdmin(false)
      }
    }
  }, [loginState])

  return (
    <CS.DefaultContainer>
      <SEO title="메인" description="메인 페이지입니다." />
        <S.Wrapper>
          <S.CenterWrapper>
            {isAdmin ? (
              <Link className='admin' to='/admin/report'>
                <BasicButton
                  children={'신고 목록'}
                  type={'button'}
                  $bgColor={theme.colors.red}
                  $fontcolor={theme.colors.white}
                />
              </Link>
            ) : (
              <MainNav />
            )}
          </S.CenterWrapper>
          <MainCarousel />
          <Calender />
          <MainSelectList selected={selected} />
          {data?.pages.map((page, index) => (
            <div key={index}>
              {page?.content?.length > 0 ? (
                <>
                  {page.content.map((content: Match) => {
                    const isHide = selected.showOver === 'HIDE'
                    const shouldRender = dayjs(content.startDateTime).isBefore(
                      dayjs()
                    )
                    return (
                      <div key={content.gameId}>
                        {isHide ? (
                          !shouldRender && <MatchItem match={content} />
                        ) : (
                          <MatchItem match={content} />
                        )}
                      </div>
                    )
                  })}
                </>
              ) : (
                <S.NoResult>
                  <p>결과가 없습니다.</p>
                </S.NoResult>
              )}
            </div>
          ))}
        </S.Wrapper>
        <div ref={loader} />
    </CS.DefaultContainer>
  )
}
