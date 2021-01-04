import React from "react";
import { connect } from "react-redux";

//actions
import { selectRegion } from "../actions";
import { fetchSearchCountry } from "../actions";

let previousSelected = { name: "default" };

class Regions extends React.Component {
  onClickChangeRegion(region) {
    if (previousSelected.name !== region.name) {
      previousSelected.name = region.name;
      this.props.selectRegion(region);
      if (this.props.countriesList)
        this.props.fetchSearchCountry(this.props.countriesList, "");
    }
  }

  renderRegions() {
    return this.props.regions.map((region) => {
      return (
        <button
          key={region.name}
          className="ui button"
          onClick={() => {
            this.onClickChangeRegion(region);
          }}
        >
          {region.name}
        </button>
      );
    });
  }

  render() {
    return (
      <div
        style={{
          width: "50%",
          marginLeft: "50%",
          transform: "translate(-50%)",
        }}
        className="ui five buttons"
      >
        {this.renderRegions()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { regions: state.regions, countriesList: state.countries.data };
};
export default connect(mapStateToProps, { selectRegion, fetchSearchCountry })(
  Regions
);
