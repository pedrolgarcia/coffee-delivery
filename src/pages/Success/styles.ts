import styled from 'styled-components'

export const SuccessContainer = styled.div`
  margin-top: 5rem;
`

export const SuccessTitle = styled.div`
  strong {
    display: block;

    font-size: 2rem;
    font-family: 'Baloo 2', cursive;
    font-weight: 800;

    color: ${({ theme }) => theme['yellow-700']};

    line-height: 1.3;
    margin-bottom: 0.25rem;
  }

  p {
    font-size: 1.25rem;
  }
`

export const SuccessContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 2.5rem;
`

export const OrderResumeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  max-width: 32.875rem;

  position: relative;

  gap: 2rem;
  padding: 2.5rem;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border: 1px solid transparent;
    border-radius: 6px 36px;

    background: linear-gradient(
        102.89deg,
        ${({ theme }) => theme['yellow-500']} 2.61%,
        ${({ theme }) => theme['purple-500']} 98.76%
      )
      border-box;
    -webkit-mask: linear-gradient(${({ theme }) => theme['gray-300']} 0 0)
        padding-box,
      linear-gradient(${({ theme }) => theme['yellow-500']} 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`

export const OrderInfoRow = styled.div`
  display: flex;
  align-items: center;

  z-index: 2;

  p,
  strong {
    line-height: 1.3;
  }
`

export const IconBadge = styled.div`
  width: 2rem;
  height: 2rem;

  border-radius: 32px;

  margin-right: 0.75rem;
  padding: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: ${({ theme }) => theme.white};
  }
`

export const IconBadgeLocation = styled(IconBadge)`
  background-color: ${({ theme }) => theme['purple-500']};
`

export const IconBadgeTime = styled(IconBadge)`
  background-color: ${({ theme }) => theme['yellow-500']};
`

export const IconBadgeMoney = styled(IconBadge)`
  background-color: ${({ theme }) => theme['yellow-700']};
`
