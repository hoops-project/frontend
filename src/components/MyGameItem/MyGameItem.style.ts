import styled from 'styled-components'
import { theme } from '../../styles/theme.ts'

export const S = {
  GameItem: styled.div<{ $isJoined: boolean }>`
    font-size: 1.4rem;
    background-color: ${(props) =>
      props.$isJoined ? theme.colors.gray_300 : theme.colors.white_gray};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    border-radius: 1rem;
    margin-top: 1.5rem;
    cursor: pointer;
    font-weight: ${(props) => (props.$isJoined ? 'bold' : '')};

    & > div:nth-child(1) {
      display: grid;
      gap: 0.8rem;

      & > p:first-of-type {
        width: 15rem;
      }
    }
    & > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      align-items: center;

      & > p:nth-child(1) {
        margin-bottom: 1rem;
      }
      & > p:nth-child(2) {
        font-size: 1.2rem;
        color: ${(props) => props.theme.colors.gray_500};
      }
    }
  `,
}
