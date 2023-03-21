import './Mega.css'
import React, { useState } from "react";
import { gerarNumeros } from "./gerarNumeroNaoContido";

export default props => {
    const quantidade = props.tamanhoArrayDigitado || 6
    const numerosIniciais = Array(quantidade).fill(0)

    const [sequencia, setSequencia] = useState(numerosIniciais)
    const [tamanhoArrayDigitado, setTamanhoArrayDigitado] = useState(quantidade)

    function quandoMudar(e) {
        setTamanhoArrayDigitado(e.target.value)
    }

    return (
        <div className='Mega'>
            <h2>Números gerados:</h2>{sequencia.join(' ')}
            <h3><input type="number" placeholder="N de valores"
                value={tamanhoArrayDigitado} onChange={e =>
                    setTamanhoArrayDigitado(+e.target.value)} /></h3>
            <button onClick={_ =>
                setSequencia(gerarNumeros(props.min, props.max, tamanhoArrayDigitado))}>
                Gerar
            </button>
        </div>
    )
}