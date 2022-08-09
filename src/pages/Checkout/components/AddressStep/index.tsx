import { MapPinLine } from 'phosphor-react'

import {
  AddressStepContainer,
  AddressStepHeader,
  Form,
  FormRow,
} from './styles'

import { Input } from '../../../../components/Input'

export function AddressStep() {
  return (
    <AddressStepContainer>
      <AddressStepHeader>
        <MapPinLine size={22} />

        <div>
          <p>Endereço de entrega</p>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </AddressStepHeader>

      <Form>
        <FormRow>
          <Input placeholder="CEP" width={200} required />
        </FormRow>

        <FormRow>
          <Input placeholder="Rua" required />
        </FormRow>

        <FormRow>
          <Input placeholder="Número" width={200} required />
          <Input placeholder="Complemento" />
        </FormRow>

        <FormRow>
          <Input placeholder="Bairro" width={200} required />
          <Input placeholder="Cidade" required />
          <Input placeholder="UF" width={60} required />
        </FormRow>
      </Form>
    </AddressStepContainer>
  )
}
