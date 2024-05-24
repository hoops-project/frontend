import styled from 'styled-components'
import { theme } from '../../../styles/theme.ts'

export const S = {
  Wrapper: styled.div`
    position: relative;
    width: 100%;
    height: ${theme.height.full};
    max-width: ${theme.width.default};
  `,
  TopTit: styled.div`
    display: flex;
    margin-bottom: 2rem;
    font-weight: 700;
    font-size: 2rem;
    width: 100%;
    justify-content: space-between;

    > a {
      text-decoration: none;
      font-size: 1.5rem;
      color: ${theme.colors.purple};
    }
  `,
  FlexBox: styled.div`
    display: flex;
    gap: 20px;

    > p:first-child {
      margin-left: 2rem;
    }

    > p:nth-child(2) {
      margin-left: 9rem;
    }

    > p:last-child {
      margin-left: 22rem;
    }
  `,

  UnderLine: styled.hr`
    background-color: ${theme.colors.gray_400};
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
    width: 100%;
    padding-bottom: 1rem;
      button {
        margin-left:22rem;
      }
    
    &:not(:last-child) {
      border-bottom: 1px solid ${theme.colors.gray_400};
    }
    p {
      width:10rem;
      text-align: center;
      margin: 0.5rem;
      color: ${theme.colors.gray_700};
      border: 1px solid ${theme.colors.gray_300};
      border-radius: 3rem;
      padding: 1.5rem;
      cursor:pointer;
      &:first-child {
        width:9rem;
        text-align: left;
        border: none;
        font-weight:700;
        color:${theme.colors.black};
      }
      &:nth-child(2) {
        border: none;
        margin: 0;
      }
  `,
}
