import { S } from './MyPageUserInfo.style.ts'
import { userInfoData } from '../../../mock/data'
export default function MyPageUserInfo() {
  return (
    <div>
      <S.Wrapper>
        <S.ListBox>
          {userInfoData.map((user) => (
            <S.ListItem key={user.userId}>
              <p className='nickname'>{user.nickName}</p>
              <p className='rating'>{user.rating}</p>
              <p>{user.gender}</p>
              <p>{user.playStyle}</p>
              <p>{user.ability}</p>
            </S.ListItem>
          ))}
        </S.ListBox>
      </S.Wrapper>
    </div>
  )
}
