export default function Success(props) {
  <div>
    <p>Pedido feito com sucesso!</p>
    <div>
        <p><strong>Filme e sessão</strong></p>
        <p>{props.movie.title}</p>
        <p>{props.day.date} {props.name}</p>
    </div>
    <div>
        <p><strong>Ingressos</strong></p>
        {props.seats.map((seat) => <p>Assento {seat.name}</p>)}
    </div>
    <div>
        <p><strong>Comprador</strong></p>
        <p>Nome: {props.name}</p>
        <p>CPF: {props.cpf}.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")}`}</p>
    </div>
  </div>;
}

//ainda precisa ajustar as chamadas de props de acordo com 
//o array construido em Seats