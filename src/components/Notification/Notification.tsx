import { S } from './Notification.style.ts'
import noticeBell from '../../assets/fluent-emoji-flat_bell.svg'
import vector from '../../assets/Vector.svg'

export default function Notification() {
  return (
    <S.Wrapper>
      <S.UserInfo>
        <p>오신웅</p>
        <div>
          <span>시눙하이</span> <span>1996.03.28</span>
        </div>
      </S.UserInfo>
      <S.NoticeTitle>
        <img src={noticeBell} alt={'noticeBell'} />
        <p>알림 목록</p>
      </S.NoticeTitle>
      <S.NoticeBody>
        {Array.from({ length: 3 }, (_, index) => (
          <S.NoticeItem key={index}>
            <img src={vector} alt={'느낌표 아이콘'} />
            <p>{`시눙하이 님이 초대를 보냈습니다.`}</p>
          </S.NoticeItem>
        ))}
      </S.NoticeBody>
    </S.Wrapper>
  )
}
