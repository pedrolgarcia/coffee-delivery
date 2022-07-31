import { Minus, Plus } from 'phosphor-react'
import { useState } from 'react'
import { QuantityButton, QuantityControllerContainer } from './styles'

export function QuantityController() {
  const [quantity, setQuantity] = useState(1)

  function handleIncrement() {
    setQuantity((state) => state + 1)
  }

  function handleDecrement() {
    setQuantity((state) => state - 1)
  }

  return (
    <QuantityControllerContainer>
      <QuantityButton onClick={handleDecrement}>
        <Minus size={14} weight="bold" />
      </QuantityButton>

      <span>{quantity}</span>

      <QuantityButton onClick={handleIncrement}>
        <Plus size={14} weight="bold" />
      </QuantityButton>
    </QuantityControllerContainer>
  )
}
