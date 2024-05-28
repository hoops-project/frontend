import { S } from './MyPageUserInfo.style.ts'
import { FriendRequest } from '../../../types/friendRequest.ts'
import { Participant } from '../../ParticipationGameList/ParticipationGameList.tsx'
import {
  convertAttributeToKorean,
  convertGenderToKorean,
  convertPlayStyleToKorean,
} from '../../../helper/convertValueToName.ts'

export default function MyPageUserInfo({
  userInfo,
}: {
  userInfo: FriendRequest | Participant
}) {
  return (
    <div>
      <S.Wrapper>
        <S.ListBox>
          <S.ListItem key={userInfo?.userId}>
            <p className='nickname'>{userInfo?.nickName}</p>
            <p className='rating'>{userInfo?.mannerPoint || '0.0'}</p>
            <p>{convertGenderToKorean(userInfo?.gender)}</p>
            <p>{convertPlayStyleToKorean(userInfo?.playStyle)}</p>
            <p>{convertAttributeToKorean(userInfo?.ability)}</p>
          </S.ListItem>
        </S.ListBox>
      </S.Wrapper>
    </div>
  )
}
