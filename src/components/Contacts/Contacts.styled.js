import { styled } from 'styled-components';

export const Button = styled.button`
  display: block;
  background-color: transparent;
  padding: 2px 7px;
  margin-left: 20px;
  border-radius: 3px;
  border: 1px solid rgb(187, 182, 182);
`;

export const List = styled.ul`
  margin-top: 20px;
  padding-right: 20px;
  width: 300px;
  list-style: none;
`;

export const Contact = styled.li`
  display: flex;
  align-items: center;

  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Text = styled.p`
  margin: 0;
  display: inline-block;
`;
