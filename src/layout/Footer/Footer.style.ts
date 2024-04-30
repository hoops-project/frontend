import styled from 'styled-components'

export const S = {
  Footer: styled.footer`
    width: 100%;
    height: 9.4rem;
    border-top: 0.1rem solid lightgray;
    background-color: ${(props) => props.theme.colors.footer};
  `,
  Info: styled.div`
    margin: 0 auto;
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60rem;
    height: 100%;
    color: ${({ theme }) => theme.colors.gray_700};
    & > div:first-child {
      display: flex;
      & > p {
        margin: 0 1rem 0 1rem;
      }
    }
    & > div:last-child {
      margin-top: 2rem;
      color: ${({ theme }) => theme.colors.gray_500};
    }
  `,
}
