import { TouchableWithoutFeedback, SafeAreaView } from 'react-native'
import {
  Space,
  Item,
  ItemLabel,
  Title,
  FlatList
} from './styles'

function ListItem({ label, active, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Item active={active}>
        <ItemLabel active={active}>{label}</ItemLabel>
      </Item>
    </TouchableWithoutFeedback>
  )
}

export default function CategoryFilter({ data, selected, setSelected }) {
  function renderItem({ item }) {
    function handlerPress() {
      setSelected(item)
    }

    return (
      <ListItem
        label={item}
        active={item === selected}
        onPress={handlerPress}
      />
    )
  }

  return (
    <SafeAreaView>
      <Title>Filtrar categoria</Title>
      <FlatList
        data={data}
        renderItem={renderItem}
        ListHeaderComponent={<Space />}
        keyExtractor={item => item.replace(`'`, '')}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </SafeAreaView>
  )
}