import s from './BalanceTable.module.scss';

const TableHeader = ({ analysisPeriod }) => {
  let numOfYears = analysisPeriod.end - analysisPeriod.start;

  let years = [];
  for (let i = 0; i <= numOfYears; i++) {
    years.push(analysisPeriod.start + i);
  }

  let columns = [];
  for (let i = 0; i <= numOfYears + 2; i++) {
    columns.push(i + 1);
  }

  return (
    <thead>
      <tr>
        <th>Показатель</th>
        <th>Код показателя</th>
        {years.map(year => <th key={year}>{'31.12.' + year}</th>)}
      </tr>
      <tr>
        {columns.map(col => <td className={s.table__colNum} key={col}>{col}</td>)}
      </tr>
    </thead>
  );
}

const SectoinRow = ({ sectionStr }) => {
  let years = Object.keys(sectionStr.values);

  return (
    <tr>
      <td className={s.table__str}>{sectionStr.name}</td>
      <td className={s.table__code}>{sectionStr.code}</td>
      {years.map(year => <td className={s.table__value} key={year}>{sectionStr.values[year]}</td>)}
    </tr>
  );
}

const SectionTotal = ({ totalData, sectionId }) => {
  let years = Object.keys(totalData.values);

  return (
    <tr className={s.table__sectionTotal}>
      <td>ИТОГО по разделу {sectionId}</td>
      <td className={s.table__code}>{totalData.code}</td>
      {years.map(year => <td className={s.table__value} key={year}>{totalData.values[year]}</td>)}
    </tr>
  );
}

const BalanceSection = ({ sectionData, numOfYears }) => {
  return (
    <>
      <tr>
        <td className={s.table__section} colSpan={numOfYears + 3}>{sectionData.name}</td>
      </tr>
      {sectionData.data.map(sectionStr => <SectoinRow sectionStr={sectionStr} key={sectionStr.code} />)}
      <SectionTotal totalData={sectionData.total} sectionId={sectionData.id} />
    </>
  );
}

const PartTotal = ({ totalData }) => {
  let years = Object.keys(totalData.values);

  return (
    <tr className={s.table__partTotal}>
      <td>БАЛАНС</td>
      <td className={s.table__code}>{totalData.code}</td>
      {years.map(year => <td className={s.table__value} key={year}>{totalData.values[year]}</td>)}
    </tr>
  );
}

const TablePart = ({ partData, name, numOfYears }) => {
  return (
    <>
      <tr>
        <td className={s.table__part} colSpan={numOfYears + 3}>{name}</td>
      </tr>
      {partData.sections.map(section => <BalanceSection sectionData={section} numOfYears={numOfYears} key={section.id} />)}
      <PartTotal totalData={partData.total} />
    </>
  );
}

const BalanceTable = ({ tableData, analysisPeriod }) => {
  let numOfYears = analysisPeriod.end - analysisPeriod.start;

  return (
    <table className={s.table}>
      <TableHeader analysisPeriod={analysisPeriod} />
      <tbody>
        <TablePart partData={tableData.active} name="АКТИВ" numOfYears={numOfYears} />
        <TablePart partData={tableData.passive} name="ПАССИВ" numOfYears={numOfYears} />
      </tbody>
    </table>
  )
}

export default BalanceTable;