import React from 'react';
import ButtonColor from './component/Button/ButtonColor.jsx'
import Paragraph from './component/Paragraph/Paragraph.jsx'
import ButtonViewNameLabel from './component/Button/ButtonViewNameLabel.jsx';
import './App.css'

function App() {
  const [isMaiusculo, setIsMaiusculo] = React.useState(false);

  const handleClick = () => {
    setIsMaiusculo(!isMaiusculo);
  };

  return (
    <>
      <h1>Desafio 1</h1>

      <Paragraph isMaiusculo={isMaiusculo} />

      <ButtonColor onClick={handleClick} />

      <hr />

      <ButtonViewNameLabel label="Clique aqui vai exibir o relatório " />

    </>
  )
}

export default App
