import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Success() {
  const location = useLocation();
  const endPage = (location.state.endPage)

  const navigate = useNavigate();

  function handleClick() {
    navigate('/');
  }

  return (

    <Container>
      <p className='success'>Pedido feito <br />com sucesso!</p>
      <div>
        <p><strong>Filme e sessão</strong></p>
        <p>{endPage.session.movie.title}</p>
        <p>{endPage.session.day.weekday} {endPage.session.day.date}</p>
      </div>
      <div>
        <p><strong>Ingressos</strong></p>
        {endPage.seats.map((seat) => <p>Assento {seat}</p>)}
      </div>
      <div>
        <p><strong>Comprador</strong></p>
        <p>Nome: {endPage.name}</p>
        <p>CPF: {endPage.cpf}</p>
      </div>
      <button onClick={(handleClick)}>Voltar para Home</button>
    </Container>

  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  .success {
    color: #247A6B;
    font-weight: 700;
  }

  div {
    p {
      justify-content: left;
      text-align: left;
      margin: 0;
    }
    margin: 20px 0;
  }

  button {
    background: #E8833A;
    border: 0;
    border-radius: 5px;
    color: #fff;
    width: 225px;
    align-self: center;
    height: 42px;
    margin-top: 50px;
  }

`