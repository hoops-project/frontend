import { S } from '../Report/Report.style'
import ReportItem from '../../components/ReportItem/ReportItem'

export default function Report() {
  // NOTICE: 임시 데이터
  const report = {
    title: '신고 받은 유저 리스트',
  }

  const titles = ['이름', '평점', '스타일']

  const reports = [
    {
      name: '오신웅',
      rating: '4.5',
      buttons: ['남자', '공격적', '슛'],
    },
    {
      name: '오신웅',
      rating: '4.5',
      buttons: ['남자', '공격적', '슛'],
    },
    {
      name: '오신웅',
      rating: '4.5',
      buttons: ['남자', '공격적', '슛'],
    },
    {
      name: '오신웅',
      rating: '4.5',
      buttons: ['남자', '공격적', '슛'],
    },
  ]

  return (
    <S.Wrapper>
      <p>{report.title}</p>
      <S.TopTit>
        <div className='tit_box'>
          {titles.map((title, index) => (
            <p key={index} className={title === '스타일' ? 'styled' : ''}>
              {title}
            </p>
          ))}
        </div>
      </S.TopTit>
      {reports.map((report, index) => (
        <ReportItem key={index} report={report} />
      ))}
    </S.Wrapper>
  )
}
