import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  background-color: #f0f0f0;
  padding: 20px;
`;

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

export const AdditionalInfo = styled.div`
  margin: 20px auto;
`;

export const Cast = styled(Link)`
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

export const Revies = styled(Link)`
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

export const Additional = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const GoBack = styled(Link)`
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
