import { axiosAuth } from '../../api/axiosInstance.ts'
import { END_POINT } from '../../constants/endPoint.ts'
import { useMutation } from '@tanstack/react-query'
import useToast from '../useToast.ts'

interface ReportProps {
  content: string
  userId: number | undefined
}

export const useReportQuery = () => {
  const { toastSuccess } = useToast()

  const sendReport = async (report: ReportProps) => {
    const { data } = await axiosAuth.post(END_POINT.REPORT.REPORT, {
      content: report.content,
      reportedUserId: report.userId,
    })
    return data
  }

  const { mutate: reportMutation } = useMutation({
    mutationFn: sendReport,
    onSuccess: () => {
      toastSuccess('신고가 성공적으로 접수 되었습니다.')
    },
  })

  return { reportMutation }
}
