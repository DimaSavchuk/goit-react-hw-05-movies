import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const AboutMovieStyled = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 20px;
  background-color: #f0f0f0;
  gap: 20px;
`;

export const Image = styled.div`
  width: 375px;
  height: 550px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 6px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Info = styled.div`
  max-width: 900px;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Release = styled.div`
  margin-bottom: 10px;

  span {
    font-weight: bold;
  }
`;

export const Score = styled.div`
  margin-bottom: 10px;

  span {
    font-weight: bold;
  }
`;

export const Overview = styled.div`
  margin-bottom: 10px;

  span {
    font-weight: bold;
  }
`;

export const Ganres = styled.ul`
  margin-bottom: 10px;
  display: flex;
  gap: 5px;
  padding-left: 0px;

  list-style: none;

  span {
    font-weight: bold;
  }
`;

export const GanresItem = styled.li``;
