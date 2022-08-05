import styled from 'styled-components'

interface InputContainerProps {
  fill: boolean
  width: number
}

export const InputContainer = styled.input<InputContainerProps>`
  background-color: ${({ theme }) => theme['gray-300']};

  width: ${({ fill, width }) => (fill ? `100%` : `${width / 16}rem`)};

  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme['gray-400']};
  padding: 0.75rem;
`
