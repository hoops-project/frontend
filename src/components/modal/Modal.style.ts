import { styled } from 'styled-components'

export const S = {
  ModalContainer: styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
  `,
  Modal: styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 25rem;
    height: 15rem;
    background-color: ${(props) => props.theme.colors.white};
    padding: 1.875rem;
    text-align: center;
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 30px;
    border-radius: 1rem;
    & > .tit {
      color: #222;
      font-size: ${(props) => props.theme.font.fz_20};
      font-weight: bold;
    }
    & > .txt {
      color: ${(props) => props.theme.colors.gray_500};
      font-size: ${(props) => props.theme.font.fz_18};
      font-weight: bold;
    }
    & button {
      background-color: ${(props) => props.theme.colors.blue};
      border-radius: 2rem;
      color: ${(props) => props.theme.colors.white};
      font-size: ${(props) => props.theme.font.fz_18};
      font-weight: bold;
      border: none;
      border-radius: 0.5rem;
      padding: 1rem 0;
      cursor: pointer;
    }
  `,
}
