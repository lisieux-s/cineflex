import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

import styled from 'styled-components';

import Seat from './Seat';

export default function Seats() {
  const [seats, setSeats] = useState(null);
  const { idSessao } = useParams();
  useEffect(() => {
    const pSeats = axios.get(
      'https://mock-api.driven.com.br/api/v4/cineflex/showtimes/' +
        idSessao +
        '/seats'
    );
    pSeats.then((res) => {
      setSeats(res.data);
    });
  });
  return (
    <div>
      <p>Selecione o(s) assento(s)</p>
      <Room>
        <Seat name='{seats.seats[0].name}' />
          
      </Room>
        <Captions>
          <div>
            <Seat isAvailable='true' selected='true'/>
            Selecionado
          </div>
          <div>
            <Seat isAvailable='true' selected='false'/>
            Disponível
          </div>
          <div>
            <Seat isAvailable='false' selected='false' />
            Indisponível
          </div>
        </Captions>
      
      <Container>
        <p>Nome do comprador:</p>
        <input placeholder="Digite seu nome..."></input>
        <p>CPF do comprador:</p>
        <input placeholder="Digite seu CPF..."></input>

        <button>Reservar assento(s)</button>
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
`

const Room = styled.div`
  display: flex;
  width: 100px;
  margin: 0 auto;
`