import React, { useState } from 'react';
import ButtonColor from './component/Button/ButtonColor.jsx'
import Paragraph from './component/Paragraph/Paragraph.jsx'
import './App.css'

function App() {
  const [isMaiusculo, setIsMaiusculo] = useState(false);

  const handleClick = () => {
    setIsMaiusculo(!isMaiusculo);
  };

  return (
    <>
      <Paragraph isMaiusculo={isMaiusculo} />

      <ButtonColor onClick={handleClick} />
    </>
  )
}

export default App
