import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Home() {
  return (
    <div>
      <p>Selecione o filme</p>
      <Container>
        <Link to='/sessoes/:idFilme'>
          <div>
            {' '}
            <img />{' '}
          </div>
        </Link>
        <Link to='/sessoes/:idFilme'>
          <div>
            {' '}
            <img />{' '}
          </div>
        </Link>
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
  gap: 30px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 8px;
    width: 145px;
    height: 209px;
    border-radius: 3px;
    box-shadow: 0px 2px 4px 2px #0000001a;

    text-decoration: none;
  }
`;
