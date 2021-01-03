import s from './App.module.scss';
import Options from "../Options/Options";
import Header from "../Header/Header";
import BalanceContainer from "../Balance/BalanceContainer";

function App() {
  return (
    <div className={s.App}>
      <Header />
      <Options />
      <BalanceContainer />
    </div>
  );
}

export default App;
