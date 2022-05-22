import styled from 'styled-components/native'

export const Container = styled.View`
  padding: ${({ noContentPadding }) => noContentPadding ? '0' : '13px 19px' };
  margin-bottom: 24px;
`

export const Title = styled.Text`
  padding: ${({ noContentPadding }) => noContentPadding ? '13px 19px' : '0' };
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  color: ${({ theme }) => theme.text};
`
