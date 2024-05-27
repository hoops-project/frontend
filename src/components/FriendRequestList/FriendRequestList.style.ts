import styled from 'styled-components'

export const S = {
  Wrapper: styled.div`
    background-color: ${(props) => props.theme.colors.white};
    height: calc(50vh - 4rem);
    margin-bottom: 1rem;
    padding: 4rem 2rem 2rem 2rem;
    overflow: scroll;
    & > p {
      margin-bottom: 3rem;
      font-weight: bold;
      font-size: 1.8rem;
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
