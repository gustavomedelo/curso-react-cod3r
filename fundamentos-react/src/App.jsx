import './App.css'
import React from "react";

import Mega from './components/mega/Mega';
import Contador from './components/contador/Contador';
import Input from './components/formulario/Input';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import DiretaPai from './components/comunicacao/DiretaPai';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import ParOuImpar from './components/condicional/ParOuImpar';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ListaAlunos from './components/repeticao/ListaAlunos';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import Familia from './components/basicos/Familia';
import Card from "./components/layout/Card";
import Aleatorio from "./components/basicos/Aleatorio";
import Fragmento from './components/basicos/Fragmento';
import ComParametro from './components/basicos/ComParametro';
import Primeiro from './components/basicos/Primeiro';

export default _ =>
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="#13 - Desafio Megasena" color="#788">
                <Mega min={1} max={60}/>
            </Card>

            <Card titulo="#12 - Componente baseado em classe" color="#417">
                <Contador numeroInicial={1110} />
            </Card>

            <Card titulo="#11 - Componente Controlado" color="#377">
                <Input />
            </Card>

            <Card titulo="#10 - Comunicação Indireta" color="#977">
                <IndiretaPai />
            </Card>

            <Card titulo="#09 - Comunicação Direta" color="#391">
                <DiretaPai />
            </Card>

            <Card titulo="#08 - Renderização Condicional" color="#999">
                <ParOuImpar numero={20} />
                <UsuarioInfo usuario={{ nome: 'Gustavo', sobrenome: 'Coelho' }} />
                <UsuarioInfo />
            </Card>

            <Card titulo="#07 - Desafio Repetição" color="#449">
                <TabelaProdutos />
            </Card>

            <Card titulo="#06 - Repetição" color="#799">
                <ListaAlunos />
            </Card>

            <Card titulo="#05 - Componente com Filhos" color="#199">
                <Familia sobrenome="Medelo">
                    <FamiliaMembro nome="Guilherme" />
                    <FamiliaMembro nome="Gustavo" />
                    <FamiliaMembro nome="Giovanna" />
                </Familia>
            </Card>

            <Card titulo="#04 - Exemplo de Card" color="#080">
                <Aleatorio min={1} max={10} />
            </Card>

            <Card titulo="#03 - Fragmento" color="#E8B71A">
                <Fragmento />
            </Card>

            <Card titulo="#02 - Com Parametro" color="#E94C6F">
                <ComParametro
                    titulo="Situação do Aluno"
                    nome="Pedro Silva" nota={9.3} />
            </Card>

            <Card titulo="#01 - Primeiro">
                <Primeiro />
            </Card>
        </div>
    </div>