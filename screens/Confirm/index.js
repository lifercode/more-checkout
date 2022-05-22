import { StatusBar } from 'expo-status-bar'

import Button from '../../components/Button'
import CheckIcon from '../../assets/icons/check.svg'
import {
  Container,
  IconBox,
  Title,
  Description,
  ButtonBox
} from './styles'

export default function ConfirmScreen({ navigation }) {
  return (
    <>
      <StatusBar style="light" />
      <Container>
        <IconBox>
          <CheckIcon  width={60} height={42.37} />
        </IconBox>
        <Title>SUCESSO!</Title>
        <Description>Compra realizada com sucesso, aproveite!</Description>
        <ButtonBox>
          <Button label="Prosseguir" onPress={() => navigation.navigate('Home')} />
        </ButtonBox>
      </Container>
    </>
  )
}