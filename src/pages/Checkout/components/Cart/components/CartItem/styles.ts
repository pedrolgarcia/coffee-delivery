import styled from 'styled-components'

export const CartItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0.25rem;
`

export const CoffeeInfoContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 1.25rem;

  img {
    width: 4rem;
    height: 4rem;
  }
`

export const CoffeeInfo = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  > span {
    margin-bottom: 0.5rem;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`

export const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;

  height: 2rem;

  padding: 0 0.5rem;
  border-radius: 6px;

  outline: 0;
  border: none;

  background-color: ${({ theme }) => theme['gray-400']};

  cursor: pointer;

  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme['gray-500']};

    svg {
      color: ${({ theme }) => theme['purple-700']};
    }

    span {
      color: ${({ theme }) => theme['gray-800']};
    }
  }

  svg {
    color: ${({ theme }) => theme['purple-500']};
    margin-right: 0.25rem;
  }

  span {
    font-size: 0.75rem;
    color: ${({ theme }) => theme['gray-700']};
    text-transform: uppercase;
  }
`

export const Divider = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme['gray-300']};
  border: 1px solid ${({ theme }) => theme['gray-300']};

  margin: 1.5rem 0;
`
