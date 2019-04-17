import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BatteryEffect from '../components/BatteryEffect';
import { AuthContext } from '../contexts';

const Page = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IndexPage = ({ auth }) => {
  return (
    <Page>
      <div>
        <BatteryEffect />
        <h1>Welcome to React Basic</h1>
        <AuthContext.Consumer>
          {auth =>
            auth.isAuthenticated ? (
              <div>
                Let's go to your <Link to={'todo-list'}>Todo List</Link>
              </div>
            ) : (
              <div>
                you have to go to <Link to={'login'}>login</Link>
              </div>
            )
          }
        </AuthContext.Consumer>
      </div>
    </Page>
  );
};

export default IndexPage;
