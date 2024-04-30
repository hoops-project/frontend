import { ReactNode } from 'react'
import { S } from './DefaultLayout.style.ts'

export default function DefaultLayout({
  children,
  isGray,
}: {
  children: ReactNode
  isGray: boolean
}) {
  return <S.LayOut $gray={isGray}>{children}</S.LayOut>
}
