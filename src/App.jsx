/* eslint-disable import/no-anonymous-default-export */
import './App.css'
import React from 'react'

import Card from './components/layout/Card'
import Mega from './components/mega/Mega'


export default (props) => (

    <div className="App">
        <h1>Sorteie aqui seus números vencedores!</h1>

        <div className="Cards">

            <Card titulo="Mega acumulada - 03/03/21 - R$ 22.000.000,00" color="#FF432E">
                <Mega qtdeNumero={6} />
            </Card>

        </div>

    </div>

);