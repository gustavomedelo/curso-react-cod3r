import './TabelaProdutos.css'
import React from "react";

import produtos from '../../data/produtos'

export default props => {

    function getLinhas() {
        return produtos.map((p, i) => {
            return (
                <tr key={p.id} className={i % 2 === 0 ? 'Par' : 'Impar'}>
                    <td>{p.id}</td>
                    <td>{p.nome}</td>
                    <td>R$ {p.preço.toFixed(2).replace('.', ',')}</td>
                </tr>
            )
        })
    }

    return (
        <div className="TabelaProdutos">
            Tabela Produtos
            <table border={3}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {getLinhas()}
                </tbody>
            </table>
        </div>

    )
}