import React, { useReducer, useEffect } from "react";
import reducer from "../reducers/countriesReducer";

const CountriesContext = React.createContext();

const initialState = {
  theme: false,
  countries: [],
  loading: true,
  error: false,
  tempCountries: [],
  inputValue: "",
};

const CountriesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const changeTheme = () => {
    dispatch({ type: "CHANGE_THEME" });
  };

  const searchCountry = (text) => {
    dispatch({ type: "SEARCH_COUNTRY", payload: text });
  };
  const filterCountry = (region) => {
    dispatch({ type: "FILTER_COUNTRIES", payload: region });
  };
  const fetchData = async (url) => {
    dispatch({ type: "IS_LOADING" });
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({ type: "SET_DATA", payload: data });
      dispatch({ type: "IS_NOT_LOADING" });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR" });
    }
  };
  useEffect(() => {
    fetchData("https://restcountries.com/v2/all");
  }, []);

  return (
    <CountriesContext.Provider
      value={{ ...state, changeTheme, searchCountry, filterCountry }}
    >
      {children}
    </CountriesContext.Provider>
  );
};

export { CountriesContext, CountriesProvider };
