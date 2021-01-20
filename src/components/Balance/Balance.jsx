import s from "./Balance.module.scss";
import BalanceTable from "./BalanceTable/BalanceTable";

const Balance = ({ balanceData, analysisPeriod, cellValueChanged }) => {
  return (
    <section className={s.balance}>
      <h3 className={s.balance__title}>Бухгалтерский баланс</h3>

      <div className={s.balace__table}>
        <BalanceTable
          tableData={balanceData}
          analysisPeriod={analysisPeriod}
          cellValueChanged={cellValueChanged} />
      </div>
    </section>
  );
}

export default Balance;