import styled from 'styled-components'

export const S = {
  InputWrapper: styled.div`
    padding: 1rem 0 1rem 0;
  `,
  ValidWrapper: styled.div`
    display: flex;
    & > span {
      font-size: 1.2rem;
      color: red;
      margin-left: 0.6rem;
    }

    & > img {
      transform: translateY(-0.5rem);
      padding-left: 0.6rem;
      width: 1.7rem;
      height: 1.7rem;
    }
  `,
  InputLabel: styled.label`
    font-size: 1.4rem;
    padding-bottom: 1rem;
    color: ${(props) => props.theme.colors.gray_500};
  `,

  DuplicateWrapper: styled.div`
    display: flex;

    & > button {
      margin-left: 1rem;
    }
  `,
}
