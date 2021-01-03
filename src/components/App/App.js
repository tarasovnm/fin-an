import s from './App.module.scss';
import OptionsContainer from "../Options/OptionsContainer";
import Header from "../Header/Header";
import BalanceContainer from "../Balance/BalanceContainer";

function App() {
  return (
    <div className={s.App}>
      <Header />
      <OptionsContainer />
      <BalanceContainer />
    </div>
  );
}

export default App;
