import BasicButton from '../common/BasicButton/BasicButton.tsx'
import { theme } from '../../styles/theme.ts'
import { S } from './JoinGame.style.ts'

interface JoinGame {
  date: string
  title: string
  location: string
}

export default function JoinGame({ date, title, location }: JoinGame) {
  return (
    <S.StickyDiv>
      <S.PlaceInfo>
        <p>{date}</p>
        <p>{title}</p>
        <p>{location}</p>
      </S.PlaceInfo>
      <S.JoinWrapper>
        <div>
          <p>마감까지</p>
          <p>6자리 남았어요!</p>
        </div>
        <BasicButton
          type={'button'}
          $bgColor={theme.colors.blue}
          $fontcolor={theme.colors.white}
          $width={'40%'}
        >
          참가
        </BasicButton>
      </S.JoinWrapper>
    </S.StickyDiv>
  )
}
