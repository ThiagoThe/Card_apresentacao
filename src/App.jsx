import "./App.css";
import Card from "./components/Card";

function App() {
  const usuario = {
    nome: "Thiago Pires",
    idade: 33,
    foto: "https://avatars.githubusercontent.com/u/34431813?v=4",
    github: "https://github.com/ThiagoThe",
    linkedin: "https://www.linkedin.com/in/thiago-pereira-pires-293a61158/",
  };

  return (
    <div>
      <Card usuario={usuario} />
    </div>
  );
}

export default App;
