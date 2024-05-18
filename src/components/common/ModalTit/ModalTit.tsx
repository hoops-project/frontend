import { S } from './ModalTit.style.ts'
import { TitProps } from '../../../types/tit.ts'

export default function ModalTit({ title }: TitProps) {
  return (
    <S.TitWrapper>
      <S.TitWrapperText>{title}</S.TitWrapperText>
    </S.TitWrapper>
  )
}
