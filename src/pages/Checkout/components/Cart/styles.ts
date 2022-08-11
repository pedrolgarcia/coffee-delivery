import styled from 'styled-components'

export const CartContainer = styled.div`
  background-color: ${({ theme }) => theme['gray-200']};

  border-radius: 6px 36px;
  padding: 2.5rem;
`

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 1.5rem;
  gap: 0.75rem;
`

export const SubTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span:first-child {
    font-size: 0.875rem;
  }

  span:last-child {
    font-size: 1rem;
  }
`

export const DeliveryTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span:first-child {
    font-size: 0.875rem;
  }

  span:last-child {
    font-size: 1rem;
  }
`

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  strong {
    font-size: 1.25rem;
  }
`
