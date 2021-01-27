import s from './AnalyticalProfitLoss.module.scss';


const AnalyticalProfitLossTableHead = () => {
  return (
    <thead>
      <tr>
        <th>Показатели</th>
        <th>Значение</th>
        <th>31.12.2018</th>
        <th>31.12.2019</th>
      </tr>

      <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
      </tr>
    </thead>
  );
}

const AnalyticalProfitLossTableBody = () => {
  return (
    <tbody>
      <tr>
        <td rowSpan="3">I. Выручка</td>
        <td>значение, тыс. руб.</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>изменение, тыс. руб.</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>изменение, %</td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  );
}

const AnalyticalProfitLossTable = () => {
  return (
    <table className={s.table}>
      <AnalyticalProfitLossTableHead />
      <AnalyticalProfitLossTableBody />
    </table>
  );
}


const AnalyticalProfitLoss = ({ isReportPrepared }) => {
  if (isReportPrepared) {
    return (
      <section className={s.results}>
        <h3 className={s.results__title}>Аналитический отчет о финансовых результатах (прибылях и убытках)</h3>
        <AnalyticalProfitLossTable />
      </section>
    )
  }

  return <></>;
}

export default AnalyticalProfitLoss;