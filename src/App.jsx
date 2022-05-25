import React, { useContext } from "react";
import About from "./components/about/about";
import Contact from "./components/contact-us/Contact";
import Introduction from "./components/introduction/introduction";
import ProductList from "./components/ProductList/ProductList";
import Toggle from "./components/Toggle/Toggle";
import { ThemeContext } from "./context/ThemeContext";

const App = () => {
    const theme = useContext(ThemeContext)
    return (
        <div className={`introduction-wrapper${theme.state.darkMode? ' dark': ''}`} style={{
            backgroundColor: theme.state.darkMode ? "#222": "",
            color: theme.state.darkMode ? "#fff": ""
        }}>
            <Toggle />
            <Introduction/>
            <About/>
            <ProductList/>
            <Contact/>
        </div>
    );
}


export default App;