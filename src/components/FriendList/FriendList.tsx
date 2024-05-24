import { userInfoData } from '../../mock/data.ts'
import BasicButton from '../common/BasicButton/BasicButton.tsx'
import { theme } from '../../styles/theme.ts'
import { S } from './FriendList.style.ts'

export default function FriendList({ isAddFriend }: { isAddFriend: boolean }) {
  /*
   * < NOTICE >
   * 친구 목록을 쿼리 작성 후 불러와 userInfoData 에 넣으면 됩니다.
   * isAddFriend 값에 따라 보이는 버튼이 달라집이다.
   * */

  const handleAddFriend = () => {
    // TODO: 친구 추가 요청 로직 작성
  }

  const handleInviteFriend = () => {
    // TODO: 친구 초대 요청 로직 작성
  }

  return (
    <S.ListBox>
      {userInfoData.map((user) => (
        <S.ListItem key={user.userId}>
          <p>{user.nickName}</p>
          <p>{user.rating}</p>
          <p>{user.gender}</p>
          <p>{user.playStyle}</p>
          <p>{user.ability}</p>
          {isAddFriend ? (
            <BasicButton
              type='button'
              $bgColor={
                user.isRequestFriend ? theme.colors.blue : theme.colors.red
              }
              $borderColor={theme.colors.white}
              $width='10rem'
              $hoverBgColor={
                user.isRequestFriend
                  ? theme.colors.gray_300
                  : theme.colors.gray_300
              }
              $fontcolor={theme.colors.white}
              onClick={handleAddFriend}
            >
              {user.isRequestFriend ? '친구 신청' : '친구 삭제'}
            </BasicButton>
          ) : (
            <BasicButton
              type={'button'}
              $bgColor={
                user.isRequestFriend ? theme.colors.blue : theme.colors.red
              }
              $borderColor={theme.colors.white}
              $width='10rem'
              $hoverBgColor={
                user.isRequestFriend
                  ? theme.colors.gray_300
                  : theme.colors.gray_300
              }
              $fontcolor={theme.colors.white}
              onClick={handleInviteFriend}
            >
              초대
            </BasicButton>
          )}
        </S.ListItem>
      ))}
    </S.ListBox>
  )
}
