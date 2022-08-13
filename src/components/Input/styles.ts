import styled, { css } from 'styled-components'

interface InputContainerProps {
  width?: number
  optional?: boolean
  error?: boolean
}

export const InputContainer = styled.div<InputContainerProps>`
  position: relative;
  display: flex;
  align-items: center;

  ${({ width }) => {
    if (!width) {
      return css`
        flex: 1;
      `
    }

    return css`
      width: ${width / 16}rem;
    `
  }}

  input {
    background-color: ${({ theme }) => theme['gray-300']};

    font-size: 0.875rem;
    color: ${({ theme }) => theme['gray-700']};

    width: 100%;

    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme['gray-400']};
    padding: 0.75rem;

    ${({ optional }) =>
      optional &&
      css`
        padding-right: 3.875rem;
      `}

    ${({ error }) =>
      error &&
      css`
        border: 1px solid red;
      `}
  }

  input:focus {
    border: 1px solid ${({ theme }) => theme['yellow-700']};
  }

  input::placeholder,
  input::-webkit-input-placeholder {
    font-size: 0.875rem;
    color: ${({ theme }) => theme['gray-600']};
  }

  input:-ms-input-placeholder {
    font-size: 0.875rem;
    color: ${({ theme }) => theme['gray-600']};
  }

  span {
    font-size: 0.75rem;
    color: ${({ theme }) => theme['gray-600']};

    position: absolute;
    right: 0.75rem;

    font-style: italic;
  }
`
