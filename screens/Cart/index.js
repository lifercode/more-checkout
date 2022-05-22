import { useContext } from 'react'
import { useColorScheme } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'

import getStatusBarStyle from '../../utils/getStatusBarStyle'
import Section from '../../components/Section'
import Button from '../../components/Button'
import ProductList from '../../components/ProductList'
import { StateContext } from '../../context'
import {
  Container,
  EmptyCart,
  EmptyCardIcon,
  EmptyCardText,
  Price,
  PriceLabel,
  PriceValue,
  Action
} from './styles'

export default function CartScreen() {
  const navigation = useNavigation()
  const colorScheme = useColorScheme()
  const { state, actions } = useContext(StateContext)

  function goBack() {
    navigation.goBack()
  }

  function goConfirm() {
    navigation.navigate('Confirm')
    setTimeout(() => {
      actions.setCart([])
    }, 200)
  }

  const total = state.cart
    .reduce((accumulator, object) => accumulator + (object.price * object.qty), 0)

  return (
    <>
      <StatusBar style={getStatusBarStyle(colorScheme)} />
      <Container>
        <Section title="Meu Carrinho" noContentPadding>

          {!state.cart.length ? (
            <EmptyCart>
              <EmptyCardIcon  width={57.11} height={67} />
              <EmptyCardText>Nenhum item adicionado no carrinho.</EmptyCardText>
              <Button small color="secondary" label="Adicionar itens" onPress={goBack} />
            </EmptyCart>
          ) : (
            <>
              <ProductList data={state.cart} />
              <Price>
                <PriceLabel>Total:</PriceLabel>
                <PriceValue>${total.toFixed(2)}</PriceValue>
              </Price>
              <Action>
                <Button label="Finalizar compra" onPress={goConfirm} />
              </Action>
            </>
          )}

        </Section>
      </Container>
    </>
  )
}