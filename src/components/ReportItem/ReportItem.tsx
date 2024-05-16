import { useState } from 'react'
import BasicButton from '../../components/common/BasicButton/BasicButton'
import { theme } from '../../styles/theme'
import { S } from '../ReportItem/ReportItem.style'
import ContentModal from '../common/ContentModal/ContentModal'

interface Report {
  name: string
  rating: string
  buttons: string[]
}

interface ReportItemProps {
  report: Report
}

export default function ReportItem({ report }: ReportItemProps) {
  const [selectedButton, setSelectedButton] = useState<string | null>(null)
  const [showModal, setShowModal] = useState<boolean>(false) // 모달 열고 닫는 상태

  const handleButtonClick = (buttonText: string) => {
    setSelectedButton(buttonText)
  }

  const openModal = () => {
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <S.ContentBox>
      <S.ListBox>
        <p>{report.name}</p>
        <p>{report.rating}</p>
        <S.ButtonWrapper>
          {report.buttons.map((button, buttonIndex) => (
            <S.Button
              key={buttonIndex}
              onClick={() => handleButtonClick(button)}
              className={selectedButton === button ? 'selected' : ''}
            >
              {button}
            </S.Button>
          ))}
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
        >
          블랙
        </BasicButton>
      </S.SubmitWrapper>
      {/* 임의의 데이터를 넣으면 될거 같아요 */}
      {showModal && ( // 모달 열렸을 때만 모달 표시
        <ContentModal
          onClose={closeModal}
          title={'모달타이틀'}
          content={'제가 욕을 했어요'}
        />
      )}
    </S.ContentBox>
  )
}
