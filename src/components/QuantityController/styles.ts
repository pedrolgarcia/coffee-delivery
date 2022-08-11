import styled from 'styled-components'

export const QuantityControllerContainer = styled.div`
  background-color: ${({ theme }) => theme['gray-400']};

  padding: 0.5rem;
  height: 2rem;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;

  span {
    width: 1.25rem;
    text-align: center;
    color: ${({ theme }) => theme['gray-900']};
  }
`

export const QuantityButton = styled.button`
  background-color: transparent;
  border: 0;
  outline: 0;

  cursor: pointer;

  display: flex;
  align-items: center;

  svg {
    color: ${({ theme }) => theme['purple-500']};

    transition: color 0.3s;
  }

  &:hover {
    svg {
      color: ${({ theme }) => theme['purple-700']};
    }
  }
`
