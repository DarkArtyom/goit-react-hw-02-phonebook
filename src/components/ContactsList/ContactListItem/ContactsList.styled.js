import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 600px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const BtnDelete = styled.button`
  display: block;
  outline: none;
  border: none;
  min-width: 50px;
  height: 30px;
  border-radius: 5px;
  cursor: pointer;
  background-color: orange;
  margin-left: 10px;
  &:hover {
    background-color: red;
    transition: 250;
  }
`;
