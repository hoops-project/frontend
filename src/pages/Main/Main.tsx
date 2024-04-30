import { S } from './Main.style.ts'
import Modal from '../../layout/modal/Modal.tsx'

export default function Main() {
  return (
    <S.Container>
      메인 페이지
      <Modal />
    </S.Container>
  )
}
