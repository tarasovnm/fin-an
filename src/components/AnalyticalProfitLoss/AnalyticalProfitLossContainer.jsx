import { connect } from "react-redux";
import AnalyticalProfitLoss from './AnalyticalProfitLoss';

const mapStateToProps = (state) => {
  return {
    isReportPrepared: state.finAnalysis.isReportPrepared
  }
}

const AnalyticalProfitLossContainer = connect(mapStateToProps)(AnalyticalProfitLoss)

export default AnalyticalProfitLossContainer;