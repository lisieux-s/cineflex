import { useLocation } from "react-router-dom"

export default function Success() {
  const location = useLocation();
  console.log(location)
  const endPage = (location.state.endPage)
  return(

    <div>
    <p>Pedido feito com sucesso!</p>
    <div>
        <p><strong>Filme e sessão</strong></p>
        <p>{endPage.session.movie.title}</p>
        <p>{endPage.session.day.weekday} {endPage.session.day.date}</p>
    </div>
    <div>
        <p><strong>Ingressos</strong></p>
        {endPage.seats.map((seat) => <p>Assento {seat.id}</p>)}
    </div>
    <div>
        <p><strong>Comprador</strong></p>
        <p>Nome: {endPage.name}</p>
        <p>CPF: {endPage.cpf}</p>
    </div>
  </div>

  )
}

//ainda precisa ajustar as chamadas de props de acordo com 
//o array construido em Seats