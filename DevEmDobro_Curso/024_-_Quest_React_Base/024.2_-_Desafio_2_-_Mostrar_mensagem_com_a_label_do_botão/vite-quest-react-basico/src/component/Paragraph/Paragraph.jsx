// import React from 'react';

function Paragraph({ isMaiusculo }){
    return(
        <>
        <p style={{ textTransform: isMaiusculo ? 'uppercase' : 'none', color: isMaiusculo ? '#00698f' : '#000' }}>
            Você atingirá o sucesso quando apresentar com orgulho as cicatrizes que adquiriu ao longo da sua jornada.
        </p>
        </>    
    );
}

export default Paragraph;