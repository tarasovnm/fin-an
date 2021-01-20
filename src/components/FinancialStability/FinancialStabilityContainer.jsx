import { connect } from "react-redux";
import FinancialStability from './FinancialStability';

const mapStateToProps = (state) => {
  return {
    isReportPrepared: state.finAnalysis.isReportPrepared
  }
}

const FinancialStabilityContainer = connect(mapStateToProps)(FinancialStability)

export default FinancialStabilityContainer;