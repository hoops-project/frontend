import { S } from './ContentModal.style'
import { ModalProps } from '../../../types/modal';
import ModalTextBox from '../ModalTextBox/ModalTextBox';
import Review from '../../Review/Reivew';

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
        <ModalTextBox />
        <Review />
        <S.SubmitBtn onClick={handleClose}>확인</S.SubmitBtn>
      </S.Modal>
    </S.ModalContainer>
  )
}
