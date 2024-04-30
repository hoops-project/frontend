import styled from 'styled-components'

export const S = {
  LayOut: styled.div<{ $gray: boolean }>`
    background-color: ${({ $gray }) => ($gray ? '#f2f3f4' : '#ffffff')};
    min-height: ${(props) => props.theme.height.full};
  `,
}
