import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 0;
`

export const Badge = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 100px;

  background-color: ${({ theme }) => theme['yellow-700']};

  position: absolute;
  top: -0.5rem;
  right: -0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  strong {
    font-size: 0.75rem;
    font-weight: 700;
    color: ${({ theme }) => theme.white};
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  gap: 0.75rem;

  a {
    width: 2.375rem;
    height: 2.375rem;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    outline: 0;
    border: none;

    border-radius: 6px;
    background-color: ${({ theme }) => theme['yellow-300']};

    position: relative;

    svg {
      color: ${({ theme }) => theme['yellow-700']};
    }

    :focus {
      box-shadow: 0 0 0 2px ${({ theme }) => theme['yellow-700']};
    }
  }
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

  span {
    font-size: 0.875rem;
    color: ${({ theme }) => theme['purple-700']};
  }
`
