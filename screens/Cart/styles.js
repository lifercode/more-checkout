import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

import BagIcon from '../../assets/icons/gray-medium-bag.svg';

const height = Dimensions.get('screen').height;

export const Container = styled.View`
  background-color: ${({ theme }) => theme.backgroundFour};
  height: ${height}px;
`

export const EmptyCart = styled.View`
  align-items: center;
  justify-content: center;
  height: ${height - 250}px;
`

export const EmptyCardIcon = styled(BagIcon)`
  margin-bottom: 10px;
`

export const EmptyCardText = styled.Text`
  font-weight: 700;
  font-size: 14px;
  line-height: 16.84px;
  margin-bottom: 14px;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  color: #9A9999;
  width: 200px;
`

export const Price = styled.View`
  padding: 10.5px 12px;
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.divider};
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.divider};
  flex-direction: row;
`

export const PriceLabel = styled.Text`
  flex: 1;
  font-weight: 700;
  font-size: 14px;
  color: ${({ theme }) => theme.textFive};
`

export const PriceValue = styled.Text`
  font-weight: 700;
  font-size: 14px;
  color: ${({ theme }) => theme.text};
`

export const Action = styled.View`
  padding: 29px 29px 33px;
`