import Carousel from 'react-material-ui-carousel'
import { S } from './Slider.style'
import React from 'react'
import { SxProps, Theme } from '@mui/material'

interface SliderProps {
  children: React.ReactNode
  animation?: 'slide' | 'fade'
  arrowVisible?: boolean
  autoPlay?: boolean
  cycle?: boolean
  indicators?: boolean
  sx?: SxProps<Theme>
}

export default function Slider({
  children,
  animation = 'slide',
  arrowVisible = false,
  autoPlay = false,
  cycle = false,
  indicators = true,
  sx,
}: SliderProps) {
  return (
    <S.container>
      <Carousel
        sx={sx}
        indicators={indicators}
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
