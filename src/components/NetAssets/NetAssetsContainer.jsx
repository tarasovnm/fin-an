import { connect } from "react-redux";
import NetAssets from './NetAssets';

const mapStateToProps = (state) => {
  return {
    isReportPrepared: state.finAnalysis.isReportPrepared
  }
}

const NetAssetsContainer = connect(mapStateToProps)(NetAssets)

export default NetAssetsContainer;