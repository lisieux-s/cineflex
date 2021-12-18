import { Link } from 'react-router-dom';
export default function(props) {
    return(
        <Link to={'/sessoes/' + props.id}>
          <div>
            {' '}
            <img src={props.posterURL}/>{' '}
          </div>
        </Link>
    )
}