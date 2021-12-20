import { useState, useEffect } from 'react';

import styled from 'styled-components';

export default function Seat(props) {
  const [isAvailable, setIsAvailable] = useState(true);
  const [isSelected, setIsSelected] = useState(false);
  const [color, setColor] = useState('#C3CFD9');
  const [border, setBorder] = useState('#7B8B99');

  useEffect(() => {
    setIsAvailable(props.isAvailable);
    setColor('#FBE192');
    setBorder('#F7C52B');
  }, [props.isAvailable]);

  const Container = styled.button`
    width: 26px;
    height: 26px;
    background: ${color};
    border: 1px solid ${border};
    box-sizing: border-box;
    border-radius: 12px;
    margin: 8px;
  `;

  return (
    <Container
      onClick={() => {
        if (isAvailable === true) {
          isSelected ? setIsSelected(false) : setIsSelected(true);
        } else {
          alert('Esse assento não está disponível');
        }
        if (isSelected === true) {
          setColor('#8DD7CF');
          setBorder('#1AAE9E');
        }
      }}
    >
      {props.name}
    </Container>
  );
}
