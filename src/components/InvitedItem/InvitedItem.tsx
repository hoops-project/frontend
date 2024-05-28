import { Participant } from '../ParticipationGameList/ParticipationGameList.tsx'
import { PiInfoLight } from 'react-icons/pi'
import BasicButton from '../common/BasicButton/BasicButton.tsx'
import { theme } from '../../styles/theme.ts'
import Modal from '../common/Modal/Modal.tsx'
import ModalTit from '../common/ModalTit/ModalTit.tsx'
import MyPageUserInfo from '../common/MyPageUserInfo/MyPageUserInfo.tsx'
import useModal from '../../hooks/useModal.ts'
import { S } from './InvitedItem.style.ts'
import { useAcceptGameRequestQuery } from '../../hooks/query/useAcceptGameRequestQuery.ts'

export default function InvitedItem({ info }: { info: Participant }) {
  const { isModalOpen, openModal, closeModal } = useModal()

  const { acceptMutate, denyMutate } = useAcceptGameRequestQuery()

  return (
    <S.Invite key={info.userId}>
      <p>{info.nickName}</p>
      <PiInfoLight
        onClick={() => {
          openModal()
        }}
      />
      <S.ButtonWrapper>
        <BasicButton
          type={'button'}
          $bgColor={theme.colors.blue}
          $fontcolor={theme.colors.white}
          $width={'6rem'}
          onClick={() => acceptMutate(info.participantId)}
        >
          수락
        </BasicButton>
        <BasicButton
          type={'button'}
          $bgColor={theme.colors.red}
          $fontcolor={theme.colors.white}
          $width={'6rem'}
          onClick={() => denyMutate(info.participantId)}
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
}
