import { Link } from 'react-router-dom';
import styled from "styled-components";

export default function Seat(props) {
    return(
        
            <Container>
                {props.name}
            </Container>
        
    )
}

const Container = styled.button`
    width: 26px;
    height: 26px;
    background: #C3CFD9;
    border: 1px solid #808F9D;
    box-sizing: border-box;
    border-radius: 12px;
    margin: 
`