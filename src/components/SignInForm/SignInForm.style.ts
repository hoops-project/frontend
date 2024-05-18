import styled from 'styled-components'

export const S = {
  ErrorWrapper: styled.div`
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    color: red;
  `,

  RememberId: styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;

    & > p {
      margin-left: 0.6rem;
      margin-top: 0.2rem;
      color: ${(props) => props.theme.colors.gray_500};
      font-size: 1.4rem;
    }
  `,
}
