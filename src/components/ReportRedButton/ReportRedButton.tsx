import { S } from './ReportRedButton.style.ts'
import { Link } from 'react-router-dom'

export default function ReportRedButton() {
  return (
    <S.WrapperButton>
      <Link to='/admin/report'>
        <S.RedButton>신고 목록</S.RedButton>
      </Link>
    </S.WrapperButton>
  )
}