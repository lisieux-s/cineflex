import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import styled from 'styled-components';

import Home from './components/Home';
import Movies from './components/Movies';
import Sessions from './components/Sessions';
import Success from './components/Success';
import Selection from './components/Selection';

export default function App() {
  const [idMovie, setIdMovie] = useState('0');
  const [idSession, setIdSession] = useState('0');
  return (
    <>
      <Header>CINEFLEX</Header>
      <Page>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/filme/{idMovie}' element={<Movies />} />
            <Route path='/sessao/{idSession}' element={<Sessions />} />
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
`;
