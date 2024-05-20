import { S } from './MyFriend.style.ts'
import { userInfoData } from '../../../mock/data'
import { theme } from '../../../styles/theme'
import BasicButton from '../BasicButton/BasicButton'

export default function MyFriend() {
  return (
    <S.Wrapper>
      <S.TopTit>
        <S.FlexBox>
          <p>이름</p>
          <p>평점</p>
          <p>스타일</p>
        </S.FlexBox>
      </S.TopTit>
      <S.UnderLine />
      <S.ListBox>
        {userInfoData.map((user) => (
          <S.ListItem key={user.userId}>
            <p>{user.nickName}</p>
            <p>{user.rating}</p>
            <p>{user.gender}</p>
            <p>{user.playStyle}</p>
            <p>{user.ability}</p>
            <BasicButton
              type='button'
              $bgColor={
                user.isRequestFriend
                  ? theme.colors.blue
                  : theme.colors.light_blue
              }
              $borderColor={theme.colors.white}
              $width='10rem'
              $hoverBgColor={
                user.isRequestFriend
                  ? theme.colors.gray_300
                  : theme.colors.gray_200
              }
              $fontcolor={theme.colors.white}
            >
              {user.isRequestFriend ? '친구 초대' : '초대 완료'}
            </BasicButton>
          </S.ListItem>
        ))}
      </S.ListBox>
    </S.Wrapper>
  )
}
