import { InputHTMLAttributes } from 'react'
import { Control, Controller, FieldValues } from 'react-hook-form'

import { InputContainer } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  width?: number
  optional?: boolean
  error?: any
  control?: Control<FieldValues>
}

export function Input({
  width,
  optional,
  error,
  control,
  ...rest
}: InputProps) {
  return (
    <InputContainer width={width} optional={!!optional} error={!!error}>
      {control && rest.name ? (
        <Controller
          control={control}
          name={rest.name}
          render={({ field: { value, onChange } }) => (
            <input value={value} onChange={onChange} {...rest} />
          )}
        />
      ) : (
        <input {...rest} />
      )}

      {!!optional && <span>Opcional</span>}
    </InputContainer>
  )
}
