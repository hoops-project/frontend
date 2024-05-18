import { S } from './Modal.style'
import { ModalProps } from '../../../types/modal'
import { theme } from '../../../styles/theme'
import BasicButton from '../BasicButton/BasicButton'

export default function ContentModal({
  $height,
  $width,
  children,
  onClose,
  confirmButtonText,
}: ModalProps) {
  return (
    <S.ModalContainer>
      <S.Modal $width={$width} $height={$height}>
        <S.CloseBtnContainer>
          <S.CloseBtnButton onClick={onClose}>X</S.CloseBtnButton>
        </S.CloseBtnContainer>
        {children}
        <BasicButton
          onClick={onClose}
          $width='100%'
          $bgColor={theme.colors.blue}
          $fontcolor={theme.colors.white}
          type={'button'}
        >
          {confirmButtonText}
        </BasicButton>
      </S.Modal>
    </S.ModalContainer>
  )
}
