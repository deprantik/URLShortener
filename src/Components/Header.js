import React from 'react';
import styled from 'styled-components';

const CustomHeader = styled.header`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #012169;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.17);

  div {
    font-size: 2rem;
  }
`;

const Header = () => {
  return (
    <CustomHeader>
      <div role={'heading'}>
        URL SHORTENER
      </div>
    </CustomHeader>
  );
};

export default Header;