import Balance from "./Balance";
import { connect } from "react-redux";
import { cellValueChangedAC } from "../../redux/fin-reducer";

const mapStateToProps = (state) => {
  return {
    balanceData: state.finAnalysis.balanceData,
    analysisPeriod: state.finAnalysis.analysisPeriod
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    cellValueChanged: (data) => dispatch(cellValueChangedAC(data)),
  }
}

const BalanceContainer = connect(mapStateToProps, mapDispatchToProps)(Balance);

export default BalanceContainer;