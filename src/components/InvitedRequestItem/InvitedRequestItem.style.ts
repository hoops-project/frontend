import styled from 'styled-components'

export const S = {
  Invite: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;

    & > svg {
      width: 2.5rem;
      height: 2.5rem;
    }
    border-bottom: 0.1rem solid ${(props) => props.theme.colors.gray_300};
  `,
  ButtonWrapper: styled.div`
    display: flex;
    flex-direction: column;
    & > button:first-child {
      margin-bottom: 1rem;
    }
  `,
}
