import styled from 'styled-components'

interface CartButtonContainerProps {
  variant: 'primary' | 'secondary'
}

export const CartButtonContainer = styled.button<CartButtonContainerProps>`
  width: 2.375rem;
  height: 2.375rem;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  outline: 0;
  border: none;

  border-radius: 6px;
  background-color: ${({ theme, variant }) =>
    variant === 'primary' ? theme['yellow-300'] : theme['purple-700']};

  svg {
    color: ${({ theme, variant }) =>
      variant === 'primary' ? theme['yellow-700'] : theme.white};
  }
`
