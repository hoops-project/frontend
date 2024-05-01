import { S } from './BasicButton.style.ts'
import React from 'react'
import { theme } from '../../../styles/theme.ts'

export interface BasicButtonProps {
  children: React.ReactNode
  type: 'button' | 'submit' | 'reset'
  onClick?: () => void
  $bgColor: string
  $hoverBgColor?: string
  $fontcolor?: string
  $borderColor?: string
  $width?: string
}

export default function BasicButton({
  children,
  type = 'button',
  onClick,
  $bgColor = theme.colors.blue,
  $hoverBgColor,
  $fontcolor = theme.colors.black,
  $borderColor,
  $width,
}: BasicButtonProps) {
  return (
    <S.BasicButton
      type={type}
      onClick={onClick}
      $bgColor={$bgColor}
      $hoverBgColor={$hoverBgColor}
      $fontcolor={$fontcolor}
      $borderColor={$borderColor}
      $width={$width}
    >
      {children}
    </S.BasicButton>
  )
}
