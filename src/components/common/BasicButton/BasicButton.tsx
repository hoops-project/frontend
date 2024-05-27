import { S } from './BasicButton.style.ts'
import { theme } from '../../../styles/theme.ts'
import { BasicButtonProps } from '../../../types/button.ts'

export default function BasicButton({
  children,
  type = 'button',
  onClick,
  disabled,
  $bgColor = theme.colors.blue,
  $hoverBgColor,
  $fontcolor = theme.colors.black,
  $borderColor,
  $width,
  $height,
}: BasicButtonProps) {
  return (
    <S.BasicButton
      type={type}
      disabled={disabled}
      onClick={onClick}
      $bgColor={$bgColor}
      $hoverBgColor={$hoverBgColor}
      $fontcolor={$fontcolor}
      $borderColor={$borderColor}
      $width={$width}
      $height={$height}
    >
      {children}
    </S.BasicButton>
  )
}
