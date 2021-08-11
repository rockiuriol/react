import {Component} from "react";

function Pokemon(props) {
    return (
        <figure>
            <img src={props.avatar} alt={props.name}/>
            <figcaption>{props.name}</figcaption>
        </figure>
    );
}

export default class AjaxApis extends Component {
    state = {
        pokemons: [],
    }

    componentDidMount() {
        let url = "https://pokeapi.co/api/v2/pokemon/";
        fetch(url).then(res => res.json()).then(json => {
            json.results.forEach(el => {
                fetch(el.url).then(r => r.json()).then(obj => {
                    let pokemon = {
                        id: obj.id,
                        name: obj.name,
                        avatar: obj.sprites.front_default
                    };
                    // con el spret operator, opten una copia del estado actual y luego cobimas con este
                    // nuevo objeto, llamado pokemon
                    let pokemons = [...this.state.pokemons, pokemon];
                    // shorthand de los objetos en ESC6, como la key tiene el mismo nombre que la variable de
                    //  asignacion simplemente se simplifica asi
                    this.setState({pokemons})
                });
            })
        })
    }

    render() {
        return (
            <>
                <h2>Peticiones asíncronas en Componentes de Clases</h2>
                {this.state.pokemons.length === 0 ? <h3>Cargando...</h3> :
                    this.state.pokemons.map(el => <Pokemon key={el.id} name={el.name} avatar={el.avatar}/>)}
            </>
        )
    }
}
