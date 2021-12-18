import styled from 'styled-components';

export default function Sessions() {
  const [sessions, setSessions] = useState(null)
  useEffect(() => {
    const pSessions = axios.get('https://mock-api.driven.com.br/api/v4/cineflex/movies/ID_DO_FILME/showtimes')
  })
  return (
    <div>
      <p>Selecione o horário</p>
      <Container>
        
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
