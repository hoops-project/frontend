import React from 'react'

export interface ModalProps {
  children: React.ReactNode
  onClick?: () => void
  onClose?: () => void
  $width?: string
  $height?: string
}
