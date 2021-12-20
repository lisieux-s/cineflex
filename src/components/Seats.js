import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

import styled from 'styled-components';

import Seat from './Seat';

export default function Seats() {
  const [session, setSession] = useState(null);
  const [seats, setSeats] = useState(null)
  const { idSessao } = useParams();
  useEffect(() => {
    const pSession = axios.get(
      'https://mock-api.driven.com.br/api/v4/cineflex/showtimes/' +
        idSessao +
        '/seats'
    );
    pSession.then((res) => {
      setSession(res.data);
      setSeats(session.data);
    });
  }, [session, idSessao]);
  if (session === null) {
    return (
      <Loading src='https://acegif.com/wp-content/uploads/loading-37.gif' />
    );
  }
  return (
    <div>
      <p>Selecione o(s) assento(s)</p>
      <Room>{
        seats === null? '' : seats.map((seat) => Seat(seat))
      }
      </Room>
      <Captions>
        <div>
          <Seat isAvailable='true' selected='true' />
          Selecionado
        </div>
        <div>
          <Seat isAvailable='true' selected='false' />
          Disponível
        </div>
        <div>
          <Seat isAvailable='false' selected='false' />
          Indisponível
        </div>
      </Captions>

      <Container>
        <p>Nome do comprador:</p>
        <input placeholder='Digite seu nome...'></input>
        <p>CPF do comprador:</p>
        <input placeholder='Digite seu CPF...'></input>

        <Link to='/'>
          <button>Reservar assento(s)</button>
        </Link>
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  p {
    font-size: 18px;
    margin: 0;
  }
  input {
    font-style: italic;
  }
  button {
    width: 225px;
    height: 42px;
    border: none;
    border-radius: 3px;
    background: #e8833a;
    color: #fff;

    align-self: center;
    margin: 57px;
  }
`;
const Captions = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: items;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Room = styled.div`
  display: flex;
  width: 100px;
  margin: 0 auto;
`;
const Loading = styled.img`
  width: 64px;
`;
