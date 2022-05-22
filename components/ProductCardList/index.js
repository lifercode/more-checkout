import ProductCard from '../ProductCard'
import { Container } from './styles'

export default function ProductCardList({ data }) {
  return (
    <Container>
      {data.map((item) => (
        <ProductCard key={item.id} data={item} basic />
      ))}
    </Container>
  )
}