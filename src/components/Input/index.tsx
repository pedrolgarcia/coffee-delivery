import { InputHTMLAttributes } from 'react'
import { InputContainer } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  width?: number
}

export function Input({ width = 0, ...rest }: InputProps) {
  const fill = !width

  return <InputContainer fill={fill} width={width} {...rest}></InputContainer>
}
