import { S } from './MatchItem.style.ts'
import BasicButton from '../common/BasicButton/BasicButton.tsx'
import { theme } from '../../styles/theme.ts'
import { Match } from '../../types/match.ts'
import { CS } from '../../styles/commonStyle.ts'

export default function MatchItem({ match }: Match) {
  return (
    <CS.Link to={`/detail/${match.id}`}>
      <S.container>
        <S.Info>
          <div>
            <p>{match.time}</p>
          </div>
          <S.Match>
            <p>{match.title}</p>
            <div>
              <p>경기 옵션 정보1</p>
              <p>경기 옵션 정보2</p>
            </div>
          </S.Match>
        </S.Info>
        <BasicButton
          type={'button'}
          $bgColor={theme.colors.blue}
          $width={'13rem'}
          $fontcolor={theme.colors.white}
        >
          마감임박
        </BasicButton>
      </S.container>
    </CS.Link>
  )
}
