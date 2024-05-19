import styled from 'styled-components'

export const S = {
  Wrapper: styled.div`
    padding: 5rem 0 5rem 0;
  `,
  CenterWrapper: styled.div`
    text-align: center;
  `,
  HiddenRef: styled.div`
    visibility: hidden;
    height: 2rem;
    background-color: red;
  `,
  NoResult: styled.div`
    width: 100%;
    height: 100%;
    padding-top: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;

    & > p {
      color: ${(props) => props.theme.colors.gray_500};
      font-weight: bold;
    }
  `,
}
