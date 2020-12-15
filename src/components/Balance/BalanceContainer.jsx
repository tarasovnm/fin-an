import Balance from "./Balance";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        balanceData: state.finAnalysis.balanceData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const BalanceContainer = connect(mapStateToProps, mapDispatchToProps)(Balance);

export default BalanceContainer;