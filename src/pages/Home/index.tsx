import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

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
} from './styles'

import { CoffeeCard } from './components/CoffeeCard'

import CoffeeDeliveryBanner from '../../assets/coffee-delivery-banner.svg'

export function Home() {
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
                <Coffee size={16} weight="fill" />
              </IconBadge>

              <span>O café chega fresquinho até você</span>
            </Feature>
          </FeaturesContainer>
        </IntroMain>

        <img src={CoffeeDeliveryBanner} alt="" />
      </IntroContainer>

      <CoffeesContainer>
        <h2>Nossos cafés</h2>

        <CoffeesList>
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
        </CoffeesList>
      </CoffeesContainer>
    </HomeContainer>
  )
}
