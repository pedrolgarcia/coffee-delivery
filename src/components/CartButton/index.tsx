import { ShoppingCart } from 'phosphor-react'

import { CartButtonContainer } from './styles'

interface CartButtonProps {
  variant?: 'primary' | 'secondary'
}

export function CartButton({ variant = 'primary' }: CartButtonProps) {
  return (
    <CartButtonContainer variant={variant}>
      <ShoppingCart size={22} weight="fill" />
    </CartButtonContainer>
  )
}
