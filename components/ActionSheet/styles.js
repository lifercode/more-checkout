import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: #fff;
  position: absolute;
  bottom: ${({ open }) => open ? 0 : '-300px'};
  left: 0;
  z-index: 999;
  padding: 29px;
  border-radius: 14px 14px 0px 0px;
  width: 100%;
  box-shadow: 2px 4px 15px rgba(0, 0, 0, 0.25);
  transition: 4s;
`
