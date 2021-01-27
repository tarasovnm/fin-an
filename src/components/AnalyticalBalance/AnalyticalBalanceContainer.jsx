import { connect } from "react-redux";
import AnalyticalBalance from './AnalyticalBalance';

const mapStateToProps = (state) => {
  return {
    isReportPrepared: state.finAnalysis.isReportPrepared
  }
}

const AnalyticalBalanceContainer = connect(mapStateToProps)(AnalyticalBalance)

export default AnalyticalBalanceContainer;