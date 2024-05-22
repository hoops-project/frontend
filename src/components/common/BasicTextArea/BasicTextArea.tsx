import { S } from './BasicTextArea.style.ts'
import React from 'react'

interface BasicTextAreaProps {
  placeholder?: string
  content: string
  setContent: React.Dispatch<React.SetStateAction<string>>
}

export default function BasicTextArea({
  placeholder,
  setContent,
  content,
}: BasicTextAreaProps) {
  return (
    <S.TextArea
      placeholder={placeholder}
      value={content}
      onChange={(e) => setContent(e.target.value)}
    ></S.TextArea>
  )
}
