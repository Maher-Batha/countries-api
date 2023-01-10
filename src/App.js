import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Countries, SingleCountry, Error } from "./pages";
import { CountriesContext } from "./context/CountriesContext";
import { Navbar } from "./components";

const App = () => {
  const { theme } = useContext(CountriesContext);
  useEffect(() => {
    if (theme) {
      document.documentElement.className = "light-theme";
    } else {
      document.documentElement.className = "dark-theme";
    }
  }, [theme]);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/:countryId" element={<SingleCountry />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
