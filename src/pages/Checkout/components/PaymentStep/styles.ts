import styled, { css } from 'styled-components'

interface PaymentOptionContainerProps {
  selected: boolean
  requiredError: boolean
}

export const PaymentStepContainer = styled.div`
  background-color: ${({ theme }) => theme['gray-200']};

  margin-bottom: 0.75rem;
  border-radius: 6px;

  padding: 2.5rem;
`

export const PaymentStepHeader = styled.header`
  display: flex;

  margin-bottom: 2rem;

  p:nth-of-type(1) {
    color: ${({ theme }) => theme['gray-800']};
    line-height: 1.3;
    margin-bottom: 0.125rem;
  }

  p:nth-of-type(2) {
    font-size: 0.875rem;
    color: ${({ theme }) => theme['gray-700']};
    line-height: 1.3;
  }

  > svg {
    color: ${({ theme }) => theme['purple-500']};
    margin-right: 0.5rem;
  }
`

export const PaymentOptionsList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
`

export const PaymentOption = styled.div<PaymentOptionContainerProps>`
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
    } else {
      return css`
        &:hover {
          background-color: ${({ theme }) => theme['gray-500']};

          span {
            color: ${({ theme }) => theme['gray-800']};
          }
        }
      `
    }
  }}

  ${({ requiredError }) => {
    if (requiredError) {
      return css`
        border: 1px solid red;
      `
    }
  }}

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
