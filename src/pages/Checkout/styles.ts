import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;

  column-gap: 2rem;

  margin-top: 2.5rem;
`

export const CompleteOrder = styled.div`
  display: flex;
  flex-direction: column;

  > strong {
    font-size: 1.125rem;
    font-family: 'Baloo 2';
    font-weight: 700;

    color: ${({ theme }) => theme['gray-800']};

    margin-bottom: 1rem;
  }
`

export const AddressContainer = styled.div`
  background-color: ${({ theme }) => theme['gray-200']};

  margin-bottom: 0.75rem;
`

export const AddressHeader = styled.div`
  display: flex;

  > svg {
    color: ${({ theme }) => theme['yellow-700']};
  }

  p:nth-of-type(1) {
    color: ${({ theme }) => theme['gray-800']};
    line-height: 1.3;
  }

  p:nth-of-type(2) {
    font-size: 0.875rem;
    color: ${({ theme }) => theme['gray-700']};
    line-height: 1.3;
  }
`

export const PaymentContainer = styled.div`
  background-color: red;
`

export const CartContainer = styled.div`
  > strong {
    font-size: 1.125rem;
    font-family: 'Baloo 2';
    font-weight: 700;

    color: ${({ theme }) => theme['gray-800']};

    margin-bottom: 1rem;
  }
`
