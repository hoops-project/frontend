import { S } from './Modal.style'

interface ModalProps {
  closeModal: () => void
}

export default function modal({ closeModal }: ModalProps) {
  return (
    <S.ModalContainer>
      <S.Modal>
        <h3 className='tit'>예시 팝업 제목</h3>
        <p className='txt'>예시 팝업 내용</p>
        <button className='submit_btn' onClick={closeModal}>
          확인
        </button>
      </S.Modal>
    </S.ModalContainer>
  )
}
