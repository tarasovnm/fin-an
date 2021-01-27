import s from './FinancialStability.module.scss';


const FinancialStabilityTableHead = () => {
  return (
    <thead>
      <tr>
        <th rowSpan="2">Показатель</th>
        <th colSpan="3">Значение показателя</th>
        <th>Изменение показателя</th>
        <th rowSpan="2">Описание показателя и его нормативное значение</th>
      </tr>

      <tr>
        <th>31.12.2017</th>
        <th>31.12.2018</th>
        <th>31.12.2019</th>
        <th>(гр.6-гр.2)</th>
      </tr>

      <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
        <td>6</td>
      </tr>
    </thead>
  );
}

const FinancialStabilityTableBody = () => {
  return (
    <tbody>
      <tr>
        <td>1. Коэффициент автономии</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>2. Коэффициент финансового левериджа</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>3. Коэффициент обеспеченности собственными оборотными средствами </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  );
}

const FinancialStabilityTable = () => {
  return (
    <table className={s.table}>
      <FinancialStabilityTableHead />
      <FinancialStabilityTableBody />
    </table>
  );
}


const FinancialStability = ({ isReportPrepared }) => {
  if (isReportPrepared) {
    return (
      <section className={s.stability}>
        <h3 className={s.stability__title}>Основные показатели финансовой устойчивости</h3>
        <FinancialStabilityTable />
      </section>
    )
  }

  return <></>;
}

export default FinancialStability;