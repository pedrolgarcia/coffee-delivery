import { createContext } from 'react'

interface CheckoutContextData {
  products: any[]
}

const CheckoutContext = createContext({} as CheckoutContextData)
