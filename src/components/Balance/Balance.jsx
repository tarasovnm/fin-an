import s from "./Balance.module.scss";
import BalanceTable from "./BalanceTable/BalanceTable";

const Balance = ({balanceData}) => {
    return (
        <div className={s.balance}>
            <h2 className={s.balance__title}>Бухгалтерский баланс</h2>

            <div className={s.balace__table}>
                <BalanceTable tableData={balanceData} />
            </div>
        </div>
    );
}

export default Balance;