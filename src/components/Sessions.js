import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Session from './Session';
export default function Sessions(ID_DO_FILME = 1) {
  const [sessions, setSessions] = useState(null);
  useEffect(() => {
    const pSessions = axios.get(
      'https://mock-api.driven.com.br/api/v4/cineflex/movies/'+1+'/showtimes'
    );
    pSessions.then((res) => {
      setSessions(res.data);
    });
  });
  if(sessions === null) {
    return(<Loading src='https://acegif.com/wp-content/uploads/loading-37.gif' />)
  }
  return (
    <div>
      <p>Selecione o horário</p>
      <Container>
        {sessions.days.map((session) => Session(session))}
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  margin-top: 51px;
  p {
    font-size: 20px;
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
  width: auto;
`