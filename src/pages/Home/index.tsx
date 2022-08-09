import { useState } from 'react'
import {
  Coffee as CoffeeIcon,
  Package,
  ShoppingCart,
  Timer,
} from 'phosphor-react'

import {
  BlurBackground,
  Feature,
  FeaturesContainer,
  HomeContainer,
  IntroContainer,
  IntroMain,
  IconBadge,
  CoffeesContainer,
  CoffeesList,
  IntroBanner,
} from './styles'

import { CoffeeCard } from './components/CoffeeCard'

import CoffeeDeliveryBanner from '../../assets/coffee-delivery-banner.svg'

import coffeesData from '../../coffees.json'

export interface Coffee {
  id: number
  picture: string
  name: string
  description: string
  tags: string[]
  price: number
}

export function Home() {
  const [coffees, setCoffees] = useState<Coffee[]>(coffeesData)

  return (
    <HomeContainer>
      {/* <BlurBackground /> */}

      <IntroContainer>
        <IntroMain>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <FeaturesContainer>
            <Feature>
              <IconBadge color="yellow-700">
                <ShoppingCart size={16} weight="fill" />
              </IconBadge>

              <span>Compra simples e segura</span>
            </Feature>

            <Feature>
              <IconBadge color="gray-700">
                <Package size={16} weight="fill" />
              </IconBadge>

              <span>Embalagem mantém o café intacto</span>
            </Feature>

            <Feature>
              <IconBadge color="yellow-500">
                <Timer size={16} weight="fill" />
              </IconBadge>

              <span>Entrega rápida e rastreada</span>
            </Feature>

            <Feature>
              <IconBadge color="purple-500">
                <CoffeeIcon size={16} weight="fill" />
              </IconBadge>

              <span>O café chega fresquinho até você</span>
            </Feature>
          </FeaturesContainer>
        </IntroMain>

        <IntroBanner>
          <img src={CoffeeDeliveryBanner} alt="" />
        </IntroBanner>
      </IntroContainer>

      <CoffeesContainer>
        <strong>Nossos cafés</strong>

        <CoffeesList>
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </CoffeesList>
      </CoffeesContainer>
    </HomeContainer>
  )
}
