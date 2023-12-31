import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

export const LoadingStyled = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(17, 17, 17, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #ff9800;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: ${spinAnimation} 1s linear infinite;
`;

export const Text = styled.div``;
