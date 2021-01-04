import React from "react";
import { connect } from "react-redux";
import { selectCountry } from "../actions";
import SearchBar from "./SearchBar";
class Countries extends React.Component {
  renderContainer(country) {
    return (
      <div style={{ marginLeft: "50%" }} className="item" key={country.name}>
        <div className="ui small image">
          <img
            className="ui avatar image"
            src={country.flag}
            alt={country.name}
          />
        </div>
        <div className="middle aligned content">
          <div className="header">{country.name}</div>
          <div className="description">
            <p>{country.capital}</p>
          </div>
          <div className="extra">
            <div
              className="ui right floated button primary"
              onClick={() => {
                this.props.selectCountry(country);
              }}
            >
              Select
            </div>
          </div>
        </div>
      </div>
    );
  }
  renderCountriesList() {
    if (!this.props.countries && !this.props.countrySearch) {
      return null;
    } else if (this.props.countrySearch) {
      return this.props.countrySearch.map((country) => {
        return this.renderContainer(country);
      });
    } else {
      return this.props.countries.map((country) => {
        return this.renderContainer(country);
      });
    }
  }

  render() {
    if (!this.props.region) {
      return null;
    }
    return (
      <div
        style={{
          marginTop: "40px",
          textAlign: "center",
        }}
      >
        <SearchBar />
        <div
          style={{ width: "50%", textAlign: "left", marginTop: "100px" }}
          className=" ui  divided items"
        >
          {this.renderCountriesList()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    region: state.selectRegion,
    countries: state.countries.data,
    countrySearch: state.searchCountry,
  };
};
export default connect(mapStateToProps, { selectCountry })(Countries);
