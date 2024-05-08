import styled from 'styled-components'
import { theme } from '../../styles/theme.ts'

export const S = {
  Wrapper: styled.div`
    position: relative;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.white};
  `,
  TopTitleContainer: styled.div`
    position: relative;
    margin-bottom: 2rem;
    border-bottom: 0.1rem solid ${theme.colors.gray_300};

    & > div {
      display: flex;
      align-items: center;
      justify-content: end;
    }

    & > img {
      max-width: 66.8rem;
    }
  `,
  TopNavContainer: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 30rem;
    padding: 1.5rem;

    & > div {
      display: flex;
    }

    & > div > span {
      margin-right: 1rem;
      margin-left: 1rem;
      font-size: 1.2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      & > img {
        width: 2rem;
        height: 2rem;
        margin-bottom: 1rem;
      }
    }
  `,
  GameTitle: styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1rem 0 1rem;
    background-color: ${({ theme }) => theme.colors.white};
    width: 25rem;
    height: 9rem;
    border-radius: 1rem;
    box-shadow: 0.5rem 0.8rem 0.6rem -0.6rem gray;
    top: 30%;
    left: 3rem;

    & > p {
      font-weight: bold;
      width: 100%;
      text-align: center;
    }
  `,
  ChatSendForm: styled.form`
    padding: 1rem;
    position: absolute;
    width: calc(100% - 2rem);
    bottom: 0;
    background-color: ${({ theme }) => theme.colors.white};
  `,
  InputWrapper: styled.div`
    position: relative;

    & > button {
      position: absolute;
      padding: 0 1rem 0 1rem;
      height: 100%;
      top: 0;
      right: 0;
    }
  `,
}
