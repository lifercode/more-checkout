import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

const height = Dimensions.get('screen').height
const midHeightScreen = height / 2

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.backgroundTwo};
  padding-bottom: ${({ open }) => open ? '70px' : 0};
`

export const Loading = styled.ActivityIndicator`
  margin-top: ${({ full }) => full ? (midHeightScreen - 30) : (midHeightScreen - 150)}px;
`

export const Divider = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.divider};
  padding-top: 40px;
`
