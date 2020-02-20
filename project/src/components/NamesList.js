import React from "react";
import { connect } from "react-redux";

const NamesList = props => {
  return (
    <>
      {props.error ? (
        <div className="error">{props.error}</div>
      ) : (
        props.names.map(names => <div>{names.aliases}</div>)
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    names: state.names,
    error: state.error
  };
};
export default connect(
  mapStateToProps,
  {}
)(NamesList);
