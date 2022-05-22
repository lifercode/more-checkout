import { useColorScheme } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import theme from './config/theme'
import SplashScreen from './screens/Splash'
import HomeScreen from './screens/Home'
import CartScreen from './screens/Cart'
import ConfirmScreen from './screens/Confirm'

const Stack = createNativeStackNavigator()

export default function Routes() {
  const colorScheme = useColorScheme()

  const screenOptions = {
    all: {
      headerBackTitle: '',
    },
    splash: {
      headerShown: false,
    },
    home: {
      headerShown: false,
      gestureEnabled: false,
    },
    cart: {
      title: 'CARRINHO',
      headerShadowVisible: false,
      headerStyle: {
        backgroundColor: theme[colorScheme].backgroundFour
      },
      headerTintColor: '#85868A',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: '12px',
        lineHeight: '14px',
      },
    },
    confirm: {
      headerShown: false,
      gestureEnabled: false,
    },
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={screenOptions.all}
      >
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={screenOptions.splash}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={screenOptions.home}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={screenOptions.cart}
        />
        <Stack.Screen
          name="Confirm"
          component={ConfirmScreen}
          options={screenOptions.confirm}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
