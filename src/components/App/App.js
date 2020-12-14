import s from './App.module.scss';
import Options from "../Options/Options";
import Balance from "../Balance/Balance";
import Header from "../Header/Header";

function App() {
    return (
        <div className={s.App}>
            <div className={s.App__container}>
                <Header/>
                <Options/>
                <Balance/>
            </div>
        </div>
    );
}

export default App;
