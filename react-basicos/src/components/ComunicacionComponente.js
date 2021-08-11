import {Component} from "react";
// 1ra comunicacion a traves de las props
// 2da comunicacion el hijo pueda actualizar el state del padre
// 3ra comunicacion a 3 niveles redux o context
export default class ComunicacionComponente extends Component {
    state = {
        contador: 0,
    }
    // Arrow function
    incrementarContador = (e) => {
        this.setState({contador: this.state.contador + 1})
    }

    render() {
        return (
            <>
                <h2>Comunicación entre Componentes</h2>
                <p>Contador <b>{this.state.contador}</b></p>
                <Hijo incrementarContador={this.incrementarContador} message="Mensaje para el hijo 1"/>
                <Hijo incrementarContador={this.incrementarContador} message="Mensaje para el hijo 2"/>
            </>
        );
    }
};

function Hijo(props) {
    return (<>
        <h3>{props.message}</h3>
        <button onClick={props.incrementarContador}>+</button>
    </>)
}
