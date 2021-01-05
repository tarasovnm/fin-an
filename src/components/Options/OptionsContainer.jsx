import Options from "./Options";
import {connect} from "react-redux";
import {changePeriodStartAC, changePeriodEndAC, updateCompanyNameAC} from "../../redux/finReducer";

const mapStateToProps = (state) => {
  return {
    companyName: state.finAnalysis.companyName,
    analysisPeriod: state.finAnalysis.analysisPeriod
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateCompanyName: (text) => dispatch(updateCompanyNameAC(text)),
    changePeriodStart: (delta) => dispatch(changePeriodStartAC(delta)),
    changePeriodEnd: (delta) => dispatch(changePeriodEndAC(delta)),
  }
}

const OptionsContainer = connect(mapStateToProps, mapDispatchToProps)(Options);

export default OptionsContainer;