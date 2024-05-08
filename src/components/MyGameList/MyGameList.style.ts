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
    margin-bottom: 3rem;

    & > div:nth-child(1) {
      margin-bottom: 1.5rem;
    }
  `,
}
