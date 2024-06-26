import {
  abilities,
  gender,
  playStyle,
} from '../../../constants/signUpSelect.ts'
import SelectButton from '../SelectButton/SelectButton.tsx'
import { theme } from '../../../styles/theme.ts'
import { S } from './UserInfoSelect.style.ts'
import { StyleSelectedProps } from '../../../types/select.ts'

export default function UserInfoSelect({
  selected,
  disabled,
}: StyleSelectedProps) {
  return (
    <S.SelectSection>
      <>
        <S.InputLabel>성별</S.InputLabel>
        <S.SelectWrapper>
          {gender.map((gender, index) => (
            <div key={gender}>
              <SelectButton
                disabled={disabled ?? false}
                type={'button'}
                $bgColor={theme.colors.white}
                $width={'100%'}
                onClick={() => selected.handleGenderSelect(index)}
                $isSelected={selected.genderSelected === index}
              >
                {gender}
              </SelectButton>
            </div>
          ))}
        </S.SelectWrapper>
      </>
      <>
        <S.InputLabel>플레이 스타일</S.InputLabel>
        <S.SelectWrapper>
          {playStyle.map((style, index) => (
            <div key={style}>
              <SelectButton
                disabled={disabled ?? false}
                type={'button'}
                $bgColor={theme.colors.white}
                $width={'100%'}
                onClick={() => selected.handleStyleSelect(index)}
                $isSelected={selected.styleSelected === index}
              >
                {style}
              </SelectButton>
            </div>
          ))}
        </S.SelectWrapper>
      </>
      <>
        <S.InputLabel>자신있는 능력</S.InputLabel>
        <S.SelectWrapper>
          {abilities.map((ability, index) => (
            <div key={ability}>
              <SelectButton
                disabled={disabled ?? false}
                type={'button'}
                $bgColor={theme.colors.white}
                $width={'100%'}
                onClick={() => selected.handleAbilitiesSelect(index)}
                $isSelected={selected.abilitiesSelected === index}
              >
                {ability}
              </SelectButton>
            </div>
          ))}
        </S.SelectWrapper>
      </>
    </S.SelectSection>
  )
}
