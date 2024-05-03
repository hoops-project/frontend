import { CS } from '../../styles/commonStyle.ts'
import TopNavTitle from '../../components/common/TopNavTitle/TopNavTitle.tsx'
import GameSelectList from '../../components/GameSelectList/GameSelectList.tsx'
import { useSelectBox } from '../../hooks/useSelectBox.ts'
import BasicInput from '../../components/common/BasicInput/BasicInput.tsx'
import { useState } from 'react'
import { S } from './AddGame.style.ts'
import BasicButton from '../../components/common/BasicButton/BasicButton.tsx'
import { theme } from '../../styles/theme.ts'

export default function AddGame() {
  const [gameTitle, setGameTitle] = useState<string>('')
  const [query, setQuery] = useState<string>('')
  const useGameSelect = useSelectBox()

  return (
    <CS.DefaultContainer>
      <S.container>
        <TopNavTitle title={'팀원을 모을 경기를 생성해 보세요!'} />
        <GameSelectList selected={useGameSelect} />
        <div>
          <S.InputWrapper>
            <label htmlFor={'game-title'}>모임 이름</label>
            <BasicInput
              value={gameTitle}
              onChange={(e) => setGameTitle(e.target.value)}
              type={'text'}
              id={'game-title'}
              placeholder={'모임 이름을 설정하세요.'}
            />
          </S.InputWrapper>
          <S.Form>
            <label htmlFor={'game-place'}>위치</label>
            <div>
              <BasicInput
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type={'text'}
                id={'game-place'}
                placeholder={'장소명으로 검색해 주세요.'}
              />
              <BasicButton
                type={'submit'}
                $bgColor={theme.colors.blue_100}
                $width={'20rem'}
                $fontcolor={theme.colors.blue}
              >
                검색
              </BasicButton>
            </div>
          </S.Form>
        </div>
      </S.container>
    </CS.DefaultContainer>
  )
}
