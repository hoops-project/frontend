import { S } from '../FriendRequestList/FriendRequestList.style.ts'
import { useGameInviteQuery } from '../../hooks/query/useGameInviteQuery.ts'
import { Invite } from '../../types/invite.ts'
import { PiInfoLight } from 'react-icons/pi'
import useModal from '../../hooks/useModal.ts'
import BasicButton from '../common/BasicButton/BasicButton.tsx'
import { theme } from '../../styles/theme.ts'
import Modal from '../common/Modal/Modal.tsx'
import ModalTit from '../common/ModalTit/ModalTit.tsx'

export default function GameInviteList() {
  const { inviteList, acceptInviteMutation, denyMutation } =
    useGameInviteQuery()
  const { isModalOpen, openModal, closeModal } = useModal()

  console.log(inviteList)

  return (
    <S.Wrapper>
      <p>경기 초대 목록</p>
      {inviteList?.map((info: Invite) => (
        <S.Invite key={info.gameId}>
          <p>{info.senderUserNickName}</p>
          <PiInfoLight onClick={openModal} />
          <S.ButtonWrapper>
            <BasicButton
              type={'button'}
              $bgColor={theme.colors.blue}
              $fontcolor={theme.colors.white}
              $width={'6rem'}
              onClick={() => acceptInviteMutation(info.inviteId)}
            >
              수락
            </BasicButton>
            <BasicButton
              type={'button'}
              $bgColor={theme.colors.red}
              $fontcolor={theme.colors.white}
              $width={'6rem'}
              onClick={() => denyMutation(info.inviteId)}
            >
              거절
            </BasicButton>
          </S.ButtonWrapper>
        </S.Invite>
      ))}
      {isModalOpen && (
        <Modal $width='50rem' $height='30rem' onClose={closeModal}>
          <ModalTit title='장소 정보' />
          <BasicButton
            type='button'
            children={'닫기'}
            $fontcolor={theme.colors.white}
            $bgColor={theme.colors.blue}
            onClick={closeModal}
          />
        </Modal>
      )}
    </S.Wrapper>
  )
}
