import { S } from './Main.style.ts'
import IdSearchForm from '../../components/IdSearchForm/IdSearchForm.tsx'
import PasswordSerachForm from '../../components/PasswordSearchForm/PasswordSerachForm.tsx'

export default function Main() {
  return (
    <S.Container>
      메인 페이지
      <IdSearchForm />
      <PasswordSerachForm />
    </S.Container>
  )
}
