import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

const height = Dimensions.get('screen').height

export const ProductListBox = styled.View`
  padding: 16px;
  height: ${height - 300}px;
`

export const ProductItemBox = styled.View`
  flex-direction: row;
  padding: 9px;
  background: #ECE9FF;
  border-radius: 12px;
  margin-bottom: 16px;
  align-items: center;
`

export const ProductItemInfo = styled.View`
  flex: 1;
  justify-content: center;
`

export const ProductItemTitle = styled.Text`
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: #000000;
  margin-bottom: 2px;
`

export const ProductItemPriceBox = styled.View`
  flex-direction: row;
`

export const ProductItemCount = styled.Text`
  font-weight: 700;
  font-size: 9px;
  line-height: 14px;
  color: #8775FE;
  margin-right: 5px;
`

export const ProductItemPrice = styled.Text`
  font-weight: 700;
  font-size: 10px;
  line-height: 14px;
  color: #8775FE;
`

export const ProductItemImageBox = styled.View`
  box-shadow: 2px 4px 15px rgba(0, 0, 0, 0.25);
`

export const ProductItemImage = styled.ImageBackground`
  width: 38px;
  height: 50px;
  background-image: url(${({ source }) => source});
  background-color: #fff;
  margin-right: 11px;
  border-radius: 10px;
  overflow: hidden;
`

export const ProductItemAction = styled.View`
  flex-direction: row;
  background: #FFFFFF;
  border: 1px solid #CCCCCC;
  border-radius: 30px;
`

export const ProductItemButton = styled.View`
  width: 36px;
  height: 23px;
  align-items: center;
  justify-content: center;
`

export const ProductItemButtonDivider = styled.View`
  background-color: #CCCCCC;
  width: 1px;
  height: 23px;
`
