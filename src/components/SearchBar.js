import React from "react";
import { connect } from "react-redux";
import { fetchSearchCountry } from "../actions";

class SearchBar extends React.Component {
  onInputChange = (event) => {
    this.props.fetchSearchCountry(this.props.countriesList, event.target.value);
  };

  render() {
    return (
      <div
        className="ui input"
        style={{
          marginTop: "80px",
          marginLeft: "50%",
          transform: "translate(-50%)",
          width: "50%",
        }}
      >
        <input
          onChange={this.onInputChange}
          type="text"
          placeholder="Search..."
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { countriesList: state.countries.data };
};

export default connect(mapStateToProps, { fetchSearchCountry })(SearchBar);
