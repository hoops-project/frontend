import { S } from './MainCarousel.style.ts'
import bannerWebp from '../../assets/banner.webp'
import bannerPng from '../../assets/banner.png'
import Slider from '../common/Slider/Slider.tsx'

export default function MainCarousel() {
  return (
    <S.container>
      <Slider animation={'fade'} autoPlay={true} cycle={true}>
        <S.Picture>
          <source srcSet={bannerWebp} type='image/webp' />
          <source srcSet={bannerPng} type='image/png' />
          <img src={bannerPng} alt='첫 번째 배너 이미지' />
        </S.Picture>
        <S.Picture>
          <source srcSet={bannerWebp} type='image/webp' />
          <source srcSet={bannerPng} type='image/png' />
          <img src={bannerPng} alt='두 번째 배너 이미지' />
        </S.Picture>
      </Slider>
    </S.container>
  )
}
