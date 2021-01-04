import restCountries from "../apis/restCountries";

//select region
export const selectRegion = (region) => async (dispatch) => {
  const response = await restCountries.get(`${region.name}`);
  dispatch({
    type: "REGION_SELECTED",
    payload: { region: region, response: response },
  });
};

//SearchCountry
export const fetchSearchCountry = (countries, term) => {
  return {
    type: "FETCH_SEARCH_COUNTRY",
    payload: { countries: countries, term: term },
  };
};

//SelectCountry
export const selectCountry = (country) => {
  return {
    type: "COUNTRY_SELECTED",
    payload: country,
  };
};

//RemoveCountry
export const removeCountry = (country) => {
  return {
    type: "COUNTRY_REMOVE",
    payload: country,
  };
};

//SearchSelectedCountry
export const fetchSearchSelectedCountry = (countries, term) => {
  return {
    type: "FETCH_SEARCH_SELECTED_COUNTRY",
    payload: { countries: countries, term: term },
  };
};
