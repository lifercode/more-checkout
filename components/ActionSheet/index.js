import { useContext } from 'react'
import { useNavigation } from '@react-navigation/native'

import { StateContext } from '../../context'
import Button from '../Button'
import { Container } from './styles'

export default function ActionSheet() {
  const navigation = useNavigation()
  const { state } = useContext(StateContext)

  function onPress() {
    navigation.navigate('Cart')
  }

  return (
    <Container open={state.cart.length}>
      <Button label="Ir para carrinho" onPress={onPress} />
    </Container>
  )
}