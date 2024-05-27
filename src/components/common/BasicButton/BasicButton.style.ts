import styled from 'styled-components'
import { BasicButtonProps } from '../../../types/button.ts'
import { theme } from '../../../styles/theme.ts'

export const S = {
  BasicButton: styled.button<BasicButtonProps>`
    width: ${(props) => props.$width};
    height: ${(props) => props.$height};
    font-size: 1.4rem;
    color: ${(props) => props.$fontcolor};
    background-color: ${(props) =>
      props.disabled ? theme.colors.gray_500 : props.$bgColor};
    border: 0.1rem solid
      ${(props) => (props.$borderColor ? props.$borderColor : props.$bgColor)};
    padding: 1.2rem 0.6rem;
    border-radius: 0.8rem;
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.$hoverBgColor};
    }
  `,
}
