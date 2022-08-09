import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;

  column-gap: 2rem;

  margin-top: 2.5rem;
`

export const CompleteOrderColumn = styled.div`
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

export const CartColumn = styled.div`
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
