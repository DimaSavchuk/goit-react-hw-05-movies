import styled from '@emotion/styled';

export const SearchFormStyled = styled.form`
  display: flex;
  align-items: center;
  max-width: 400px;
  margin: 0 auto;
  background-color: #f0f0f0;
  border-radius: 4px;
  padding: 5px;
`;

export const SearchBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  padding: 5px;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const SearchFormInput = styled.input`
  flex: 1;
  border: none;
  background-color: transparent;
  font-size: 14px;
  padding: 5px;
  outline: none;

  &::placeholder {
    color: #888888;
  }
`;
