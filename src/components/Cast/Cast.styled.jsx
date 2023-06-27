import styled from '@emotion/styled';

export const Cards = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 20px;
  padding: 20px 0;
  scroll-snap-type: x mandatory;

  ::-webkit-scrollbar {
    height: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 3px;
  }

  ::-webkit-scrollbar-track {
    background-color: #f0f0f0;
    border-radius: 3px;
  }
`;

export const Item = styled.div`
  flex-shrink: 0;
  scroll-snap-align: start;
  width: 200px;
`;

export const Image = styled.img`
  width: 100%;
  height: 250px;
  background-size: cover;
  background-position: center;
  border-radius: 6px;
`;

export const Name = styled.h2`
  margin-top: 10px;
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
`;

export const Character = styled.h3`
  font-size: 15px;
  color: #ff9800;

  span {
    font-size: 16px;
    font-weight: bold;
    color: #333;
  }
`;
