import vector from '../../../assets/Vector.svg'
import BasicButton from '../BasicButton/BasicButton.tsx'
import { theme } from '../../../styles/theme.ts'
import { S } from './RequestItem.style.ts'

export default function RequestItem() {
  return (
    <S.RequestItem>
      <p>{`오신웅`}</p>
      <img src={vector} alt={'느낌표 아이콘'} />
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
