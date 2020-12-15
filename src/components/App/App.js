import s from './App.module.scss';
import Options from "../Options/Options";
import Header from "../Header/Header";
import BalanceContainer from "../Balance/BalanceContainer";

function App() {
    return (
        <div className={s.App}>
            <div className={s.App__container}>
                <Header/>
                <Options/>
                <BalanceContainer/>
            </div>
        </div>
    );
}

export default App;
