import { axiosAuth } from '../../api/axiosInstance.ts'
import { END_POINT } from '../../constants/endPoint.ts'
import { useMutation, useQuery } from '@tanstack/react-query'
import { QUERY_KEYS } from '../../constants/queryKeys.ts'
import useToast from '../useToast.ts'

export const useReportContentAndBlackQuery = (reportId: string) => {
  const { toastSuccess, toastError } = useToast()

  const getReportContent = async () => {
    const { data } = await axiosAuth.get(
      `${END_POINT.REPORT.REPORT_CONTENT}${reportId}`
    )

    return data
  }

  const addBlackList = async (reportedId: number) => {
    const { data } = await axiosAuth.post(END_POINT.MANAGER.BLACK_LIST, {
      reportedId,
    })
    return data
  }

  const { data: reportContent } = useQuery({
    queryKey: [QUERY_KEYS.GET_REPORT_CONTENT, reportId],
    queryFn: getReportContent,
  })

  const { mutate: addBlackListMutate } = useMutation({
    mutationFn: addBlackList,
    onSuccess: () => {
      toastSuccess('블랙리스트 추가 완료')
    },
    onError: (error) => {
      toastError(`${error}`)
    },
  })

  return { reportContent, addBlackListMutate }
}
