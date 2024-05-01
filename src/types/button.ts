import React from 'react'

export interface BasicButtonProps {
  children: React.ReactNode
  type: 'button' | 'submit' | 'reset'
  onClick?: () => void
  $bgColor: string
  $hoverBgColor?: string
  $fontcolor?: string
  $borderColor?: string
  $width?: string
  $height?: string
}
