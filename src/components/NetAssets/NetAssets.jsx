import s from './NetAssets.module.scss';

const NetAssetsTableHead = () => {
  return (
    <thead>
      <tr>
        <th rowSpan="3">Показатель</th>
        <th colSpan="5">Значение показателя</th>
        <th colSpan="2">Изменение за</th>
      </tr>

      <tr>
        <th colSpan="3">в тыс. руб.</th>
        <th colSpan="2">в % к валюте баланса</th>
        <th>тыс. руб.</th>
        <th>± %</th>
      </tr>

      <tr>
        <th>31.12.2017</th>
        <th>31.12.2018</th>
        <th>31.12.2019</th>
        <th>на начало анализируемого периода (31.12.2017)</th>
        <th>на конец анализируемого периода (31.12.2019)</th>
        <th>(гр.6-гр.2)</th>
        <th>((гр.6-гр.2) : гр.2)</th>
      </tr>

      <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
        <td>6</td>
        <td>7</td>
        <td>8</td>
      </tr>
    </thead>
  );
}

const NetAssetsTableBody = () => {
  return (
    <tbody>
      <tr>
        <td>1.Чистые активы</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>2. Уставный капитал</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>3. Превышение чистых активов над уставным капиталом (стр.1-стр.2)</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  );
}

const NetAssetsTable = () => {
  return (
    <table className={s.table}>
      <NetAssetsTableHead />
      <NetAssetsTableBody />
    </table>
  );
}


const NetAssets = ({ isReportPrepared }) => {
  if (isReportPrepared) {
    return (
      <section className={s.assets}>
        <h3 className={s.assets__title}>Чистые активы организации</h3>
        <NetAssetsTable />
      </section>
    )
  }

  return <></>;
}

export default NetAssets;