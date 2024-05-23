import { S } from './MatchData.style.ts'
import { Pie } from 'react-chartjs-2'
import {
  ArcElement,
  Chart as ChartJS,
  ChartOptions,
  Legend,
  Tooltip,
  TooltipItem,
} from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { theme } from '../../styles/theme.ts'
import { ParticipantUser } from '../../types/detail.ts'

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels)

export default function MatchData({
  userList,
  content,
}: {
  userList: ParticipantUser[]
  content: string
}) {
  // `playStyle` 빈도 계산
  const playStyleCounts: Record<string, number> = userList.reduce(
    (acc: Record<string, number>, participant: ParticipantUser) => {
      acc[participant.playStyle] = (acc[participant.playStyle] || 0) + 1
      return acc
    },
    {}
  )

  // 차트 데이터 설정
  const data = {
    labels: Object.keys(playStyleCounts),
    datasets: [
      {
        data: Object.values(playStyleCounts),
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
        ],
        borderColor: 'white',
        borderWidth: 1,
      },
    ],
  }

  const options: ChartOptions<'pie'> = {
    plugins: {
      datalabels: {
        color: `${theme.colors.white}`,
        anchor: 'end',
        align: 'start',
        offset: 20,
        font: {
          weight: 'bold',
          size: 20,
        },
        formatter: (value: number, context: any) => {
          const total = context.chart.data.datasets[0].data.reduce(
            (acc: number, curr: number) => acc + curr,
            0
          )
          return ((value / total) * 100).toFixed(2) + '%' // 퍼센테이지 계산
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem: TooltipItem<'pie'>) {
            const dataset = tooltipItem.dataset
            const total = dataset.data.reduce(
              (previousValue: number, currentValue: number) =>
                previousValue + currentValue,
              0
            )
            const currentValue = dataset.data[tooltipItem.dataIndex]
            const percentage = Math.floor((currentValue / total) * 100 + 0.5)
            return `${tooltipItem.label}: ${currentValue} (${percentage}%)`
          },
        },
      },
    },
  }

  return (
    <S.MatchData>
      <p>메치 데이터</p>
      <S.MatchContent>
        <p>경기 규칙</p>
        <br />
        {content}
      </S.MatchContent>
      <span>총인원 : {userList.length}</span>
      <div>
        <Pie data={data} options={options} />
      </div>
    </S.MatchData>
  )
}
