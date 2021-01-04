import { combineReducers } from "redux";

const regionsReducer = () => {
  return [
    { name: "Africa", img: "./images/africa.png" },
    { name: "Americas", img: "./images/america.png" },
    { name: "Asia", img: "./images/asia.png" },
    { name: "Europe", img: "./images/europa.png" },
    { name: "Oceania", img: "./images/australia.png" },
  ];
};

const selectedRegionReducer = (selectedRegion = null, action) => {
  if (action.type === "REGION_SELECTED") {
    return action.payload.region;
  }

  return selectedRegion;
};

const countriesReducer = (state = [], action) => {
  switch (action.type) {
    case "REGION_SELECTED":
      return action.payload.response;
    default:
      return state;
  }
};

const searchCountryReducer = (state = null, action) => {
  if (action.type === "FETCH_SEARCH_COUNTRY") {
    const countriesList = action.payload.countries;
    const term = action.payload.term;
    const regex = term.toUpperCase();
    const elem = countriesList.filter((elem) =>
      elem.name.toUpperCase().startsWith(regex)
    );

    if (!term) return null;

    return elem;
  }

  return state;
};

let selectedCountry = [];

const selectedCountryReducer = (state = selectedCountry, action) => {
  if (action.type === "COUNTRY_SELECTED") {
    return [
      ...state.filter((val) => val.name !== action.payload.name),
      action.payload,
    ];
  }
  if (action.type === "COUNTRY_REMOVE") {
    return state.filter((elem) => elem !== action.payload);
  }

  return state;
};

const searchCountrySelectedReducer = (state = null, action) => {
  if (action.type === "FETCH_SEARCH_SELECTED_COUNTRY") {
    const countriesList = action.payload.countries;
    const term = action.payload.term;
    const regex = term.toUpperCase();
    const elem = countriesList.filter((elem) =>
      elem.name.toUpperCase().startsWith(regex)
    );

    if (!term) return null;

    return elem;
  }

  return state;
};

export default combineReducers({
  regions: regionsReducer,
  selectRegion: selectedRegionReducer,
  countries: countriesReducer,
  searchCountry: searchCountryReducer,
  selectCountry: selectedCountryReducer,
  searchSelectedCountry: searchCountrySelectedReducer,
});
