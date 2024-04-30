import { S } from './Badge.style.ts'
import React from 'react'

export interface BadgeProps {
  $bgColor: string
  $fontcolor?: string
  $borderColor?: string
  children: React.ReactNode
}

export default function Badge({
  children,
  $bgColor,
  $fontcolor,
  $borderColor,
}: BadgeProps) {
  return (
    <S.Badge
      $bgColor={$bgColor}
      $fontcolor={$fontcolor}
      $borderColor={$borderColor}
    >
      <p>{children}</p>
    </S.Badge>
  )
}
