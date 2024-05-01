import Carousel from 'react-material-ui-carousel'
import { S } from './Slider.style'
import React from 'react'

interface SliderProps {
  children: React.ReactNode
  animation?: 'slide' | 'fade'
  arrowVisible?: boolean
  autoPlay?: boolean
  cycle?: boolean
}

export default function Slider({
  children,
  animation = 'slide',
  arrowVisible = false,
  autoPlay = false,
  cycle = false,
}: SliderProps) {
  return (
    <S.container>
      <Carousel
        autoPlay={autoPlay}
        cycleNavigation={cycle}
        navButtonsAlwaysVisible={arrowVisible}
        animation={animation}
      >
        {children}
      </Carousel>
    </S.container>
  )
}
