import { MapPin } from 'phosphor-react'

import { ButtonGroup, HeaderContainer, LocationBox } from './styles'

import { CartButton } from '../CartButton'

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
        <CartButton />
      </ButtonGroup>
    </HeaderContainer>
  )
}
