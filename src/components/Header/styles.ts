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
`
