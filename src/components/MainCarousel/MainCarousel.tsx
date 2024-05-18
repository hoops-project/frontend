import { S } from './MainCarousel.style.ts'
import banner from '../../assets/banner.png'
import Slider from '../common/Slider/Slider.tsx'

export default function MainCarousel() {
  return (
    <S.container>
      <Slider animation={'fade'} autoPlay={true} cycle={true}>
        <S.Item>
          <img src={banner} alt={'배너'} />
        </S.Item>
        <S.Item>
          <img src={banner} alt={'배너'} />
        </S.Item>
      </Slider>
    </S.container>
  )
}
