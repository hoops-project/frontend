import { useState } from 'react'
import { S } from '../Report/Report.style'
import BasicButton from '../../components/common/BasicButton/BasicButton'
import { theme } from '../../styles/theme'

export default function Report() {
  const [selectedButton, setSelectedButton] = useState<string | null>(null)

  const handleButtonClick = (buttonText: string) => {
    setSelectedButton(buttonText)
  }

  // NOTICE: 임시 데이터
  const report = {
    title: '신고 받은 유저 리스트',
  }

  const titles = ['이름', '평점', '스타일']

  const reports = [
    {
      name: '오신웅',
      rating: '4.5',
      buttons: ['남자', '공격적', '슛'],
    },
    {
      name: '오신웅',
      rating: '4.5',
      buttons: ['남자', '공격적', '슛'],
    },
    {
      name: '오신웅',
      rating: '4.5',
      buttons: ['남자', '공격적', '슛'],
    },
    {
      name: '오신웅',
      rating: '4.5',
      buttons: ['남자', '공격적', '슛'],
    },
  ]

  return (
    <S.Wrapper>
      <p>{report.title}</p>
      <S.TopTit>
        <div className='tit_box'>
          {titles.map((title, index) => (
            <p key={index} className={title === '스타일' ? 'styled' : ''}>
              {title}
            </p>
          ))}
        </div>
      </S.TopTit>
      {reports.map((report, index) => (
        <S.ContentBox key={index}>
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
      ))}
    </S.Wrapper>
  )
}
