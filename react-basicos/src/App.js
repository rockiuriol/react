import React, {useEffect, useState} from "react";
import logo from './logo.svg';
import Componente from "./components/Componente";
import './App.css';
import Propiedades from "./components/Propiedades";
import Estado from "./components/Estado";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import RenderizadoElementos from "./components/RenderizadoElementos";
import {EventosES6, EventosES7, MasSobreEventos} from "./components/Eventos";
import ComunicacionComponente from "./components/ComunicacionComponente";
import CicloVida from "./components/CicloVida";
import AjaxApis from "./components/AjaxApis";
import ContadorHooks from "./components/ContadorHooks";
import ScrollHooks from "./components/ScrollHooks";
import RelojHooks from "./components/RelojHooks";
import AjaxHooks from "./components/AjaxHooks";
import HooksPersonalizados from "./components/HooksPersonalizados";
import Referencias from "./components/Referencias";
import Formularios from "./components/Formularios";
import Estilos from "./components/Estilos";
import ComponentesEstilizados from "./components/ComponentesEstilizados";
import {useFetch} from "./hooks/useFetch";

export default function App() {
    return (
        <div className="App">
            <header className="App-header">
                <section>
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>Edit <code>src/App.js</code> and save to reload.</p>
                    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                        Learn React
                    </a>
                </section>
                <section>
                    <Componente msg='Hola soy un componente'/>
                    <hr/>
                    <Propiedades cadena='Esto es una cadena' numero={19} booleano={true} arreglo={[1, 2, 3, 4]}
                                 objeto={{'nombre': 'Rocki', 'correo': 'rocki.uriol@gmail.com'}}
                                 funcion={(num) => num * num}
                                 elementoReact={<i>Esto es un elemento React</i>}
                                 componenteReact={<Componente msg='Holi'/>}/>
                    <hr/>
                    <Estado/>
                    <hr/>
                    <RenderizadoCondicional/>
                    <hr/>
                    <RenderizadoElementos/>
                    <hr/>
                    <EventosES6/>
                    <hr/>
                    <EventosES7/>
                    <hr/>
                    <MasSobreEventos/>
                    <hr/>
                    <ComunicacionComponente/>
                    <hr/>
                    <CicloVida/>
                    <hr/>
                    <AjaxApis/>
                    <hr/>
                    <ContadorHooks titulo="Seguidores"/>
                    <hr/>
                    <ScrollHooks/>
                    <hr/>
                    <RelojHooks/>
                    <hr/>
                    <AjaxHooks/>
                    <hr/>
                    <HooksPersonalizados/>
                    <hr/>
                    <Referencias/>
                    <hr/>
                    <Formularios/>
                    <hr/>
                    <Estilos/>
                    <hr/>
                    <ComponentesEstilizados/>
                </section>
            </header>
        </div>
    );
}

// imr
// use
// use
