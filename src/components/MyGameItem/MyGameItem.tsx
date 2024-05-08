import { S } from './MyGameItem.style.ts'
import Badge from '../common/Badge/Badge.tsx'
import { theme } from '../../styles/theme.ts'
import { MyGameItemProps } from '../../types/game.ts'
import enterDoor from '../../assets/enter_door.svg'
import { useNavigate } from 'react-router-dom'

export default function MyGameItem({
  gameInfo,
  selected,
  setSelected,
}: MyGameItemProps) {
  // NOTICE: 실제로는 로그인시 전역 상태관리 되고 있는 로그인한 유저의 데이터를 불러와야합니다.
  const userId = 1
  const navigate = useNavigate()

  const handleGameItem = () => {
    setSelected(gameInfo.gameId)
    navigate(`/my-game/${gameInfo.gameId}`)
  }

  return (
    <S.GameItem
      role={'button'}
      onClick={handleGameItem}
      $isJoined={selected === gameInfo.gameId}
    >
      <div>
        {gameInfo.gameId === userId && (
          <Badge $bgColor={theme.colors.green} $fontcolor={theme.colors.white}>
            방장
          </Badge>
        )}
        <p>{gameInfo.title}</p>
      </div>
      <div>
        <p>날짜</p>
        <p>{gameInfo.startDateTime}</p>
      </div>
      <img src={enterDoor} alt={'입장 아이콘'} />
    </S.GameItem>
  )
}
