import { useFormContext } from 'react-hook-form'
import { MapPinLine } from 'phosphor-react'

import {
  AddressStepContainer,
  AddressStepHeader,
  FormContainer,
  FormRow,
} from './styles'

import { Input } from '../../../../components/Input'

export function AddressStep() {
  const { register } = useFormContext()

  return (
    <AddressStepContainer>
      <AddressStepHeader>
        <MapPinLine size={22} />

        <div>
          <p>Endereço de entrega</p>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </AddressStepHeader>

      <FormContainer>
        <FormRow>
          <Input placeholder="CEP" width={200} {...register('zipcode')} />
        </FormRow>

        <FormRow>
          <Input placeholder="Rua" {...register('street')} />
        </FormRow>

        <FormRow>
          <Input placeholder="Número" width={200} {...register('number')} />
          <Input
            placeholder="Complemento"
            optional
            {...register('complement')}
          />
        </FormRow>

        <FormRow>
          <Input placeholder="Bairro" width={200} {...register('district')} />
          <Input placeholder="Cidade" {...register('city')} />
          <Input placeholder="UF" width={60} {...register('state')} />
        </FormRow>
      </FormContainer>
    </AddressStepContainer>
  )
}
