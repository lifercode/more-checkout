import { SafeAreaView, FlatList } from 'react-native'

import ProductCard from '../ProductCard'
import { Space } from './styles'

export default function ProductCardCarousel({ data }) {
  function renderItem({ item }) {
    return (
      <ProductCard data={item} />
    )
  }

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={renderItem}
        ListHeaderComponent={<Space />}
        keyExtractor={({ id }) => id}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </SafeAreaView>
  )
}