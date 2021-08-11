import {useState} from "react";
/*
export default function Formularios() {
    const [nombre, setNombre] = useState('');
    const [sabor, setSabor] = useState('');
    const [lenguaje, setLenguaje] = useState('');
    const [terminos, setTerminos] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('El formulario se ha enviado');
    };
    return (
        <>
            <h2>Formularios</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" name="nombre" value={nombre}
                       onChange={(e) => setNombre(e.target.value)}/>
                <p>Elije tu Sabor JS Favorito</p>
                <input type="radio" id="vanilla" name="sabor" value="vanilla" onChange={(e) => setSabor(e.target.value)}
                       defaultChecked/>
                <label htmlFor="vanilla">Vanilla</label>
                <input type="radio" id="react" name="sabor" value="react" onChange={(e) => setSabor(e.target.value)}/>
                <label htmlFor="react">React</label>
                <input type="radio" id="angular" name="sabor" value="angular"
                       onChange={(e) => setSabor(e.target.value)}/>
                <label htmlFor="angular">Angular</label>
                <input type="radio" id="vue" name="sabor" value="vue" onChange={(e) => setSabor(e.target.value)}/>
                <label htmlFor="vue">Vue</label>
                <input type="radio" id="svelte" name="sabor" value="svelte" onChange={(e) => setSabor(e.target.value)}/>
                <label htmlFor="svelte">Svelte</label>
                <p>Elije tu lenguaje de programación favorito</p>
                <select name="lenguaje" onChange={(e) => setLenguaje(e.target.value)} defaultValue="">
                    <option value="">---</option>
                    <option value="js">JavaScript</option>
                    <option value="php">PHP</option>
                    <option value="py">Python</option>
                    <option value="go">Go</option>
                    <option value="rb">Ruby</option>
                </select>
                <label htmlFor="terminos">Acepto</label>
                <input type="checkbox" id="terminos" onChange={(e) => setTerminos(e.target.checked)}/>
                <input type="submit"/>
            </form>
        </>
    );
}
*/
export default function Formularios() {
    const [form, setform] = useState({});
    const handleChange = (e) => {
        // Lo que ya tenga el formulario,
        // e.target => elemento que genero el eventp
        // e.target.name => accedemos al nombre del input que esta cambiando
        // para volver una propiedad del objeto se usa la destructuración [] => [e.target.name]
        // si no existe la pripiedad en el objeto form la agrega y ya esta la actualiza con el valor que traiga=> e.taget.value
        /// Todo esto es graciaas a la actulizacion que ha venido despues del año 2015 con Javascript
        // gracias al spret operator, que nos permite conbinar al objeto form, y utilizar la destructuración para asignar
        // combiente y colo como propiedad valor name del formulario y le asigne su correspondiente valor
        setform({...form, [e.target.name]: e.target.value});
    }
    const handleChecked = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.checked,
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('El formulario se ha enviado');
    };
    return (
        <>
            <h2>Formularios</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" name="nombre" value={form.nombre} onChange={handleChange}/>
                <p>Elije tu Sabor JS Favorito</p>
                <input type="radio" id="vanilla" name="sabor" value="vanilla" onChange={handleChange}
                       defaultChecked/>
                <label htmlFor="vanilla">Vanilla</label>
                <input type="radio" id="react" name="sabor" value="react" onChange={handleChange}/>
                <label htmlFor="react">React</label>
                <input type="radio" id="angular" name="sabor" value="angular" onChange={handleChange}/>
                <label htmlFor="angular">Angular</label>
                <input type="radio" id="vue" name="sabor" value="vue" onChange={handleChange}/>
                <label htmlFor="vue">Vue</label>
                <input type="radio" id="svelte" name="sabor" value="svelte" onChange={handleChange}/>
                <label htmlFor="svelte">Svelte</label>
                <p>Elije tu lenguaje de programación favorito</p>
                <select name="lenguaje" onChange={handleChange} defaultValue="">
                    <option value="">---</option>
                    <option value="js">JavaScript</option>
                    <option value="php">PHP</option>
                    <option value="py">Python</option>
                    <option value="go">Go</option>
                    <option value="rb">Ruby</option>
                </select>
                <label htmlFor="terminos">Acepto</label>
                <input type="checkbox" id="terminos" name="terminos" onChange={handleChecked}/>
                <input type="submit"/>
            </form>
        </>
    );
}
