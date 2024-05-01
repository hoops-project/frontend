import { styled } from 'styled-components'

export const S = {
  TopText: styled.p`
    font-size: 2rem;
    color: ${(props) => props.theme.colors.blue_100};
    text-align: center;
    padding-top: 5rem;
  `,
}
