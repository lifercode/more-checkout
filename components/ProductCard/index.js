import { useContext } from 'react'
import { TouchableOpacity } from 'react-native'

import { StateContext } from '../../context'
import limitString from '../../utils/limitString'
import AddIcon from '../../assets/icons/add.svg'
import {
  Container,
  ThumbnailBox,
  Thumbnail,
  Category,
  Title,
  Description,
  Price,
  Action,
  AddIconBox
} from './styles'

export default function ProductCard({ data, basic }) {
  const { actions } = useContext(StateContext)

  const handlePress = () => {
    actions.addToCart(data)
  }

  return (
    <Container autoWidth={!basic}>
      <ThumbnailBox>
        <Thumbnail source={{ uri: data.image }} small={basic} />
      </ThumbnailBox>
      <Category>{data.category}</Category>
      <Title>{limitString(data.title, basic ? 14 : 17)}</Title>
      {!basic && (
        <Description>{limitString(data.description, 60)}</Description>
      )}
      <Price>${data.price}</Price>
      <Action inThumb={!basic}>
        <TouchableOpacity onPress={handlePress}>
          <AddIconBox>
            <AddIcon width={10} height={10} />
          </AddIconBox>
        </TouchableOpacity>
      </Action>
    </Container>
  )
}