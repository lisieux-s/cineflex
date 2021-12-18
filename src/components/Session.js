import { Link } from 'react-router-dom';

import Showtime from "./Showtime";

//buscar props do array days do objeto de id 1
export default function Session(props) {
    return(
        <div>
          <p>{props.weekday} {props.date}</p>
          <Link to='/assentos/:idSessao'>
            {props.showtimes.map((showtime) => Showtime(showtime))}
          </Link>
        </div>
    )
}