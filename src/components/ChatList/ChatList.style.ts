import styled from 'styled-components'

export const S = {
  Wrapper: styled.div`
    height: 100vh;
    overflow-y: scroll;
  `,
  Chat: styled.div`
    margin: 2rem 0 2rem 2rem;
    & > p {
      font-size: 1.2rem;
      padding-left: 4.5rem;
      margin-top: 0.8rem;
    }
  `,
  ChatUserInfo: styled.div`
    display: flex;
    align-items: center;
    & > div {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      color: ${({ theme }) => theme.colors.white};
      background-color: ${(props) => props.theme.colors.blue};
      width: 3rem;
      height: 3rem;
      border-radius: 100%;
      margin-right: 1rem;
    }
    & > p {
      color: ${({ theme }) => theme.colors.gray_700};
    }
  `,
  ContentWrapper: styled.div`
    padding-left: 4rem;
    & > strong {
      display: block;
      padding: 1rem;
      background-color: ${({ theme }) => theme.colors.gray_300};
      width: fit-content;
      border-radius: 1rem;
      font-size: 1.4rem;
    }
  `,
}
