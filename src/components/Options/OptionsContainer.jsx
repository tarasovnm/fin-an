import Options from "./Options";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    companyName: state.finAnalysis.companyName,
    analysisPeriod: state.finAnalysis.analysisPeriod
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

const OptionsContainer = connect(mapStateToProps, mapDispatchToProps)(Options);

export default OptionsContainer;