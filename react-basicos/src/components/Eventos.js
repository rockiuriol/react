import {Component} from "react";

// Cada vez que se defina un evento en un componente
// basado en clase se va ha tener que hacer el binding
// y la recomendacion es hacerlo en el contructor
//
export class EventosES6 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contador: 0
        }
        this.sumar = this.sumar.bind(this);
        this.restar = this.restar.bind(this);
    }

    sumar(e) {
        this.setState({
            contador: this.state.contador + 1,
        })
    }

    restar(e) {
        this.setState({
            contador: this.state.contador - 1,
        })
    }

    render() {
        return (
            <>
                <h2>Eventos en Componentes de Clase ES6</h2>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </>
        );
    }
}

// Caracteristica de ES7: Properties Initializer
export class EventosES7 extends Component {
    state = {
        contador: 0
    }

    // Arrow function
    // Heredan el this del contexto en el que se encuentran
    // y nos permite evitar hacer el binding que se hacia en ES6
    sumar = (e) => {
        //console.log('Sumar');
        //console.log(this);
        //console.log(e);
        this.setState({
            contador: this.state.contador + 1,
        })
    }

    restar = (e) => {
        //console.log('Restar');
        //console.log(this);
        //console.log(e);
        this.setState({
            contador: this.state.contador - 1,
        })
    }

    render() {
        return (
            <div>
                <h2>Eventos en Componentes de Clase ES7</h2>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        );
    }
}

/*function Boton(props) {
    return (<button onClick={props.myOnClick}>Botón hecho componente</button>);
}*/
// const Boton = (props) => (<button onClick={props.myOnClick}>Botón hecho componente</button>);
// Proceso de la destructuración
const Boton = ({myOnClick}) => <button onClick={myOnClick}>Botón hecho componente</button>;


export class MasSobreEventos extends Component {

    handleClickSaludar1 = (e) => {
        console.log(e);
        console.log(e.target);
        console.log(e.nativeEvent);
        console.log(e.nativeEvent.target);

    }
    handleClickSaludar2 = (evento, mensaje) => {
        console.log(mensaje);

    }

    render() {
        // PAsar parametros desde el manejador de eventos
        return (
            <>
                <h2>Más Sobre Eventos</h2>
                <button onClick={this.handleClickSaludar1}>Saludar 1</button>
                <button
                    onClick={(evento) => this.handleClickSaludar2(evento, "Hola pasando parametro desde un evento")}>Saludar
                    2
                </button>
                {/*Evento Personalizado*/}
                {/*<Boton onClick={(evento) => this.handleClickSaludar2(evento, "Hola pasando parametro desde un evento")}/>*/}
                <Boton
                    myOnClick={(evento) => this.handleClickSaludar2(evento, "Hola pasando parametro desde un evento")}/>
            </>
        );
    }
}
