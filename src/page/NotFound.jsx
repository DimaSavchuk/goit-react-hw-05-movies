import React from 'react';
import { GoBack } from './Page.styled';

const NotFound = () => {
  return (
    <>
      <GoBack to="/">Go Back!</GoBack>
      <h2>Page not found</h2>
    </>
  );
};

export default NotFound;
