import {useEffect, useState} from "react";

export default function ScrollHooks() {
    const [scrollY, setScrollY] = useState(0);
    const [name, setName] = useState('Jhon');
    useEffect(() => {
        console.log('Moviendo el scroll');
        const detectarScroll = () => setScrollY(window.pageYOffset);
        window.addEventListener('scroll', detectarScroll);
        // Cuando este conmponente Scrollhooks ya no exista
        // voy a retornar una funcion donde me voy a desuscribir al evento EventListener
        return () => {
            window.removeEventListener('scroll', detectarScroll);
            console.log('Fase de Desmontaje')
        }
    }, [scrollY]);
    useEffect(() => {
        console.log('Fase de Montaje');
        // Para que solo se ejecute una sola vez definir el arregle de dependencias vacio
        // si se envia algun valor se ejecutara cada que dicho valor cambie
    }, []);
    useEffect(() => {
        console.log('Fase de Actualización');
        // Para que se ejecute varias veces no definir el arregle de lista de dependencias
    });
    useEffect(() => {

        // Para que se ejecute varias veces no definir el arregle de lista de dependencias
        // Cuando se pasa un return, react entiende que quieres que ejecute la fase de
        // desmontaje
        return () => {
            console.log('Fase de Desmontaje');
        };
    });
    return (
        <>
            <h2>Hooks - useEffect y el ciclo de vida</h2>
            <p>Scroll Y del navegador {scrollY}px</p>
        </>
    );
}
