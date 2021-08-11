import {createRef, useRef} from "react";

export default function Referencias() {
    // let refMenu = createRef(), // Esto es para componentes de clase, class component
    let refMenu = useRef(),
        refMenuBtn = useRef();
    const handleToggleMenu = (e) => {
        // No usar esto
        /*const menu = document.getElementById("menu");
        if (e.target.textContent === 'Menú') {
            e.target.textContent = "Cerrar";
            menu.style.display = "block";
        } else {
            e.target.textContent = "Menú";
            menu.style.display = "none";
        }*/
        console.log(refMenu, refMenuBtn);
        if (refMenuBtn.current.textContent === 'Menú') {
            refMenuBtn.current.textContent = "Cerrar";
            refMenu.current.style.display = "block";
        } else {
            refMenuBtn.current.textContent = "Menú";
            refMenu.current.style.display = "none";
        }
    }
    return (
        <>
            <h2>Referencias</h2>
            <button ref={refMenuBtn} onClick={handleToggleMenu}>Menú</button>
            <nav ref={refMenu} style={{display: "none"}}>
                <a href="#">Seccion 1</a>
                <br/>
                <a href="#">Seccion 2</a>
                <br/>
                <a href="#">Seccion 3</a>
                <br/>
                <a href="#">Seccion 4</a>
                <br/>
                <a href="#">Seccion 5</a>
            </nav>
        </>
    );
}
