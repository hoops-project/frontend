import { S } from './MyPageUserInfo.style.ts'
import { FriendRequest } from '../../../types/friendRequest.ts'

export default function MyPageUserInfo({
  userInfo,
}: {
  userInfo: FriendRequest
}) {
  return (
    <div>
      <S.Wrapper>
        <S.ListBox>
          <S.ListItem key={userInfo.userId}>
            <p className='nickname'>{userInfo.nickName}</p>
            <p className='rating'>{userInfo.score}</p>
            <p>{userInfo.gender}</p>
            <p>{userInfo.playStyle}</p>
            <p>{userInfo.ability}</p>
          </S.ListItem>
        </S.ListBox>
      </S.Wrapper>
    </div>
  )
}
