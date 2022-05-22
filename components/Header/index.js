import { useContext } from 'react'
import { TouchableOpacity, useColorScheme } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { StateContext } from '../../context'
import WhiteSmallBagIcon from '../../assets/icons/bag.svg'
import PurpleSmallBagIcon from '../../assets/icons/purple-small-bag.svg'
import {
  Container,
  Title,
  IconBox,
  Budget,
  BudgetLabel
} from './styles'

export default function Header({ title }) {
  const navigation = useNavigation()
  const { state } = useContext(StateContext)
  const colorScheme = useColorScheme()

  const total = state.cart
    .reduce((accumulator, object) => accumulator + object.qty, 0)

  function goToCart() {
    navigation.navigate('Cart')
  }

  return (
    <Container>
      <Title>{title}</Title>
      <TouchableOpacity onPress={goToCart}>
        <IconBox>
          {colorScheme === 'dark' ? (
            <WhiteSmallBagIcon width={18.33} height={21.5} />
          ) : (
            <PurpleSmallBagIcon width={18.33} height={21.5} />
          )}
          {Boolean(state.cart.length) && (
            <Budget>
              <BudgetLabel>{total}</BudgetLabel>
            </Budget>
          )}
        </IconBox>
      </TouchableOpacity>
    </Container>
  )
}