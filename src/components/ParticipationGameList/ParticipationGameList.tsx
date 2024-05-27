import { S } from './ParticipationGameList.style.ts'
import lock from '../../assets/ic_matchdata_lock.svg'
import { useParams } from 'react-router-dom'
import { GameDetails } from '../../types/detail.ts'
import { useGameDetailQuery } from '../../hooks/query/useGameDetailQuery.ts'
import { useParticipantGameQuery } from '../../hooks/query/useParticipantGameQuery.ts'
import { PiInfoLight } from 'react-icons/pi'
import BasicButton from '../common/BasicButton/BasicButton.tsx'
import { theme } from '../../styles/theme.ts'
import useModal from '../../hooks/useModal.ts'
import Modal from '../common/Modal/Modal.tsx'
import ModalTit from '../common/ModalTit/ModalTit.tsx'
import MyPageUserInfo from '../common/MyPageUserInfo/MyPageUserInfo.tsx'

export interface Participant {
  participantId: number
  status: string
  createdDate: string
  gender: string
  nickName: string
  playStyle: string
  ability: string
  mannerPoint: number | null
  userId: number
}

export default function ParticipationGameList() {
  const userPk = localStorage.getItem('userPK')

  const { id } = useParams()
  const { gameDetail }: { gameDetail: GameDetails } = useGameDetailQuery(id)
  const { participantRequestList } = useParticipantGameQuery(
    Number(id),
    gameDetail?.userId
  )
  const { isModalOpen, openModal, closeModal } = useModal()

  return (
    <S.Wrapper>
      <p>경기 참여 신청 목록</p>
      {!gameDetail?.userId ? (
        <S.LockContainer>
          <div>로딩....</div>
        </S.LockContainer>
      ) : (
        <S.LockContainer>
          {userPk === String(gameDetail?.userId) ? (
            participantRequestList?.applyParticipantGameList.map(
              (info: Participant) => (
                <S.Invite key={info.userId}>
                  <p>{info.nickName}</p>
                  <PiInfoLight onClick={openModal} />
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
                  {isModalOpen && (
                    <Modal $width='50rem' $height='30rem' onClose={closeModal}>
                      <ModalTit title='유저 정보' />
                      <MyPageUserInfo userInfo={info} />
                      <BasicButton
                        type='button'
                        children={'닫기'}
                        $fontcolor={theme.colors.white}
                        $bgColor={theme.colors.blue}
                        onClick={closeModal}
                      />
                    </Modal>
                  )}
                </S.Invite>
              )
            )
          ) : (
            <div>
              <img src={lock} alt={'자물쇠 아이콘'} />
              <p>팀장만 신청 회원을 관리할 수 있어요.</p>
            </div>
          )}
        </S.LockContainer>
      )}
    </S.Wrapper>
  )
}
