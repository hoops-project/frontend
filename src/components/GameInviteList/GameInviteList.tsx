import vector from '../../assets/Vector.svg'
import BasicButton from '../common/BasicButton/BasicButton.tsx'
import { theme } from '../../styles/theme.ts'
import { S } from '../FriendRequestList/FriendRequestList.style.ts'

export default function GameInviteList() {
  return (
    <S.Wrapper>
      <p>경기 초대 목록</p>
      {Array.from({ length: 6 }, (_, index) => (
        <S.RequestItem key={index}>
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
      ))}
    </S.Wrapper>
  )
}
