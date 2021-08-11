import styled, {createGlobalStyle, css, keyframes, ThemeProvider} from "styled-components";

export default function ComponentesEstilizados() {
    let mainColor = "#db7093";
    let mainAlphaColor80 = "#db709380";
    const setTransitionTime = (time) => `all ${time} ease-in-out`;
    const fadeIn = keyframes`
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    `;
    // Se utiliza el template de string de ecmascript
    // &:hover => el mismo h3 en el estado hover
    const MyH3 = styled.h3`
      padding: 2rem;
      text-align: center;
      color: ${(props) => props.color};
      color: ${({color}) => color};
      color: ${({color}) => color || "#000"};
      background-color: ${mainColor};
      transition: ${setTransitionTime("1s")};
      animation: ${fadeIn} 5s ease-out;

      ${({isButton}) => isButton && css`
        margin: auto;
        max-width: 50%;
        border-radius: 0.25rem;
        cursor: pointer;
      `}
      &:hover {
        background-color: ${mainAlphaColor80};
      }`;
    const light = {
        color: "#222",
        bgColor: "#DDD"
    }
    const dark = {
        color: "#DDD",
        bgColor: "#222"
    }
    const Box = styled.div`
      padding: 1rem;
      margin: 1rem;
      color: ${({theme}) => theme.color};
      background-color: ${({theme}) => theme.bgColor};
    `;
    // hereda los estilos de box y agrega estilos adicionales
    const BoxRounded = styled(Box)`
      border-radius: 1rem;
    `;
    const GlobalStyle = createGlobalStyle`
      h2 {
        padding: 2rem;
        background-color: #fff;
        color: #61dafb;
        text-transform: uppercase;
      }
    `;
    return (
        <>
            <GlobalStyle/>
            <h2>Styles-Components</h2>
            <MyH3>Hola soy un h3 estilizado con styled-components</MyH3>
            <MyH3 color="#61dafb">Hola soy un h3 estilizado con styled-components</MyH3>
            <MyH3 isButton="true">Soy un h3 estilizado como botón</MyH3>
            <ThemeProvider theme={light}>
                <Box>Soy una caja light</Box>
                <BoxRounded>Soy una caja redondeada light</BoxRounded>
            </ThemeProvider>
            <ThemeProvider theme={dark}>
                <Box>Soy una caja dark</Box>
                <BoxRounded>Soy una caja redondeada dark</BoxRounded>
            </ThemeProvider>
        </>
    );
}
