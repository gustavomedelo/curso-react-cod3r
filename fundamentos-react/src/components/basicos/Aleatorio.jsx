import React from "react";

export default props => {
    const { min, max} = props;    
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    return <div>
        <h2>Valor Aleatório</h2>
        <p><strong>Valor Mínimo: </strong>{props.min}</p>
        <p><strong>Valor Máximo: </strong>{props.max}</p>
        <p><strong>Valor aleatório escolhido: </strong>{result}</p>
    </div>
}
    
    