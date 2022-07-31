import { MapPin, ShoppingCart } from 'phosphor-react'

import { ButtonGroup, HeaderContainer, LocationBox, CartButton } from './styles'

import CoffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={CoffeeDeliveryLogo} alt="" />

      <ButtonGroup>
        <LocationBox>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </LocationBox>

        <CartButton>
          <ShoppingCart size={22} weight="fill" />
        </CartButton>
      </ButtonGroup>
    </HeaderContainer>
  )
}
