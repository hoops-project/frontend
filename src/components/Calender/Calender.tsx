import Slider from '../common/Slider/Slider.tsx'
import { S } from './Calender.style.ts'
import { useState } from 'react'
import { useDateStore } from '../../store/calender.ts'

export default function Calender() {
  const [selected, setSelected] = useState<number>(0)

  const { setDate: globalSetDate } = useDateStore()

  const handleClick = (index: number, date: Date) => {
    setSelected(index)

    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()

    globalSetDate(
      `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`
    )
  }

  const currentDate = new Date()

  const getDayName = (date: Date) => {
    const dayNames = ['일', '월', '화', '수', '목', '금', '토']
    return dayNames[date.getDay()]
  }

  const getColorByDayOfWeek = (dayOfWeek: string) => {
    switch (dayOfWeek) {
      case '토':
        return 'blue'
      case '일':
        return 'red'
      default:
        return 'black'
    }
  }

  const generateDates = (startDate: Date, days: number) => {
    return Array.from({ length: days }, (_, index) => {
      const date = new Date(startDate)
      date.setDate(startDate.getDate() + index)
      return date
    })
  }

  const dates = generateDates(currentDate, 14)

  return (
    <S.Container>
      <Slider
        arrowVisible={true}
        indicators={false}
        cycle={true}
        sx={{ paddingLeft: '2rem', paddingRight: '2rem' }}
      >
        <S.Item>
          {dates.slice(0, 7).map((date, index) => (
            <S.Date
              key={index}
              role={'button'}
              onClick={() => handleClick(index, date)}
              $selected={selected === index}
              $dateColor={getColorByDayOfWeek(getDayName(date))}
            >
              <p>{date.getDate()}</p>
              <p>{getDayName(date)}</p>
            </S.Date>
          ))}
        </S.Item>
        <S.Item>
          {dates.slice(7, 14).map((date, index) => (
            <S.Date
              key={index}
              role={'button'}
              onClick={() => handleClick(index + 7, date)}
              $selected={selected === index + 7}
              $dateColor={getColorByDayOfWeek(getDayName(date))}
            >
              <p>{date.getDate()}</p>
              <p>{getDayName(date)}</p>
            </S.Date>
          ))}
        </S.Item>
      </Slider>
    </S.Container>
  )
}
