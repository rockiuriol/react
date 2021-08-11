import PropTypes from "prop-types";

export default function Propiedades(props) {
    return (
        <div>
            <h2>{props.porDefecto}</h2>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.booleano ? 'Verdadero' : 'Falso'}</li>
                <li>{props.arreglo.join(', ')}</li>
                <li>{props.objeto.nombre + ' - ' + props.objeto.correo}</li>
                <li>{props.arreglo.map(props.funcion).join(', ')}</li>
                <li>{props.funcion(100)}</li>
                <li>{props.elementoReact}</li>
                <li>{props.componenteReact}</li>
            </ul>
        </div>
    );
}

Propiedades.defaultProps = {
    porDefecto: 'Las Props por defecto'
}

Propiedades.propTypes = {
    cadena: PropTypes.string.isRequired,
    numero: PropTypes.number.isRequired,
    booleano: PropTypes.bool.isRequired,
    arreglo: PropTypes.array.isRequired,
    objeto: PropTypes.object.isRequired,
    funcion: PropTypes.func.isRequired,
    elementoReact: PropTypes.element.isRequired,
    // componenteReact: PropTypes.any.isRequired
}
