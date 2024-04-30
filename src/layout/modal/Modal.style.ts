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
    width: 25rem;
    height: 15rem;
    background-color: #fff;
    padding: 1.875rem;
    text-align: center;
    z-index: 1;
    display: flex;
    display: flex;
    flex-direction: column;
    gap: 30px;
    border-radius: 1rem;
    & > .tit {
      color: #222;
      font-size: 2rem;
      font-weight: bold;
    }
    & > .txt {
      color: #888888;
      font-size: 1rem;
      font-weight: bold;
    }
    & button {
      background-color: #1570ff;
      border-radius: 2rem;
      color: #fff;
      font-size: 1.2rem;
      font-weight: bold;
      border: none;
      border-radius: 0.5rem;
      padding: 1rem 0;
      cursor: pointer;
    }
  `,
}
