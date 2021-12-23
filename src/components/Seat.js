import { useState, useEffect } from 'react';

import styled from 'styled-components';

export default function Seat(props) {
  //usar ternarios para que cor dependa de available e selected
  const [isAvailable, setIsAvailable] = useState(true);
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    setIsAvailable(props.isAvailable);
  }, []);

  return (
    <Container
      onClick={() => {
        if (isAvailable) {
          setIsSelected(!isSelected);
        } else {
          alert("Esse assento não está disponível");
        }
      }}
      //isso permite que Container acesse essas props
      isSelected={isSelected}
      isAvailable={isAvailable}
    >
      {props.name}
    </Container>
  );
}

const Container = styled.button`
display: flex;
justify-content: center;
align-items: center;
  width: 26px;
  height: 26px;
  background: 
    ${(props) =>
    props.isSelected ? "#8DD7CF" : props.isAvailable ? "#C3CFD9" : "#FBE192"};
  border: 1px solid
    ${(props) =>
      props.isSelected ? "#45BDB0" : props.isAvailable ? "#808F9D" : "#F7C52B"};
  box-sizing: border-box;
  border-radius: 12px;
  margin: 8px;
`;
