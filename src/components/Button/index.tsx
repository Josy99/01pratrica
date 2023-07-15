import { Container } from './styles.ts'
interface ButtonProps {
  title: string
}

export function Button({ title }: ButtonProps) {
  return <Container>{title}</Container>
}
