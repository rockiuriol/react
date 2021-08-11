import React, {Component} from "react";

// Sintaxis 1: Componente en formato de Funcion Expresado , arrow function que recibe las props,
//             ya contiene el return implicito arrow function
const Componente = props => <h2>{props.msg}</h2>;

// Sintaxis 2 : Componente en formato Funcion (Hooks)
/*
function Componente(props) {
    return <h2>{props.msg}</h2>
}
*/

// Sintaxis 3 : Componente basado en clase
/*
class Componente extends Component {
    render() {
        return <h2>{this.props.msg}</h2>
    }
}*/

export default Componente
