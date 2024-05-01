import { styled } from 'styled-components'

export const S = {
  BottomContainer: styled.div`
    text-align: center;
    & a {
      text-decoration: none;
      font-size: 1.3rem;
      color: ${(props) => props.theme.colors.purple};
    }
  `,
}
