import { useState } from 'react'
import BasicButton from '../../components/common/BasicButton/BasicButton'
import { theme } from '../../styles/theme'
import { S } from '../ReportItem/ReportItem.style'

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

  const handleButtonClick = (buttonText: string) => {
    setSelectedButton(buttonText)
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
    </S.ContentBox>
  )
}
