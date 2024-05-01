import styled from 'styled-components'
import { theme } from '../../styles/theme.ts'

export const S = {
  Container: styled.div`
    height: 100%;
    margin-top: 6rem;
  `,
  Item: styled.div`
    min-height: 6rem;
    padding: 2rem;
    display: flex;
    justify-content: space-around;
  `,
  Date: styled.div<{
    $selected: boolean
    $dateColor: string
  }>`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 3rem;
    padding: 1rem 0 1rem 0;
    margin: 0 1rem 0 1rem;
    cursor: pointer;

    background-color: ${(props) =>
      props.$selected ? theme.colors.blue : theme.colors.white};
    color: ${(props) =>
      props.$selected ? theme.colors.white : props.$dateColor};

    & > p:first-of-type {
      font-size: 1.6rem;
    }

    & > p:last-of-type {
      font-size: 1.2rem;
    }
  `,
}
