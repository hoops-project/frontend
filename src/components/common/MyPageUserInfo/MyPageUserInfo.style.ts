import styled from 'styled-components'

export const S = {
  Wrapper: styled.div`
    position: relative;
    width: 100%;
  `,
  ListBox: styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
  `,
  ListItem: styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    justify-content: space-between;
    padding-bottom: 1rem;

    .nickname {
      width: 6rem;
      font-size: 1.4rem;
      font-weight: bold;
      color: ${(props) => props.theme.colors.black};
    }

    .rating {
      max-width: 6rem;
      font-size: 1.6rem;
      font-weight: bold;
      color: ${(props) => props.theme.colors.gray_600};
    }

    > p:nth-child(n + 3):nth-child(-n + 5) {
      color: #444444;
      border: 1px solid #e4e4e4;
      border-radius: 3rem;
      padding: 1.2rem;
      cursor: pointer;
    }
  `,
}
