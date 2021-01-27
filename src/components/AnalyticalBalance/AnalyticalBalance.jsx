import s from './AnalyticalBalance.module.scss';


const AnalyticalBalanceTableHead = () => {
  return (
    <thead>
      <tr>
        <th>Показатели</th>
        <th>Значение</th>
        <th>31.12.2017</th>
        <th>31.12.2018</th>
        <th>31.12.2019</th>
      </tr>

      <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
      </tr>
    </thead>
  );
}

const AnalyticalBalanceTableBody = () => {
  return (
    <tbody>
      <tr>
        <td rowSpan="4">I. Внеоборотные активы</td>
        <td>значение, тыс. руб.</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>изменение, тыс. руб.</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>изменение, %</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>удельный вес, %</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  );
}

const AnalyticalBalanceTable = () => {
  return (
    <table className={s.table}>
      <AnalyticalBalanceTableHead />
      <AnalyticalBalanceTableBody />
    </table>
  );
}

const AnalyticalBalance = ({ isReportPrepared }) => {
  if (isReportPrepared) {
    return (
      <section className={s.balance}>
        <h3 className={s.balance__title}>Аналитический баланс</h3>
        <AnalyticalBalanceTable />
      </section>
    )
  }

  return <></>;
}

export default AnalyticalBalance;