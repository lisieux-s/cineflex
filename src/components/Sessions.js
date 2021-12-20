import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

import Session from './Session';
import Footer from './Footer';

export default function Sessions() {
  const [sessions, setSessions] = useState(null);
  const [posterURL, setPosterURL] = useState(null);
  const [title, setTitle] = useState(null);
  const { idFilme } = useParams();

  useEffect(() => {
    const pSessions = axios.get(
      'https://mock-api.driven.com.br/api/v4/cineflex/movies/' +
        idFilme +
        '/showtimes'
    );
    pSessions.then((res) => {
      setSessions(res.data);
      setPosterURL(sessions.posterURL);
      setTitle(sessions.title);
    });
  }, [sessions, idFilme]);
  if (sessions === null) {
    return (
      <Loading src='https://acegif.com/wp-content/uploads/loading-37.gif' />
    );
  }
  return (
    <div>
      <p>Selecione o horário</p>
      <Container>{sessions.days.map((session) => Session(session))}</Container>
      <Footer posterURL={posterURL} title={title} />
    </div>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  p {
    font-size: 20px;
    text-align: left;
    padding-bottom: 22px;
  }
  button {
    width: 82px;
    height: 43px;
    margin-right: 8px;

    background: #e8833a;
    border: none;
    border-radius: 3px;

    color: #fff;
  }
`;
const Loading = styled.img`
  width: 64px;
  margin: 50vh auto;
`;
