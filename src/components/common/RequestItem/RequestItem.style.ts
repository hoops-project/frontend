import styled from 'styled-components'

export const S = {
  RequestItem: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 0.1rem solid ${(props) => props.theme.colors.gray_300};

    & > img {
      cursor: pointer;
    }
  `,
  ButtonWrapper: styled.div`
    display: flex;
    flex-direction: column;
    & > button:first-child {
      margin-bottom: 1rem;
    }
  `,
}
