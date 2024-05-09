import { S } from './GameUserList.style.ts'
import BasicButton from '../common/BasicButton/BasicButton.tsx'
import { theme } from '../../styles/theme.ts'
import reportIcon from '../../assets/report_icon.svg'
import { MyGameUserList } from '../../types/game.ts'

export default function GameUserList({ userInfo }: MyGameUserList) {
  const userId = 1

  return (
    <S.Wrapper>
      <p>유저 목록</p>
      <div>
        {userInfo.map(
          (info) =>
            userId !== info.userId && (
              <S.UserInfo key={info.userId}>
                <p>{info.name}</p>
                {userId === info.gameId ? <p>팀장</p> : <p>팀원</p>}
                <p>{info.rate}</p>
                <BasicButton
                  type={'button'}
                  $bgColor={theme.colors.blue}
                  $fontcolor={theme.colors.white}
                  $width={'7rem'}
                >
                  친구 추가
                </BasicButton>
                <img src={reportIcon} alt={'신고 아이콘'} />
              </S.UserInfo>
            )
        )}
      </div>
    </S.Wrapper>
  )
}
