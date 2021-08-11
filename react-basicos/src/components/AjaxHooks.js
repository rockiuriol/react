import {useEffect, useState} from "react";

// Destructurando props
function Pokemon({avatar, name}) {
    return (
        <figure>
            <img src={avatar} alt={name}/>
            <figcaption>{name}</figcaption>
        </figure>
    );
}

export default function AjaxHooks() {
    const [pokemons, setPokemons] = useState([]);
    // se requiere que la peticion solo se realice una sola vez; arreglo vacio en deps

    /*useEffect(() => {
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
                    setPokemons((pokemons) => [...pokemons, pokemon]);
                    // let pokemons = [...this.state.pokemons, pokemon];

                });
            })
        })
    }, []);
    */

    // Antipatron:no usar esto  useEffect(async() => {
    useEffect(() => {
        // Si se quiere usar una funcion asincrona se define y luego se usa como se muestra aqui
        // Recomendación de la documentación de react
        // 1. Definimos la funcion asyncrona
        const getPokemons = async (url) => {
            let res = await fetch(url), json = await res.json();
            /*
                 json.results.forEach(async (el) => {
                    let res = await fetch(el.url), json = await res.json();
                    let pokemon = {
                        id: json.id,
                        name: json.name,
                        avatar: json.sprites.front_default
                    };
                    setPokemons((pokemons) => [...pokemons, pokemon]);
                });
            */
            for (const el of json.results) {
                let res = await fetch(el.url), json = await res.json();
                let pokemon = {
                    id: json.id,
                    name: json.name,
                    avatar: json.sprites.front_default
                };
                setPokemons((pokemons) => [...pokemons, pokemon]);
            }
        };

        // 2. La usamos
        getPokemons("https://pokeapi.co/api/v2/pokemon/");
    }, []);

    return (
        <>
            <h2>Peticiones asíncronas en Hooks</h2>
            {pokemons.length === 0 ? <h3>Cargando...</h3> :
                pokemons.map(el => <Pokemon key={el.id} name={el.name} avatar={el.avatar}/>)}
        </>
    )
}
