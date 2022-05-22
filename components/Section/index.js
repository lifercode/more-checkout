import { Container, Title } from './styles'

export default function Section({ children, title = '', noContentPadding }) {
  return (
    <Container noContentPadding={noContentPadding}>
      <Title noContentPadding={noContentPadding}>{title}</Title>
      {children}
    </Container>
  )
}