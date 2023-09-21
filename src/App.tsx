import Nav from "./components/Nav/Nav";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Register from "./views/Register";
import Login from "./views/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import PokemonData from "./views/PokemonData/PokemonData";
import Team from "./views/Team";

const theme = createTheme({
    palette: {
        primary: {
            main: "#b94b4b",
            light: "#dda1a5",
            dark: "#99403c",
        },
    },
});

const App = () => {
    return (
        <>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/login" element={<Login/>} />
                        <Route path="/register" element={<Register/>} />
                        <Route path="/pokemonFinder" element={<PokemonData/>}/>
                        <Route path="/team" element={<Team/>}/>
                    </Routes>
                </ThemeProvider>
            </BrowserRouter>
        </>
    );
};
export default App;
