import { connect } from "react-redux";
import { prepareReportAC } from './../../redux/fin-reducer';
import Calculate from './Calculate';

const mapStateToProps = (state) => {
  return {
    isReportPrepared: state.finAnalysis.isReportPrepared
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    prepareReport: () => dispatch(prepareReportAC()),
  }
}

const CalculateContainer = connect(mapStateToProps, mapDispatchToProps)(Calculate)

export default CalculateContainer;