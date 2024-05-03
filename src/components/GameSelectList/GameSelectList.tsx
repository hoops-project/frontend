import SelectBox from '../common/SelectBox/SelectBox.tsx'
import { GameSelectedProps } from '../../types/select.ts'
import { OPTIONS } from '../../constants/selectOption.ts'
import { S } from './GameSelectList.style.ts'

export default function GameSelectList({ selected }: GameSelectedProps) {
  return (
    <S.Option>
      <SelectBox
        name={'성별'}
        options={OPTIONS.GENDER}
        size={'small'}
        width={80}
        value={selected.gender}
        setValue={selected.setGender}
      />
      <SelectBox
        name={'경기'}
        options={OPTIONS.GAME_TYPE}
        size={'small'}
        width={80}
        value={selected.gameType}
        setValue={selected.setGameType}
      />
      <SelectBox
        name={'인원'}
        options={OPTIONS.TOTAL_PLAYERS}
        size={'small'}
        width={80}
        value={selected.totalPlayers}
        setValue={selected.setTotalPlayers}
      />
      <SelectBox
        name={'초대'}
        options={OPTIONS.ADD_FRIEND}
        size={'small'}
        width={80}
        value={selected.addFriends}
        setValue={selected.setAddFriends}
      />
      <SelectBox
        name={'실내외'}
        options={OPTIONS.GAME_PLACE}
        size={'small'}
        width={80}
        value={selected.gamePlace}
        setValue={selected.setGamePlace}
      />
      <SelectBox
        name={'시간'}
        options={OPTIONS.GAME_TIME}
        size={'small'}
        width={80}
        value={selected.time}
        setValue={selected.setTime}
      />
      <SelectBox
        name={'날짜'}
        options={OPTIONS.GAME_DATE}
        size={'small'}
        width={80}
        value={selected.date}
        setValue={selected.setDate}
      />
    </S.Option>
  )
}
