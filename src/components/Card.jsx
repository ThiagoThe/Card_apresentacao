import "./card.css";

function Card({ usuario }) {
  <div className="card">
    <img src="{usuario.foto}" alt="{usuario.nome}" className="card-logo" />
    <div className="card-dados">
      <h1>{usuario.nome}</h1>
      <h2>Idade: {usuario.idade} anos</h2>
      <div className="card-contatos"></div>
    </div>
  </div>;
}

export default Card;
