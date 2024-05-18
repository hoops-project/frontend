import { S } from './ModalSubText.style'
import { SubTextProps } from '../../../types/subtext'

export default function ModalSubText({ content }: SubTextProps) {
  return (
    <S.SubTextWrapper>
      <S.SubText>{content}</S.SubText>
    </S.SubTextWrapper>
  )
}
