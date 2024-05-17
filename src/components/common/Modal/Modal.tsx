import { S } from './Modal.style'
import { ModalProps } from '../../../types/modal'

export default function Modal({
  $height,
  $width,
  children,
  onClose,
}: ModalProps) {
  return (
    <S.ModalContainer>
      <S.Modal $width={$width} $height={$height}>
        <S.CloseBtnContainer>
          <S.CloseBtnButton onClick={onClose}>X</S.CloseBtnButton>
        </S.CloseBtnContainer>
        {children}
      </S.Modal>
    </S.ModalContainer>
  )
}
