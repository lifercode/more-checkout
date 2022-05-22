import styled from 'styled-components/native'

export const Space = styled.View`
  width: 12px;
`

export const Item = styled.View`
  padding: 6px 10px;
  border: 1px solid ${({ active }) => active ? 'transparent' : '#EBEBED'};
  border-radius: 8px;
  margin: 0 7px;
  background-color: ${({ active, theme }) => active ? theme.primaryFour : theme.backgroundThree};
`

export const ItemLabel = styled.Text`
  font-weight: 700;
  font-size: 8px;
  line-height: 9px;
  align-items: center;
  color: ${({ active }) => active ? '#fff' : '#B4B4B6'};
  text-transform: capitalize;
`

export const Title = styled.Text`
  font-weight: 700;
  font-size: 8px;
  line-height: 9px;
  text-transform: uppercase;
  margin: 0 19px 10px;
  color: ${({ theme }) => theme.textThree};
`

export const FlatList = styled.FlatList`
  margin-bottom: 10px;
`
