import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Movie from './Movie';

export default function Home() {
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    const pMovies = axios.get(
      'https://mock-api.driven.com.br/api/v4/cineflex/movies'
    );
    pMovies.then((res) => {
      setMovies(res.data);
    });
  });
  if(movies === null) {
    return(<Loading src='https://acegif.com/wp-content/uploads/loading-37.gif' />)
  }
  return (
    <div>
      <p>Selecione o filme</p>
      <Container>
        {movies.map(movie => Movie(movie))}
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

  img {
    width: 129px;
    height: 193px;
    object-fit: cover;
}
`;
const Loading = styled.img`
  width: auto;
`
