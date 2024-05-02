import { ReactNode } from 'react'
import { S } from './ChangeBgLayout.style.ts'

export default function ChangeBgLayout({
  children,
  $bg,
}: {
  children: ReactNode
  $bg: string
}) {
  return <S.LayOut $bg={$bg}>{children}</S.LayOut>
}
