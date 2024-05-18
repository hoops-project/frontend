import styled from 'styled-components'
import { SelectButtonProps } from '../../../types/button.ts'
import { theme } from '../../../styles/theme.ts'

export const S = {
  SelectButton: styled.button<SelectButtonProps>`
    width: ${(props) => props.$width};
    height: ${(props) => props.$height};
    font-size: 1.4rem;
    color: ${(props) =>
      props.$isSelected ? theme.colors.blue : theme.colors.gray_400};
    background-color: ${(props) => props.$bgColor};
    border: 0.1rem solid
      ${(props) =>
        props.$isSelected ? theme.colors.blue : theme.colors.gray_400};
    padding: 1.2rem 0.6rem;
    border-radius: 0.8rem;
    transition: all 0.3s;
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    font-weight: ${(props) => (props.$isSelected ? '600' : '500')};

    &:hover {
      background-color: ${(props) => props.$hoverBgColor};
    }
  `,
}
