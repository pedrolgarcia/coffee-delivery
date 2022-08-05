import styled, { css } from 'styled-components'

interface PaymentOptionContainerProps {
  selected: boolean
}

export const PaymentOptionContainer = styled.div<PaymentOptionContainerProps>`
  display: flex;
  flex: 1;
  align-items: center;

  padding: 1rem;
  border-radius: 6px;

  background-color: ${({ theme }) => theme['gray-400']};

  cursor: pointer;

  ${({ selected }) => {
    if (selected) {
      return css`
        border: 1px solid ${({ theme }) => theme['purple-500']};
        background-color: ${({ theme }) => theme['purple-300']};
      `
    }
  }}

  &:hover {
    background-color: ${({ theme }) => theme['gray-500']};

    span {
      color: ${({ theme }) => theme['gray-800']};
    }
  }

  svg {
    color: ${({ theme }) => theme['purple-500']};
    margin-right: 0.75rem;
  }

  span {
    font-size: 0.75rem;
    color: ${({ theme }) => theme['gray-700']};
    text-transform: uppercase;
  }
`
