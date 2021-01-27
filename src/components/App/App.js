import s from './App.module.scss';
import OptionsContainer from "../Options/OptionsContainer";
import Header from "../Header/Header";
import BalanceContainer from "../Balance/BalanceContainer";
import CalculateContainer from '../Calculate/CalculateContainer';
import PropertyStructureContainer from '../PropertySturcture/PropertyStructureContainer';
import NetAssetsContainer from '../NetAssets/NetAssetsContainer';
import FinancialStabilityContainer from '../FinancialStability/FinancialStabilityContainer';
import AnalyticalBalance from '../AnalyticalBalance/AnalyticalBalanceContainer';
import AnalyticalProfitLoss from '../AnalyticalProfitLoss/AnalyticalProfitLossContainer';


function App() {
  return (
    <div className={s.App}>
      <Header />
      <OptionsContainer />
      <BalanceContainer />
      <CalculateContainer />
      <PropertyStructureContainer />
      <NetAssetsContainer />
      <FinancialStabilityContainer />
      <AnalyticalBalance />
      <AnalyticalProfitLoss />
    </div>
  );
}

export default App;
