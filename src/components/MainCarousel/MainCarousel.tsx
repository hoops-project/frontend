import Carousel from 'react-material-ui-carousel'
import { S } from './MainCarousel.style.ts'
import banner from '../../assets/banner.png'

export default function MainCarousel() {
  return (
    <S.container>
      <Carousel cycleNavigation={true} navButtonsAlwaysVisible={false}>
        <S.Item>
          <img src={banner} alt={'배너'} />
        </S.Item>
        <S.Item>
          <img src={banner} alt={'배너'} />
        </S.Item>
      </Carousel>
    </S.container>
  )
}
