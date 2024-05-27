import styled from 'styled-components'

export const S = {
  Form: styled.form`
    display: flex;

    & > input {
      width: 80%;
    }
    & > button {
      margin-left: 1.5rem;
    }
  `,
  UserId: styled.div`
    margin-top: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    & > p:first-child {
      font-size: 1.9rem;
      margin-bottom: 2rem;
    }

    & > p:nth-child(2) {
      font-weight: bold;
    }

    & > a {
      font-size: 1.4rem;
      margin-top: 7rem;
      color: ${(props) => props.theme.colors.blue};
    }
  `,
}
