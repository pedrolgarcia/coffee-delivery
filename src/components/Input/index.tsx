import { InputHTMLAttributes } from 'react'
import { InputContainer } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  width?: number
}

export function Input({ width, ...rest }: InputProps) {
  return (
    <InputContainer width={width} optional={!rest.required}>
      <input {...rest} />
      {!rest.required && <span>Opcional</span>}
    </InputContainer>
  )
}
