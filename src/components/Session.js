import Showtime from "./Showtime";

export default function Session(props) {
    return(
        <div>
          <p>{props.weekday} {props.date}</p>
            {props.showtimes.map((showtime) => Showtime(showtime))}
        </div>
    )
}