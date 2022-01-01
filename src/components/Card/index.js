import { useState } from 'react';
import { Button } from '../Buttons';

const Card = () => {

  const [valor, setValor] = useState(0)

  function Adicionar() {
    setValor(valor + 1);
  }
  function Remover() {
    setValor(valor - 1);
  }
  return (
    <div className="card">
      <div className="card-header">1º Card</div>
      <div className="card-body">
        <Button className="btn btn-primary" onclick={Adicionar}>
          Adicionar
        </Button>
        <Button className="btn btn-danger" onclick={Remover}>
        Remover
        </Button>

        <p>{valor}</p>
      </div>
    </div>
  )
}

export default Card;
