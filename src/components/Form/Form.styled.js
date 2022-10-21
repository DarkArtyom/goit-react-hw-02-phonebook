import styled from 'styled-components';

export const Forma = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: 1px solid black;
`;

export const Label = styled.label`
  text-align: center;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  border: none;
  border-radius: 5px;
  background-color: lightblue;
  margin-bottom: 10px;
  padding-left: 10px;
  height: 30px;
`;

export const ButtonSubmit = styled.button`
  display: block;
  outline: none;
  border: none;
  min-width: 100px;
  height: 30px;
  border-radius: 5px;
  cursor: pointer;
  background-color: aqua;
  &:hover {
    background-color: aquamarine;
    transition: 250;
  }
`;
