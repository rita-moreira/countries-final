import React from "react";
import { connect } from "react-redux";
//components
import Regions from "./Regions";
import SelectedRegion from "./SelectedRegion";
import SearchBar from "./SearchBar";
import Countries from "./Countries";
import SideBar from "./SideBar";

class App extends React.Component {
  render() {
    return (
      <div>
        <Regions />
        <SelectedRegion />
        <SearchBar />
        <Countries />
        {this.props.numberOfCountries > 0 ? <SideBar /> : null}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { numberOfCountries: state.selectCountry.length };
};
export default connect(mapStateToProps)(App);
