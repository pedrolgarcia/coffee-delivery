import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ButtonGroup = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const LocationBox = styled.div`
  height: 2.375rem;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem 0.625rem;

  border-radius: 6px;
  background-color: ${({ theme }) => theme['purple-300']};

  color: ${({ theme }) => theme['purple-500']};

  svg {
    color: ${({ theme }) => theme['purple-500']};
    margin-right: 0.25rem;
  }

  span {
    font-size: 0.875rem;
    color: ${({ theme }) => theme['purple-700']};
  }
`

export const CartButton = styled.button`
  width: 2.375rem;
  height: 2.375rem;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  outline: 0;
  border: none;

  border-radius: 6px;
  background-color: ${({ theme }) => theme['yellow-300']};

  svg {
    color: ${({ theme }) => theme['yellow-700']};
  }

  :focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme['yellow-700']};
  }
`
