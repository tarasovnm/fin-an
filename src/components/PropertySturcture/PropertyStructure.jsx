import s from './PropertyStructure.module.scss';

const PropertyStructureTableHead = () => {
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

const PropertyStructureTableBody = () => {
  return (
    <tbody>
      <tr>
        <td colSpan="8">Актив</td>
      </tr>
      <tr>
        <td>1. Внеоборотные активы</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>

      <tr>
        <td colSpan="8">Пассив</td>
      </tr>
      <tr>
        <td>1. Собственный капитал </td>
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

const PropertyStructureTable = () => {
  return (
    <table className={s.table}>
      <PropertyStructureTableHead />
      <PropertyStructureTableBody />
    </table>
  );
}

const PropertyStructure = ({ isReportPrepared }) => {
  if (isReportPrepared) {
    return (
      <section className={s.property}>
        <h3 className={s.property__title}>Структура имущества и источники его формирования</h3>
        <PropertyStructureTable />
      </section>
    )
  }

  return <></>;
}

export default PropertyStructure;