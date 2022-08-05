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

export const BoxContainer = styled.div`
  background-color: ${({ theme }) => theme['gray-200']};

  margin-bottom: 0.75rem;
  border-radius: 6px;

  padding: 2.5rem;
`

export const BoxHeader = styled.div`
  display: flex;

  margin-bottom: 2rem;

  p:nth-of-type(1) {
    color: ${({ theme }) => theme['gray-800']};
    line-height: 1.3;
    margin-bottom: 0.125rem;
  }

  p:nth-of-type(2) {
    font-size: 0.875rem;
    color: ${({ theme }) => theme['gray-700']};
    line-height: 1.3;
  }
`

export const AddressHeader = styled(BoxHeader)`
  > svg {
    color: ${({ theme }) => theme['yellow-700']};
    margin-right: 0.5rem;
  }
`

export const PaymentHeader = styled(BoxHeader)`
  > svg {
    color: ${({ theme }) => theme['purple-500']};
    margin-right: 0.5rem;
  }
`

export const PaymentOptionsList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`

export const FormRow = styled.div`
  display: flex;
  column-gap: 0.75rem;
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
