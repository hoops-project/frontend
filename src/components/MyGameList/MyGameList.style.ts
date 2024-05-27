import styled from 'styled-components'

export const S = {
  Wrapper: styled.div`
    background: ${(props) => props.theme.colors.white};
    padding: 2rem;
    display: flex;
    flex-direction: column;

    & > p {
      font-size: 2rem;
      font-weight: bold;
    }
  `,
  ListContainer: styled.div`
    margin-bottom: 3rem;
    & > div:nth-child(1) {
      min-height: 51rem;
      margin-bottom: 1.5rem;
      display: flex;
      flex-direction: column;
    }
  `,
  Loading: styled.div`
    min-height: 51rem;
  `,
}
