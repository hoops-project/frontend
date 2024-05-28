import { Invite } from '../../types/invite.ts'
import { PiInfoLight } from 'react-icons/pi'
import BasicButton from '../common/BasicButton/BasicButton.tsx'
import { theme } from '../../styles/theme.ts'
import { S } from './GameInviteItem.style.ts'
import useModal from '../../hooks/useModal.ts'
import { useGameInviteQuery } from '../../hooks/query/useGameInviteQuery.ts'
import Modal from '../common/Modal/Modal.tsx'
import ModalTit from '../common/ModalTit/ModalTit.tsx'
import KakaoMap from '../KakaoMap/KakaoMap.tsx'
import ModalSubText from '../common/ModalSubText/ModalSubText.tsx'
import dayjs from 'dayjs'

export default function GameInviteItem({ info }: { info: Invite }) {
  const { isModalOpen, openModal, closeModal } = useModal()
  const { acceptInviteMutation, denyMutation } = useGameInviteQuery()

  return (
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
      {isModalOpen && (
        <Modal $width='50rem' $height='60rem' onClose={closeModal}>
          <ModalTit title='장소 정보' />
          <ModalSubText content={info?.address} />
          <ModalSubText
            content={dayjs(info?.startDateTime).format(
              'YYYY년 M월 D일 ddd HH:mm'
            )}
          />
          <KakaoMap
            lat={info?.latitude}
            lng={info?.longitude}
            height={'30rem'}
          />
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
}
