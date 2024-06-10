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
  const isOver: boolean = dayjs(match.startDateTime).isBefore(dayjs())

  return (
    <CS.Link to={`/detail/${match.gameId}`} aria-label={match.title}>
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
              <p>{match.inviteYn ? '친구초대 가능' : '친구초대 불가'}</p>
            </div>
          </S.Match>
        </S.Info>
        <BasicButton
          type={'button'}
          $bgColor={isOver ? theme.colors.gray_500 : theme.colors.blue}
          $width={'13rem'}
          $fontcolor={theme.colors.white}
        >
          {isOver ? '마감' : '참가'}
        </BasicButton>
      </S.container>
    </CS.Link>
  )
}
