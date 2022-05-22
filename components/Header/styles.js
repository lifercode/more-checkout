import styled from 'styled-components/native'

export const Container = styled.View`
  margin-top: 40px;
  flex-direction: row;
  padding: 13px 19px;
`

export const Title = styled.Text`
  flex: 1;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: ${({ theme }) => theme.text};
`

export const IconBox = styled.View`
  position: relative;
`

export const Budget = styled.View`
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 14px;
  height: 14px;
  right: -5px;
  top: -1px;
  background: #FFFFFF;
  border: 0.5px solid rgba(219, 219, 219, 0.98);
  border-radius: 22px;
  z-index: 999;
`

export const BudgetLabel = styled.Text`
  font-weight: 700;
  font-size: 8px;
  line-height: 9px;
  color: #9A8BFF;
`
