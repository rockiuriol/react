import {Component} from "react";
import data from "../helpers/data.json";

function ElementoLista(props) {
    return (<li><a href={props.el.web}>Frameworks {props.el.name}</a></li>);
}

export default class RenderizadoElementos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seasons: ['Primavera', 'Verano', 'Otoño', 'Invierno']
        }
    }

    render() {
        return (
            <div>
                <h2>Renderizado Elementos</h2>
                <h3>Estaciones del año</h3>
                <ol>{this.state.seasons.map((e) => <li key={e}>{e}</li>)}</ol>
                <h3>Frameworks Frontend JAvaScript</h3>
                <ul>{data.frameworks.map(el => <ElementoLista key={el.id} el={el}/>)}</ul>
            </div>
        );
    }
}
