import styled from 'styled-components'

export const S = {
  Wrapper: styled.div`
    width: 100%;
    min-height: 100vh;
    background: ${(props) => props.theme.colors.white};
    padding: 2rem;
    & > p {
      font-size: 2rem;
      font-weight: bold;
    }
  `,
  ListContainer: styled.div`
    height: calc(50% - 2rem);
    & > div:nth-child(1) {
      margin: 2.5rem 0 2.5rem 0;
    }
  `,
}
