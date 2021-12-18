import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import styled from 'styled-components';

import Home from './components/Home';
import Sessions from './components/Sessions';
import Seats from './components/Seats';
import Success from './components/Success';
import Footer from './components/Footer';

export default function App() {
  const [idFilme, setIdFilme] = useState('0');
  const [idSessao, setIdSessao] = useState('0');
  return (
    <>
      <Header>CINEFLEX</Header>
      <Page>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sessoes/:idFilme' element={<Sessions />} />
            <Route path='/assentos/:idSessao' element={<Seats />} />
            <Route path='/success' element={<Success />} />
          </Routes>
        </BrowserRouter>
      </Page>
    </>
  );
}

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;

  height: 67px;
  width: 100%;
  background: #c3cfd9;

  font-weight: 400;
  font-size: 34px;
  color: #e8833a;
`;
const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 23px;
  padding-top: 67px;
`;
