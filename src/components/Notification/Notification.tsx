import { S } from './Notification.style.ts'
import noticeBell from '../../assets/fluent-emoji-flat_bell.svg'
import { CS } from '../../styles/commonStyle.ts'
import { PiInfoLight } from 'react-icons/pi'
import { END_POINT } from '../../constants/endPoint.ts'
import { useUserInfoQuery } from '../../hooks/query/useUserInfoQuery.ts'
import { axiosAccess } from '../../api/axiosInstance.ts'
import { useNavigate } from 'react-router-dom'
import useToast from '../../hooks/useToast.ts'
import useDeactivateQuery from '../../hooks/query/useDeactivateQuery.ts'

export default function Notification() {
  const { toastSuccess } = useToast()
  const navigate = useNavigate()
  const { userInfo } = useUserInfoQuery()
  const { deactivateMutate } = useDeactivateQuery()

  const handleSignOut = async () => {
    const checkLogout = window.confirm('로그아웃을 하시겠습니까?')
    if (checkLogout) {
      await axiosAccess.post(`${END_POINT.AUTH.LOGOUT}`).then(() => {
        localStorage.removeItem('Access-Token')
      })
      toastSuccess('로그아웃이 성공적으로 완료되었습니다 💪🏻')
      navigate('/', { replace: true })
    }
  }

  const handleDeactivate = () => {
    const checkWithdraw = window.confirm('정말 회원 탈퇴를 하시겠습니까?')
    if (checkWithdraw) {
      deactivateMutate()
    }
  }

  return (
    <S.Wrapper>
      <S.UserInfo>
        <p>{userInfo?.name}</p>
        <div>
          <span>{userInfo?.nickname}</span> <span>{userInfo?.birthday}</span>
        </div>
      </S.UserInfo>
      <S.NoticeTitle>
        <img src={noticeBell} alt={'noticeBell'} />
        <p>알림 목록</p>
      </S.NoticeTitle>
      <S.NoticeBody>
        {Array.from({ length: 10 }, (_, index) => (
          <CS.Link to={'/'} key={index}>
            <S.NoticeItem key={index}>
              <PiInfoLight />
              <p>{`시눙하이 님이 초대를 보냈습니다.`}</p>
            </S.NoticeItem>
          </CS.Link>
        ))}
      </S.NoticeBody>
      <S.Logout>
        <span onClick={handleSignOut}>로그아웃</span> <span>|</span>{' '}
        <span onClick={handleDeactivate}>회원탈퇴</span>
      </S.Logout>
    </S.Wrapper>
  )
}
