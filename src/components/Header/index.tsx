import { MapPin, ShoppingCart } from 'phosphor-react'

import { Link } from 'react-router-dom'

import { ButtonGroup, HeaderContainer, LocationBox } from './styles'

import CoffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={CoffeeDeliveryLogo} alt="" />

      <ButtonGroup>
        <LocationBox>
          <MapPin size={22} weight="fill" />
          <span>Rio de Janeiro, RJ</span>
        </LocationBox>

        <Link to="/checkout">
          <ShoppingCart size={22} weight="fill" />
        </Link>
      </ButtonGroup>
    </HeaderContainer>
  )
}
