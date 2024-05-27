import styled from 'styled-components'

export const S = {
  Wrapper: styled.div`
    background-color: ${(props) => props.theme.colors.white};
    height: calc(100vh - 10rem);

    & > p {
      width: 100%;
      text-align: center;
      padding-top: 2rem;
      font-weight: bold;
      font-size: 1.8rem;
      color: ${(props) => props.theme.colors.gray_500};
    }
  `,
  LockContainer: styled.div`
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;

    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      & > p {
        margin-top: 3rem;
        color: ${(props) => props.theme.colors.gray_500};
      }
    }
  `,
  Invite: styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0 1rem 0;

    & > svg {
      width: 2.5rem;
      height: 2.5rem;
    }
    border-bottom: 1px solid ${(props) => props.theme.colors.gray_300};
  `,
  ButtonWrapper: styled.div`
    display: flex;
    flex-direction: column;
    & > button:first-child {
      margin-bottom: 1rem;
    }
  `,
}
