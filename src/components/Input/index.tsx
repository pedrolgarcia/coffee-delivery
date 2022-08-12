import { InputHTMLAttributes } from 'react'
import { InputContainer } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  width?: number
  optional?: boolean
}

export function Input({ width, optional, ...rest }: InputProps) {
  return (
    <InputContainer width={width} optional={!!optional}>
      <input {...rest} />
      {!!optional && <span>Opcional</span>}
    </InputContainer>
  )
}
