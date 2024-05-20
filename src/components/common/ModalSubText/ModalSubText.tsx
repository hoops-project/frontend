import { S } from './ModalSubText.style'
import { SubTextProps } from '../../../types/subtext'

export default function ModalSubText({ content, alignLeft }: SubTextProps) {
  return (
    <S.SubTextWrapper alignLeft={alignLeft}>
      <S.SubText>{content}</S.SubText>
    </S.SubTextWrapper>
  )
}
