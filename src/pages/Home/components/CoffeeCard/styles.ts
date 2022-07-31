import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  min-width: 16rem;
  height: 19.375rem;

  background-color: ${({ theme }) => theme['gray-300']};

  border-radius: 6px 36px;
  padding: 0 1.5rem 1.25rem;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  img {
    position: relative;
    top: -1.25rem;
    margin-bottom: calc(0.75rem - 1.25rem);

    width: 7.5rem;
    height: 7.5rem;
  }

  strong {
    font-size: 1.25rem;
    font-family: 'Baloo 2';
    font-weight: 700;

    color: ${({ theme }) => theme['gray-800']};

    margin-bottom: 0.5rem;
    line-height: 1.3;
  }

  p {
    font-size: 0.875rem;

    line-height: 1.3;
    color: ${({ theme }) => theme['gray-600']};
  }
`

export const TagsContainer = styled.div`
  display: flex;
  gap: 0.25rem;

  margin-bottom: 1rem;
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

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Price = styled.div`
  p {
    font-size: 0.875rem;

    line-height: 1.3;
    color: ${({ theme }) => theme['gray-700']};
  }

  p > strong {
    font-size: 1.5rem;
    font-family: 'Baloo 2';
    font-weight: 800;

    line-height: 1.3;
    color: ${({ theme }) => theme['gray-700']};
  }
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
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
