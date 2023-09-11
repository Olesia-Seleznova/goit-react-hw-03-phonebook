import { styled } from 'styled-components';

export const Form = styled.form`
  border: 1px solid black;
  background-color: #fff;
  padding: 20px 20px;
  width: 50%;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 5px 10px;
  font-size: 15px;
  font-weight: 700;
  width: 40%;
  margin-bottom: 30px;
`;

export const Button = styled.button`
  display: block;
  background-color: transparent;
  padding: 2px 7px;
  border-radius: 3px;
  border: 1px solid rgb(187, 182, 182);
`;
