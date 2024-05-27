import { S } from './FriendRequestList.style.ts'
import RequestItem from '../common/RequestItem/RequestItem.tsx'
import { useFriendRequestQuery } from '../../hooks/query/useFriendRequestQuery.ts'
import { FriendRequest } from '../../types/friendRequest.ts'

export default function FriendRequestList() {
  const { requestResult } = useFriendRequestQuery()

  return (
    <S.Wrapper>
      <p>친구 신청 목록</p>
      {requestResult?.map((req: FriendRequest) => (
        <RequestItem key={req?.userId} info={req} />
      ))}
    </S.Wrapper>
  )
}
