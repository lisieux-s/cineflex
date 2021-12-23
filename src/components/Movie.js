import { Link } from 'react-router-dom';
export default function Movie(props) {
    return(
        <Link to={'/sessoes/' + props.id}>
          <div>
            {' '}
            <img src={props.posterURL} alt={props.title}/>{' '}
          </div>
        </Link>
    )
}