import background from '../../assets/Background.png'
import { S } from './DetailTopTitle.style.ts'

export default function DetailTopTitle({ title }: { title: string }) {
  return (
    <S.TopBackDiv>
      <img src={background} alt={'배경사진'} />
      <S.TopTitleDiv>
        <h2>{title}</h2>
      </S.TopTitleDiv>
    </S.TopBackDiv>
  )
}
