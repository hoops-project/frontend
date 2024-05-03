import { S } from '../../pages/Main/Main.style.ts'
import SelectBox from '../common/SelectBox/SelectBox.tsx'
import { MainSelectedProps } from '../../types/select.ts'
import { OPTIONS } from '../../constants/selectOption.ts'

export default function MainSelectList({ selected }: MainSelectedProps) {
  return (
    <S.Option>
      <SelectBox
        name={'지역'}
        options={OPTIONS.REGION}
        size={'small'}
        width={80}
        value={selected.region}
        setValue={selected.setRegion}
      />
      <SelectBox
        name={'마감'}
        options={OPTIONS.GAME_OVER}
        size={'small'}
        width={100}
        value={selected.showOver}
        setValue={selected.setShowOver}
      />
      <SelectBox
        name={'성별'}
        options={OPTIONS.GENDER}
        size={'small'}
        width={80}
        value={selected.gender}
        setValue={selected.setGender}
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
        name={'경기'}
        options={OPTIONS.GAME_TYPE}
        size={'small'}
        width={100}
        value={selected.gameType}
        setValue={selected.setGameType}
      />
    </S.Option>
  )
}
