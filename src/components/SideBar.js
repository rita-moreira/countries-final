import React from "react";
import { connect } from "react-redux";
import { removeCountry } from "../actions";

import SearchBarSelected from "./SearchBarSelected";
import { fetchSearchSelectedCountry } from "../actions";

class SideBar extends React.Component {
  renderContainer(country) {
    return (
      <div key={country.name} className="ui card">
        <div className="image">
          <img src={country.flag} alt={country.name} />
        </div>
        <div className="content">
          <h1
            className="header"
            style={{ fontSize: "15px", textAlign: "center" }}
          >
            {country.name}
          </h1>
          <div className="description">
            <p>Capital: {country.capital}</p>
            <p>Region: {country.region}</p>
            <p>SubRegion: {country.subregion}</p>
          </div>
        </div>
        <button
          className="negative right floated ui button"
          onClick={() => {
            this.props.removeCountry(country);
            this.props.fetchSearchSelectedCountry(this.props.countries, "");
          }}
        >
          Remove
        </button>
      </div>
    );
  }
  renderSelectedCountries() {
    if (!this.props.countries && !this.props.searchCountry) {
      return <div>Select</div>;
    } else if (this.props.searchCountry) {
      return this.props.searchCountry.map((country) => {
        return this.renderContainer(country);
      });
    } else {
      return this.props.countries.map((country) => {
        return this.renderContainer(country);
      });
    }
  }
  render() {
    return (
      <div className="ui left sidebar visible">
        <h3
          className="ui header"
          style={{ textAlign: "center", marginTop: "20px" }}
        >
          Selected countries
        </h3>
        <SearchBarSelected />
        <div className="ui  divided list">{this.renderSelectedCountries()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    countries: state.selectCountry,
    searchCountry: state.searchSelectedCountry,
  };
};
export default connect(mapStateToProps, {
  removeCountry,
  fetchSearchSelectedCountry,
})(SideBar);
