import { S } from './BasicTextArea.style.ts'
import React from 'react'

interface BasicTextAreaProps {
  placeholder?: string
  content: string
  setContent: React.Dispatch<React.SetStateAction<string>>
  $height?: string
}

export default function BasicTextArea({
  placeholder,
  setContent,
  content,
  $height = '30rem',
}: BasicTextAreaProps) {
  return (
    <S.TextArea
      $height={$height}
      placeholder={placeholder}
      value={content}
      onChange={(e) => setContent(e.target.value)}
    ></S.TextArea>
  )
}
