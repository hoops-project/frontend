import { S } from './GameUserList.style.ts'
import BasicButton from '../common/BasicButton/BasicButton.tsx'
import { theme } from '../../styles/theme.ts'
import { MyGameUserList } from '../../types/game.ts'
import useModal from '../../hooks/useModal.ts'
import Modal from '../common/Modal/Modal.tsx'
import ModalTit from '../common/ModalTit/ModalTit.tsx'
import { PiSirenThin } from 'react-icons/pi'
import { useUserInfoQuery } from '../../hooks/query/useUserInfoQuery.ts'
import BasicTextArea from '../common/BasicTextArea/BasicTextArea.tsx'
import { useState } from 'react'
import { useReportQuery } from '../../hooks/query/useReportQuery.ts'
import useToast from '../../hooks/useToast.ts'
import useFriendActions from '../../hooks/query/useFriendActions.ts'

export default function GameUserList({ userInfo }: MyGameUserList) {
  const { toastError } = useToast()
  const { isModalOpen, openModal, closeModal } = useModal()
  const [reportedId, setReportedId] = useState<number>()
  const [reportContent, setReportContent] = useState<string>('')

  const { userInfo: currentUser } = useUserInfoQuery()
  const { reportMutation } = useReportQuery()
  const { handleAddFriend } = useFriendActions()

  const handelReport = () => {
    if (reportContent.length < 35 || reportContent.length > 255) {
      toastError('35자이상 255자 이하로 작성해 주세요.')
      return
    }
    reportMutation({ content: reportContent, userId: reportedId })
    setReportContent('')
    closeModal()
  }

  return (
    <S.Wrapper>
      <p>유저 목록</p>
      <div>
        {userInfo?.map(
          (info) =>
            currentUser?.userId !== info.userId && (
              <S.UserInfo key={info.participantId}>
                <p>{info.nickName}</p>
                {currentUser?.userId === info.userId ? (
                  <p>팀장</p>
                ) : (
                  <p>팀원</p>
                )}
                <p>{info.mannerPoint ? info.mannerPoint : '0.0'}</p>
                <BasicButton
                  type={'button'}
                  $bgColor={theme.colors.blue}
                  $fontcolor={theme.colors.white}
                  $width={'7rem'}
                  onClick={() => handleAddFriend(info.userId)}
                >
                  친구 추가
                </BasicButton>
                <PiSirenThin
                  onClick={() => {
                    openModal()
                    setReportedId(info.userId)
                  }}
                />
              </S.UserInfo>
            )
        )}
      </div>
      {isModalOpen && (
        <Modal $width='50rem' $height='30rem' onClose={closeModal}>
          <ModalTit title='신고' />
          <S.Report>
            <BasicTextArea
              $height={'13rem'}
              content={reportContent}
              setContent={setReportContent}
              placeholder={'예) 지속적인 폭언과 욕설'}
            />
          </S.Report>
          <BasicButton
            type='button'
            children={'제출'}
            $width='100%'
            onClick={handelReport}
            $fontcolor={theme.colors.white}
            $bgColor={theme.colors.blue}
          />
        </Modal>
      )}
    </S.Wrapper>
  )
}
