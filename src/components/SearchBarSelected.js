import React from "react";
import { connect } from "react-redux";
import { fetchSearchSelectedCountry } from "../actions";

class SearchBarSelected extends React.Component {
  onInputChange = (event) => {
    this.props.fetchSearchSelectedCountry(
      this.props.countriesSelectedList,
      event.target.value
    );
  };

  render() {
    return (
      <div
        className="ui input"
        style={{
          marginTop: "20px",
          marginLeft: "50%",
          transform: "translate(-50%)",
          width: "80%",
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
  return {
    countriesSelectedList: state.selectCountry,
  };
};

export default connect(mapStateToProps, { fetchSearchSelectedCountry })(
  SearchBarSelected
);
