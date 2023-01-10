const countriesReducer = (state, action) => {
  if (action.type === "CHANGE_THEME") {
    return { ...state, theme: !state.theme };
  }
  if (action.type === "IS_LOADING") {
    return { ...state, loading: true };
  }
  if (action.type === "IS_NOT_LOADING") {
    return { ...state, loading: false };
  }
  if (action.type === "FETCH_ERROR") {
    return { ...state, error: true };
  }
  if (action.type === "SET_DATA") {
    return {
      ...state,
      countries: action.payload,
      tempCountries: action.payload,
    };
  }
  if (action.type === "SEARCH_COUNTRY") {
    const text = action.payload;
    const tempCountries = state.countries.filter((item) => {
      return item.name.toLowerCase().includes(text);
    });
    return { ...state, tempCountries, inputValue: text };
  }
  if (action.type === "FILTER_COUNTRIES") {
    const region = action.payload;
    const tempCountries = state.countries.filter((item) => {
      return item.region.toLowerCase() === region.toLowerCase();
    });
    return { ...state, tempCountries };
  }
  return { ...state };
};

export default countriesReducer;
