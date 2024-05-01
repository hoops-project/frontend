import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const CS = {
  Link: styled(Link)`
    text-decoration-line: none;
    color: ${({ theme }) => theme.colors.black};
  `,
}
