import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const List = styled.div`
  margin-top: 24px;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

export const Movie = styled(Link)`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  width: calc(100% / 5 - 20px);
  position: relative;

  :nth-of-type(5n) {
    width: calc(100% / 5);
  }

  :hover,
  :focus {
    box-shadow: 0px 1px 6px #ff9800;
    transition: 200ms cubic-bezier(0.65, 0.05, 0.36, 1);
  }

  text-decoration: none;
`;

export const Image = styled.div`
  width: 100%;
  height: 410px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;

  color: #333;
`;

export const Info = styled.div`
  font-size: 14px;
`;

export const ReleaseDate = styled.span`
  margin-right: 10px;
  color: #ff9800;
`;

export const VoteCount = styled.span`
  margin-top: 5px;
  color: #ff9800;
`;
