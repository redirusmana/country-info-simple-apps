import React from "react";
import { connect } from "react-redux";
import { CSSReset, ThemeProvider, theme } from "@chakra-ui/react";
import CountryTableIndex from "./CountryTableIndex";
import CountryFilter from "./CountryFilter";

export const CountryIndex = props => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <React.Fragment>
          <CountryFilter />
          <CountryTableIndex {...props} />
        </React.Fragment>
      </ThemeProvider>
    </div>
  );
};

const mapStateToProps = state => ({});
export default connect(mapStateToProps)(CountryIndex);
