import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Movie() {
  return (
    <div>
      <p>Selecione o horário</p>
      <Container>
        <div>
          <p>horario horario horario</p>
          <Link to='/assentos/:idSessao'>
            <button>hh:mm</button>
          </Link>
          <Link to='/assentos/:idSessao'>
            <button>hh:mm</button>
          </Link>
        </div>
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
