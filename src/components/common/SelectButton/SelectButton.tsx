import { theme } from '../../../styles/theme.ts'
import { SelectButtonProps } from '../../../types/button.ts'
import { S } from './SelectButton.style.ts'

export default function SelectButton({
  children,
  type = 'button',
  onClick,
  $bgColor = theme.colors.white,
  $hoverBgColor,
  $fontcolor = theme.colors.black,
  $borderColor = theme.colors.blue,
  $width,
  $height,
  $isSelected,
}: SelectButtonProps) {
  return (
    <S.SelectButton
      type={type}
      onClick={onClick}
      $bgColor={$bgColor}
      $fontcolor={$fontcolor}
      $borderColor={$borderColor}
      $hoverBgColor={$hoverBgColor}
      $width={$width}
      $height={$height}
      $isSelected={$isSelected}
    >
      {children}
    </S.SelectButton>
  )
}
