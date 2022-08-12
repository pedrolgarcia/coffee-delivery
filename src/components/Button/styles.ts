import styled from 'styled-components'

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  cursor: pointer;

  padding: 0.75rem 0.5rem;
  border-radius: 6px;

  outline: 0;
  border: none;

  background-color: ${({ theme }) => theme['yellow-500']};

  transition: background-color 0.3s;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme['yellow-700']};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  span {
    color: ${({ theme }) => theme.white};
    font-size: 0.875rem;
    font-weight: 700;
  }
`
