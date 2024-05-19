import { S } from './MatchItem.style.ts'
import BasicButton from '../common/BasicButton/BasicButton.tsx'
import { theme } from '../../styles/theme.ts'
import { MatchData } from '../../types/match.ts'
import { CS } from '../../styles/commonStyle.ts'
import dayjs from 'dayjs'
import {
  convertGameType,
  convertGender,
} from '../../helper/convertValueToName.ts'

export default function MatchItem({ match }: MatchData) {
  return (
    <CS.Link to={`/detail/${match.gameId}`}>
      <S.container>
        <S.Info>
          <div>
            <p>{dayjs(match.startDateTime).format('YYYY-MM-DD')}</p>
          </div>
          <S.Match>
            <p>{match.title}</p>
            <div>
              <p>{convertGender(match.gender)}</p>
              <p>{convertGameType(match.matchFormat)}</p>
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
