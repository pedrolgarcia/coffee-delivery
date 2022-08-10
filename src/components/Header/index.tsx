import { useContext } from 'react'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router-dom'

import { Badge, ButtonGroup, HeaderContainer, LocationBox } from './styles'

import CoffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg'

import { CartContext } from '../../contexts/CartContext'

export function Header() {
  const { cartItems } = useContext(CartContext)

  const cartHasItems = cartItems?.length > 0

  return (
    <HeaderContainer>
      <Link to="/">
        <img src={CoffeeDeliveryLogo} alt="" />
      </Link>

      <ButtonGroup>
        <LocationBox>
          <MapPin size={22} weight="fill" />
          <span>Rio de Janeiro, RJ</span>
        </LocationBox>

        <Link to="/checkout">
          <ShoppingCart size={22} weight="fill" />

          {cartHasItems && (
            <Badge>
              <strong>{cartItems?.length}</strong>
            </Badge>
          )}
        </Link>
      </ButtonGroup>
    </HeaderContainer>
  )
}
