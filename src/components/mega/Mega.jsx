/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react'

export default props => {

    const [numeros, setNumeros] = useState(Array(props.qtdeNumero).fill(0))

    function gerarNumerosNaoContidos(array){
        const min = 1
        const max = 60
        const novoNumero = parseInt(Math.random() * (max - min)) + min
        return array.includes(novoNumero)
        ? gerarNumerosNaoContidos(array)
        : novoNumero
    }

    function gerarNumeros() {
        const novoArray = Array(props.qtdeNumero)
        .fill(0)
        .reduce((a, e) => {
            const novoNumero = gerarNumerosNaoContidos(a)
            console.log(a, e, novoNumero)
            return [...a, novoNumero]
        }, [])
        .sort((a, b) => a - b)
        setNumeros(novoArray)
    }

    return (
        <>
            <h2>{numeros.join(' ')}</h2>
            <button onClick={gerarNumeros}>Gerar Números</button>
        </>
    );
};