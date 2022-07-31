import { ShoppingCart } from 'phosphor-react'

import {
  AddToCartButton,
  CoffeeCardContainer,
  TagsContainer,
  Tag,
} from './styles'

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <TagsContainer>
        <Tag>
          <span>Tradicional</span>
        </Tag>
      </TagsContainer>

      <AddToCartButton>
        <ShoppingCart size={22} weight="fill" />
      </AddToCartButton>
    </CoffeeCardContainer>
  )
}
