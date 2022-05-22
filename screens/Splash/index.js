import { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'

import BagIcon from '../../assets/icons/bag.svg'
import { Container } from './styles'

export default function SplashScreen({ navigation }) {

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home')
    }, 2000)
  }, [])

  return (
    <>
      <StatusBar style="light" />
      <Container>
        <BagIcon  width={105.8} height={127} />
      </Container>
    </>
  )
}