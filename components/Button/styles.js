import styled from 'styled-components/native'

export const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  height: ${({ small }) => small ? 37 : 50}px;
  background: ${({ color }) => (color && color === 'secondary') ? '#8775FE' : '#504DB6'};
  box-shadow: 0px 7px 5px ${({ theme }) => theme.shadow};
  border-radius: 37px;
  min-width: 320px;
`

export const Label = styled.Text`
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  color: #FFFFFF;
  text-transform: uppercase;
`