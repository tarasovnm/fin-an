import { connect } from "react-redux";
import PropertyStructure from './PropertyStructure';

const mapStateToProps = (state) => {
  return {
    isReportPrepared: state.finAnalysis.isReportPrepared
  }
}

const PropertyStructureContainer = connect(mapStateToProps)(PropertyStructure)

export default PropertyStructureContainer;