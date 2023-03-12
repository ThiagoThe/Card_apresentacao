import "./card.css";

function Card({ usuario }) {
  <div className="card">
    <img src="{usuario.foto}" alt="{usuario.nome}" className="card-logo" />
    <div className="card-dados">
      <h1>{usuario.nome}</h1>
      <h2>Idade: {usuario.idade} anos</h2>
      <div className="card-contatos">
        <a href="{usuario.gtihub}" target="_blank">
          <box-icon
            type="logo"
            name="github"
            color="white"
            size="md"
            title="Link para o GitHub"
          ></box-icon>
        </a>
        <a href="{usuario.linkedin}" target="_blank">
          <box-icon
            type="logo"
            name="linkedin"
            color="white"
            size="md"
            title="Link para o LinkedIn"
          ></box-icon>
        </a>
      </div>
    </div>
  </div>;
}

export default Card;
