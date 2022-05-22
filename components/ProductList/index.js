import { useContext } from 'react'
import { FlatList, TouchableOpacity, Alert } from 'react-native'

import { StateContext } from '../../context'
import limitString from '../../utils/limitString'
import ReduceIcon from '../../assets/icons/gray-reduce.svg'
import AddIcon from '../../assets/icons/gray-add.svg'
import {
  ProductListBox,
  ProductItemBox,
  ProductItemInfo,
  ProductItemTitle,
  ProductItemPriceBox,
  ProductItemCount,
  ProductItemPrice,
  ProductItemImageBox,
  ProductItemImage,
  ProductItemAction,
  ProductItemButton,
  ProductItemButtonDivider
} from './styles'

function ProductItem({ data }) {
  const { actions } = useContext(StateContext)

  const add = () => {
    actions.addToCart(data)
  }

  const remove = () => {
    if (data.qty === 1) {
      Alert.alert(
        'Remover Item',
        'Se deseja remover o item do carrinho clique em prosseguir.',
        [
          {
            text: 'POSSEGUIR',
            onPress: () => actions.removeToCart(data),
          },
          {
            text: 'CANCELAR',
            onPress: () => {},
            style: 'cancel',
          }
        ]
      );
    } else {
      actions.removeToCart(data)
    }
  }

  return (
    <ProductItemBox>
      <ProductItemImageBox>
        <ProductItemImage source={{ uri: data.image }} />
      </ProductItemImageBox>
      <ProductItemInfo>
        <ProductItemTitle>{limitString(data.title, 22)}</ProductItemTitle>
        <ProductItemPriceBox>
          <ProductItemCount>{data.qty}x</ProductItemCount>
          <ProductItemPrice>${data.price}</ProductItemPrice>
        </ProductItemPriceBox>
      </ProductItemInfo>
      <ProductItemAction>
        <TouchableOpacity onPress={remove}>
          <ProductItemButton>
            <ReduceIcon width={10} height={4} />
          </ProductItemButton>
        </TouchableOpacity>
        <ProductItemButtonDivider />
        <TouchableOpacity onPress={add}>
          <ProductItemButton>
            <AddIcon width={10} height={10} />
          </ProductItemButton>
        </TouchableOpacity>
      </ProductItemAction>
    </ProductItemBox>
  )
}

export default function ProductList({ data = [] }) {
  function renderItem({ item }) {
    return (
      <ProductItem data={item} />
    )
  }

  return (
    <ProductListBox>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={({ id }) => id}
      />
    </ProductListBox>
  )
}