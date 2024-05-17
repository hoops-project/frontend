import { styled } from 'styled-components'
import { ModalProps } from '../../../types/modal.ts'

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

  CloseBtnContainer: styled.div`
    position: absolute;
    right: 20px;
    top: 20px;
  `,
  CloseBtnButton: styled.button`
    color: #222;
    background-color: transparent;
    ont-size: 1.2rem;
    font-weight: 700;
    border: none;
    cursor: pointer;
  `,

  Modal: styled.div<ModalProps>`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${(props) => props.$width};
    height: ${(props) => props.$height};
    background-color: ${(props) => props.theme.colors.white};
    padding: 4rem;
    text-align: center;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 30px;
    border-radius: 1rem;
    }
  `,
}
