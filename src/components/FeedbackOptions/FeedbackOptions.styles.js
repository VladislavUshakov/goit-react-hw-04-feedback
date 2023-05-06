import styled from '@emotion/styled';

export const OptionsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding: 0;
  margin: 0;
  list-style: none;

  margin-bottom: 25px;
`;

export const Button = styled.button`
  width: 80px;
  height: 28px;
  margin: 0;
  border: none;
  border-radius: 5px;
  background-color: #ff9800;
  color: white;

  transition: transform 200ms linear;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const GoodBtn = styled.button`
  width: 80px;
  height: 28px;
  margin: 0;
  border: none;
  border-radius: 5px;
  background-color: #00c900;
  color: white;

  transition: transform 200ms linear;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;
