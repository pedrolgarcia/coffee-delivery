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
  const {
    control,
    formState: { errors },
  } = useFormContext()

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
          <Input
            control={control}
            name="zipcode"
            placeholder="CEP"
            width={200}
            error={errors?.zipcode?.message}
          />
        </FormRow>

        <FormRow>
          <Input
            control={control}
            name="street"
            placeholder="Rua"
            error={errors?.street?.message}
          />
        </FormRow>

        <FormRow>
          <Input
            control={control}
            name="number"
            placeholder="Número"
            width={200}
            error={errors?.number?.message}
          />
          <Input
            control={control}
            name="complement"
            placeholder="Complemento"
            optional
            error={errors?.complement?.message}
          />
        </FormRow>

        <FormRow>
          <Input
            control={control}
            name="district"
            placeholder="Bairro"
            width={200}
            error={errors?.district?.message}
          />
          <Input
            control={control}
            name="city"
            placeholder="Cidade"
            error={errors?.city?.message}
          />
          <Input
            control={control}
            name="state"
            placeholder="UF"
            width={60}
            error={errors?.state?.message}
          />
        </FormRow>
      </FormContainer>
    </AddressStepContainer>
  )
}
