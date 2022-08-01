import styled, { DefaultTheme } from 'styled-components'

import BlurBackgroundSvg from '../../assets/blur-background.svg'

interface IconBadgeProps {
  color: keyof DefaultTheme
}

export const HomeContainer = styled.div``

export const BlurBackground = styled.div`
  height: 34rem;
  width: 100%;

  background-image: url(${BlurBackgroundSvg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  position: absolute;
  left: 0;
  right: 0;
  z-index: -1;
`

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width: 1100px) {
    flex-wrap: wrap;
  }

  gap: 3.5rem;

  padding: 5.875rem 0;
`

export const IntroMain = styled.div`
  h1 {
    font-size: 3rem;
    font-family: 'Baloo 2';
    font-weight: 800;

    color: ${({ theme }) => theme['gray-900']};
    line-height: 1.3;

    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
    color: ${({ theme }) => theme['gray-800']};
    line-height: 1.3;
  }
`

export const FeaturesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 1.25rem;

  margin-top: 4.125rem;

  @media (max-width: 670px) {
    grid-template-columns: 1fr;
    margin-top: 3rem;
  }
`

export const Feature = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-left: 0.75rem;
  }
`

export const IconBadge = styled.div<IconBadgeProps>`
  width: 2rem;
  height: 2rem;

  border-radius: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme, color }) => theme[color]};

  svg {
    color: ${({ theme }) => theme.white};
  }
`

export const CoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;

  > strong {
    font-size: 2rem;
    font-family: 'Baloo 2';
    font-weight: 800;

    color: ${({ theme }) => theme['gray-900']};

    margin-bottom: 3.375rem;
  }
`

export const CoffeesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

  grid-column-gap: 2rem;
  grid-row-gap: 2.5rem;
`
