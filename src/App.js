import "./App.css";
import Main from "./components/Main";
import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="Theme" id={theme}>
        <div className="slid">
          <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
      
         <div className="form">

            <label className="switch">
              <input type="checkbox" className="switch--input" onChange={toggleTheme} />
              <span className="switch--slider"></span>
            </label>      
  
         </div>
        </div>
        <Main/>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
