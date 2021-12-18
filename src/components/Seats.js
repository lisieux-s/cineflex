import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Seats() {
  return (
    <div>
      <p>Selecione o(s) assento(s)</p>
      <div>
        //aqui vao os assentos, chamados dinamicamente com nested loops
        provavelmente <br/>//e abaixo, a legenda
      </div>
      <Container>
        <p>Nome do comprador:</p>
        <input placeholder='Digite seu nome...'></input>
        <p>CPF do comprador:</p>
        <input placeholder='Digite seu CPF...'></input>

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
        background: #E8833A;
        color: #fff;

        align-self: center;
        margin: 57px;
    }
`