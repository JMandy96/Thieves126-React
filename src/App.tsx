import Nav from "./components/Nav/Nav";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Register from "./views/Register";
import Login from "./views/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import PokemonData from "./views/PokemonData/PokemonData";
import Team from "./views/Team";
import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useState, useEffect } from "react";
import CheckoutForm from "./views/CheckoutForm";
import CompletedPayment from "./views/CompletedPayment";

const theme = createTheme({
    palette: {
        primary: {
            main: "#b94b4b",
            light: "#dda1a5",
            dark: "#99403c",
        },
    },
});

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

const App = () => {
    const [clientSecret, setClientSecret] = useState('')

    useEffect(() => {
        createPayment()
      }, []);
    
    const createPayment = async () => {
        const response = await fetch('http://localhost:5000/api/create_payment', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ items: [{ id: "League of Legends" }, { id: "Call of Duty"}, { id: "Starfield"}] })
        })
        const data = await response.json()
        console.log(data)
        setClientSecret(data.clientSecret)
    }


    const options: StripeElementsOptions = {
        clientSecret,
        appearance: {
            theme: 'stripe'
        }
    };


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
                        {clientSecret && (
                            <Route path="/checkoutForm" element={<Elements options={options} stripe={stripePromise}><CheckoutForm/></Elements>}/>
                        )}
                        <Route path="/completedPayment" element={<CompletedPayment/>}/>
                    </Routes>
                </ThemeProvider>
            </BrowserRouter>
        </>
    );
};
export default App;
