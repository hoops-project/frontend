import { S } from './ContentModal.style'

interface ModalProps {
  title: string
  content: string
  onClose: () => void
}

export default function ContentModal({onClose,  title, content }: ModalProps) {
  const handleClose = () => {
    onClose()
  }

  return (
    <S.ModalContainer>
      <S.Modal>
        <S.CloseBtnContainer>
          <S.CloseBtnButton onClick={handleClose}>X</S.CloseBtnButton>
        </S.CloseBtnContainer>
        <h3 className='tit'>{title}</h3>
        <p className='txt'>{content}</p>
        <S.SubmitBtn  onClick={handleClose}>확인</S.SubmitBtn>
      </S.Modal>
    </S.ModalContainer>
  )
}
