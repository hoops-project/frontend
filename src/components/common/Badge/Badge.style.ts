import styled from 'styled-components'
import { BadgeProps } from './Badge.tsx'

export const S = {
  Badge: styled.div<BadgeProps>`
    width: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.3rem 1.5rem 0.3rem 1.5rem;
    font-size: 1.2rem;
    color: ${(props) => props.$fontcolor};
    background-color: ${(props) => props.$bgColor};
    border: 0.1rem solid
      ${(props) => (props.$borderColor ? props.$borderColor : props.$bgColor)};
    border-radius: 0.4rem;
    cursor: pointer;
  `,
}
