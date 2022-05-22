import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

const width = Dimensions.get('screen').width

export const Container = styled.View`
  width: ${({ autoWidth }) => autoWidth ? '180px' : `${(width / 2) - 38}px`};
  height: auto;
  margin: ${({ autoWidth }) => autoWidth ? '0 35px 0 0' : '0 19px 44px'};
`

export const ThumbnailBox = styled.View`
  box-shadow: 2px 4px 15px rgba(0, 0, 0, 0.25);
`

export const Thumbnail = styled.ImageBackground`
  height: ${({ small }) => small ? ' 160px' : ' 190px'};
  background-image: url(${({ source }) => source});
  background-color: #fff;
  margin-bottom: 7px;
  border-radius: 10px;
  overflow: hidden;
`

export const Category = styled.Text`
  font-weight: 700;
  font-size: 8px;
  line-height: 9px;
  margin-bottom: 2px;
  color: ${({ theme }) => theme.primaryTwo};
`

export const Title = styled.Text`
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  margin-bottom: 2px;
  color: ${({ theme }) => theme.text};
`

export const Description = styled.Text`
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  height: 37px;
  margin-bottom: 2px;
  color: ${({ theme }) => theme.textFour};
`

export const Price = styled.Text`
  font-weight: 700;
  font-size: 20px;
  color: ${({ theme }) => theme.secondary};
`

export const Action = styled.View`
  position: absolute;
  bottom: 0;
  bottom: ${({ inThumb }) => inThumb ? ' 0' : '67px'};
  right: ${({ inThumb }) => inThumb ? ' 0' : '10px'};
`

export const AddIconBox = styled.View`
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background: #FFFFFF;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.secondary};
`
