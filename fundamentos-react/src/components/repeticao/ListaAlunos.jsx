import React from "react";

import alunos from '../../data/alunos'

export default props => {
    const alunosLI = alunos.map(a => {
        return (
            <li key={a.id}>
                {a.id}) {a.nome} -{">"} {a.nota}
            </li>
        )
    })

    return (
        <div>
            <ul style={{listStyle: "none"}}>
                {alunosLI}
            </ul>
        </div>
    )
}