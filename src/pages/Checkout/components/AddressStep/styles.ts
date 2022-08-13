import styled from 'styled-components'

export const AddressStepContainer = styled.div`
  background-color: ${({ theme }) => theme['gray-200']};

  margin-bottom: 0.75rem;
  border-radius: 6px;

  padding: 2.5rem;
`

export const AddressStepHeader = styled.header`
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

  > svg {
    color: ${({ theme }) => theme['yellow-700']};
    margin-right: 0.5rem;
  }
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`

export const FormRow = styled.div`
  display: flex;
  column-gap: 0.75rem;
`
