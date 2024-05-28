import BasicButton from '../../components/common/BasicButton/BasicButton'
import { theme } from '../../styles/theme'
import { S } from './ReportItem.style.ts'
import Modal from '../common/Modal/Modal'
import ModalSubText from '../common/ModalSubText/ModalSubText'
import ModalTit from '../common/ModalTit/ModalTit'
import useModal from '../../hooks/useModal.ts'
import { ReportedUser } from '../../types/auth.ts'
import { useReportContentAndBlackQuery } from '../../hooks/query/useReportContentAndBlackQuery.ts'

export default function ReportItem({ report }: { report: ReportedUser }) {
  const { isModalOpen, openModal, closeModal } = useModal()

  const { reportContent, addBlackListMutate } = useReportContentAndBlackQuery(
    String(report.reportId)
  )

  console.log(reportContent)

  return (
    <S.ContentBox>
      <S.ListBox>
        <p>{report.userName}</p>
        <p>{report.mannerPoint}</p>
        <S.ButtonWrapper>
          <S.Button>{report.abilityType}</S.Button>
          <S.Button>{report.playStyleType}</S.Button>
          <S.Button>{report.gender}</S.Button>
        </S.ButtonWrapper>
      </S.ListBox>
      <S.SubmitWrapper>
        <BasicButton
          type={'button'}
          $bgColor={theme.colors.blue}
          $width={'13rem'}
          $fontcolor={theme.colors.white}
          onClick={openModal}
        >
          신고 내용
        </BasicButton>
        <BasicButton
          type={'button'}
          $bgColor={theme.colors.red}
          $width={'13rem'}
          $fontcolor={theme.colors.white}
          onClick={() => addBlackListMutate(report.userId)}
        >
          블랙
        </BasicButton>
      </S.SubmitWrapper>
      {isModalOpen && (
        <Modal $width='52rem' $height='32rem' onClose={closeModal}>
          <ModalTit title={reportContent.title} />
          <ModalSubText content={reportContent.detail} />
          <BasicButton
            children={'확인'}
            $bgColor={theme.colors.blue}
            $fontcolor={theme.colors.white}
            type='button'
            $width='100%'
            onClick={closeModal}
          />
        </Modal>
      )}
    </S.ContentBox>
  )
}
