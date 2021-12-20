import { useState, useEffect } from 'react';

import styled from 'styled-components';

export default function Seat(props) {
  const [isAvailable, setIsAvailable] = useState(true);
  const [isSelected, setIsSelected] = useState(false);

  if (props.isAvailable === false) {
    setIsAvailable(false);
  }

  return (
    <Container 
    
        onClick={() => {
            if(isAvailable === true) {
              isSelected ? setIsSelected(false) : setIsSelected(true); 
            }
            }
        }>
            {props.name}
    </Container>
  );
}

const Container = styled.button`
  width: 26px;
  height: 26px;
  background: #c3cfd9;
  border: 1px solid #808f9d;
  box-sizing: border-box;
  border-radius: 12px;
  margin: 8px;
`;
