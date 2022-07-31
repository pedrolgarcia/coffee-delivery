import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-width: 16rem;
  height: 19.375rem;

  background-color: ${({ theme }) => theme['gray-300']};

  border-radius: 6px 36px;
`

export const CoffeeInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const TagsContainer = styled.div`
  display: flex;
  gap: 0.25rem;
`

export const Tag = styled.div`
  display: flex;
  align-items: center;

  border-radius: 100px;
  padding: 0.25rem 0.5rem;

  background-color: ${({ theme }) => theme['yellow-300']};

  span {
    font-size: 0.625rem;
    font-weight: 700;

    color: ${({ theme }) => theme['yellow-700']};
    text-transform: uppercase;
  }
`

export const AddToCartButton = styled.button`
  width: 2.375rem;
  height: 2.375rem;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  outline: 0;
  border: none;

  border-radius: 6px;
  background-color: ${({ theme }) => theme['purple-700']};

  transition: background-color 0.3s;

  svg {
    color: ${({ theme }) => theme.white};
  }

  :hover {
    background-color: ${({ theme }) => theme['purple-500']};
  }

  :focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme['purple-500']};
  }
`
