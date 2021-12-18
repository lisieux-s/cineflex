import { Link } from 'react-router-dom';

export default function Showtime(props) {
    return (
        <Link to={'/assentos/'+props.id}>
        <button>{props.name}</button>
        </Link>
    )
}