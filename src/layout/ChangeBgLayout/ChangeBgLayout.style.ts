import styled from 'styled-components'

export const S = {
  LayOut: styled.div<{ $bg: string }>`
    background-color: ${({ $bg }) => $bg};
    min-height: ${(props) => props.theme.height.full};
  `,
}
