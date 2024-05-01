import { S } from '../../pages/Main/Main.style.ts'
import SelectBox from '../common/SelectBox/SelectBox.tsx'
import { Selected } from '../../types/select.ts'

export default function MainSelectList({ selected }: Selected) {
  return (
    <S.Option>
      <SelectBox
        name={'지역'}
        options={['서울', '경기']}
        size={'small'}
        width={80}
        value={selected.region}
        setValue={selected.setRegion}
      />
      <SelectBox
        name={'마감'}
        options={['표시', '가리기']}
        size={'small'}
        width={100}
        value={selected.showOver}
        setValue={selected.setShowOver}
      />
      <SelectBox
        name={'성별'}
        options={['남자', '여자']}
        size={'small'}
        width={80}
        value={selected.gender}
        setValue={selected.setGender}
      />
      <SelectBox
        name={'실내외'}
        options={['실내', '실외']}
        size={'small'}
        width={80}
        value={selected.gamePlace}
        setValue={selected.setGamePlace}
      />
      <SelectBox
        name={'경기'}
        options={['3 vs 3', '4 vs 4', '5 vs 5']}
        size={'small'}
        width={100}
        value={selected.gameType}
        setValue={selected.setGameType}
      />
    </S.Option>
  )
}
