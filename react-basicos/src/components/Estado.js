import {Component} from "react";

// Los componentes funcionales no pueden tener Estado, ya partir de los hooks de la versión 16.8 de react podemos agregar
// un hook que se llama useState y ya puede manejar el estado
function EstadoAHijo(props) {
    return (<h3>{props.contadorHijo}</h3>);
}

// Un componente de Clase debe tener un metodo render
export default class Estado extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contador: 0
        };
        setInterval(() => {
            this.setState({
                contador: this.state.contador + 1
            })
        }, 1000);
    }

    render() {
        return (<div>
            <h2>Peticiones</h2>
            <p>{this.state.contador}</p>
            <EstadoAHijo contadorHijo={this.state.contador}/>
        </div>);
    }
}
