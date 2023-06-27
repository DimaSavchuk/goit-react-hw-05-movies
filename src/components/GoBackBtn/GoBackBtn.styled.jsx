import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const GoBackButton = styled(Link)`
  margin-right: 10px;
  background-color: #e0e0e0;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;

  text-decoration: none;
  color: #ff9800;

  &:hover {
    background-color: #d0d0d0;
  }
`;
