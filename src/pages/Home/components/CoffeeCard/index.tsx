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

import { Coffee } from '../..'
import { QuantityController } from '../../../../components/QuantityController'

interface CoffeeCardProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const brlPrice = coffee.price
    .toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    })
    .replace('R$', '')

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
            R$<strong>{brlPrice}</strong>
          </p>
        </Price>

        <Actions>
          <QuantityController />
          <AddToCartButton>
            <ShoppingCart size={22} weight="fill" />
          </AddToCartButton>
        </Actions>
      </Footer>
    </CoffeeCardContainer>
  )
}
