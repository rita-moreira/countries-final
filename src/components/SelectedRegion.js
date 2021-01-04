import React from "react";

import { connect } from "react-redux";

class SelectedRegion extends React.Component {
  render() {
    if (!this.props.region) {
      return (
        <div
          style={{
            marginTop: "40px",
            textAlign: "center",
          }}
        >
          <img
            style={{ backgroundColor: "whitesmoke" }}
            className="ui small centered circular image"
            src="../images/continents.png"
            alt="continents"
          />
          <h1 style={{ fontSize: "12px" }}>Please, select a region</h1>
        </div>
      );
    }

    return (
      <div
        style={{
          marginTop: "40px",
          textAlign: "center",
        }}
      >
        <img
          style={{ backgroundColor: "whitesmoke" }}
          className="ui small centered circular image"
          src={this.props.region.img}
          alt={this.props.region.name}
        />
        <h1 style={{ fontSize: "12px" }}>{this.props.region.name}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { region: state.selectRegion };
};
export default connect(mapStateToProps)(SelectedRegion);
