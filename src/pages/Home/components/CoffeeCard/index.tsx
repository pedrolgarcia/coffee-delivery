import { useContext, useState } from 'react'
import { ShoppingCart } from 'phosphor-react'

import {
  AddToCartButton,
  CoffeeCardContainer,
  TagsContainer,
  Tag,
  InfoContainer,
  Footer,
  Price,
  Actions,
} from './styles'

import { QuantityController } from '../../../../components/QuantityController'

import { CartContext } from '../../../../contexts/CartContext'

import { Product } from '../..'
import { formatValueToBrl } from '../../../../utils/helpers'

interface CoffeeCardProps {
  coffee: Product
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const [quantity, setQuantity] = useState(1)

  const { addOrIncrementCartItem } = useContext(CartContext)

  const total = coffee.price * quantity

  function handleAddOrIncrementCartItem() {
    addOrIncrementCartItem(coffee, quantity)
    resetProductQuantity()
  }

  function incrementProduct() {
    setQuantity((state) => state + 1)
  }

  function decrementProduct() {
    setQuantity((state) => state - 1)
  }

  function resetProductQuantity() {
    setQuantity(1)
  }

  return (
    <CoffeeCardContainer>
      <InfoContainer>
        <img src={coffee.picture} alt="" />

        <TagsContainer>
          {coffee.tags.map((tag) => (
            <Tag key={`${coffee.id}-${tag}`}>
              <span>{tag}</span>
            </Tag>
          ))}
        </TagsContainer>

        <strong>{coffee.name}</strong>

        <p>{coffee.description}</p>
      </InfoContainer>

      <Footer>
        <Price>
          <p>
            R$<strong>{formatValueToBrl(total).replace('R$', '')}</strong>
          </p>
        </Price>

        <Actions>
          <QuantityController
            quantity={quantity}
            increment={incrementProduct}
            decrement={decrementProduct}
          />

          <AddToCartButton onClick={handleAddOrIncrementCartItem}>
            <ShoppingCart size={22} weight="fill" />
          </AddToCartButton>
        </Actions>
      </Footer>
    </CoffeeCardContainer>
  )
}
