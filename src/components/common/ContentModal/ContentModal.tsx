import { S } from './ContentModal.style'

interface ModalProps {
  onClose: () => void
  title: string
  content: string
}

export default function Modal({ onClose, title, content }: ModalProps) {
  const handleClose = () => {
    onClose() // Call onClose function to close the modal
  }

  return (
    <S.ModalContainer>
      <S.Modal>
        <S.CloseBtnContainer>
          <S.CloseBtnButton onClick={handleClose}>X</S.CloseBtnButton>
        </S.CloseBtnContainer>
        <h3 className='tit'>{title}</h3>
        <p className='txt'>{content}</p>
        <S.SubmitBtn onClick={handleClose}>확인</S.SubmitBtn>
      </S.Modal>
    </S.ModalContainer>
  )
}
