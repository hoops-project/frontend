import BasicButton from '../BasicButton/BasicButton.tsx'
import { theme } from '../../../styles/theme.ts'
import { S } from './RequestItem.style.ts'
import { PiInfoLight } from 'react-icons/pi'

export default function RequestItem() {
  return (
    <S.RequestItem>
      <p>{`오신웅`}</p>
      <PiInfoLight />
      <p>{`4.9`}</p>
      <S.ButtonWrapper>
        <BasicButton
          type={'button'}
          $bgColor={theme.colors.blue}
          $fontcolor={theme.colors.white}
          $width={'6rem'}
        >
          수락
        </BasicButton>
        <BasicButton
          type={'button'}
          $bgColor={theme.colors.red}
          $fontcolor={theme.colors.white}
          $width={'6rem'}
        >
          거절
        </BasicButton>
      </S.ButtonWrapper>
    </S.RequestItem>
  )
}
