import { TouchableOpacity } from 'react-native'
import { Container, Label } from './styles'

export default function Button({ small, label = '', color, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Container small={small} color={color}>
        <Label>{label}</Label>
      </Container>
    </TouchableOpacity>
  )
}