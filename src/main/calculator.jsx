import React, {Component} from 'react'
import './calculator.css'

export default class Calculator extends Component{
    render(){
        return (
            <div className = 'calculator'>
            <span>Digite o valor principal: </span><input type="number"></input><br></br>
            <br></br>
            <span>Digite a data de vencimento: </span><input type="date"></input><br></br>
            <br></br>
            <span>Multa: </span><br></br>
            <br></br>
            <span>Selic: </span><br></br>
            <br></br>
            <span>Total a pagar: </span>


            </div>
        )
    }
}