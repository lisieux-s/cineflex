import { Link } from "react-router-dom";
import styled from 'styled-components';

export default function Home() {
    return (
        <div>
            <p>Selecione o filme</p>
            <Container>
                <div></div>
                <div></div>
            </Container>
        </div>
    )
}

const Container = styled.ul`
display: flex;
gap: 30px;
    div {
        padding: 8px;
        width: 145px;
        height: 209px;
        border-radius: 3px;
        box-shadow: 0px 2px 4px 2px #0000001A;

    }
`
