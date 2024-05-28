import { S } from './Report.style.ts'
import { useGetReportList } from '../../hooks/query/useGetReportList.ts'
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll.ts'
import ReportItem from '../../components/ReportItem/ReportItem.tsx'
import { ReportedUser } from '../../types/auth.ts'

export default function Report() {
  const titles = ['이름', '평점', '스타일']

  const { reportedList, fetchNextPage, hasNextPage } = useGetReportList()
  const { loader } = useInfiniteScroll({
    fetchNextPage,
    hasNextPage,
  })

  console.log('신고당한 유저 리스트', reportedList)

  return (
    <S.Wrapper>
      <p>신고 받은 유저 리스트</p>
      <S.TopTit>
        <div className='tit_box'>
          {titles.map((title, index) => (
            <p key={index} className={title === '스타일' ? 'styled' : ''}>
              {title}
            </p>
          ))}
        </div>
      </S.TopTit>
      {reportedList?.pages?.map((page, index) => (
        <div key={index}>
          {page?.map((report: ReportedUser) => (
            <ReportItem key={report?.userId} report={report} />
          ))}
        </div>
      ))}
      <div ref={loader} />
    </S.Wrapper>
  )
}
