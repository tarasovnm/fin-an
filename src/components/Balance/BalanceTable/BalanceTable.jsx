import s from './BalanceTable.module.scss';

const TableHeader = ({ years }) => {
  let columns = [];
  for (let i = 0; i <= years.length + 1; i++) {
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

const SectoinRow = ({ sectionStr, years }) => {
  return (
    <tr>
      <td className={s.table__str}>{sectionStr.name}</td>
      <td className={s.table__code}>{sectionStr.code}</td>
      {sectionStr.values.map((val, idx) => <td className={s.table__value} key={idx}>{val}</td>)}
    </tr>
  );
}

const SectionTotal = ({ totalData, sectionId, years }) => {
  return (
    <tr className={s.table__sectionTotal}>
      <td>ИТОГО по разделу {sectionId}</td>
      <td className={s.table__code}>{totalData.code}</td>
      {totalData.values.map((val, idx) => <td className={s.table__value} key={idx}>{val}</td>)}
    </tr>
  );
}

const BalanceSection = ({ sectionData, years }) => {
  return (
    <>
      <tr>
        <td className={s.table__section} colSpan={years.length + 2}>{sectionData.name}</td>
      </tr>
      {sectionData.data.map(sectionStr => <SectoinRow sectionStr={sectionStr} key={sectionStr.code} years={years} />)}
      <SectionTotal totalData={sectionData.total} sectionId={sectionData.id} years={years} />
    </>
  );
}

const PartTotal = ({ totalData, years }) => {
  return (
    <tr className={s.table__partTotal}>
      <td>БАЛАНС</td>
      <td className={s.table__code}>{totalData.code}</td>
      {totalData.values.map((val, idx) => <td className={s.table__value} key={idx}>{val}</td>)}
    </tr>
  );
}

const TablePart = ({ partData, name, years }) => {
  return (
    <>
      <tr>
        <td className={s.table__part} colSpan={years.length + 2}>{name}</td>
      </tr>
      {partData.sections.map(section => <BalanceSection sectionData={section} years={years} key={section.id} />)}
      <PartTotal totalData={partData.total} years={years} />
    </>
  );
}

const BalanceTable = ({ tableData, analysisPeriod }) => {
  let numOfYears = analysisPeriod.end - analysisPeriod.start;

  let years = [];
  let i = numOfYears;

  while (i >= 0) {
    years.push(analysisPeriod.start + i);
    i--;
  }

  return (
    <table className={s.table}>
      <TableHeader years={years} />
      <tbody>
        <TablePart partData={tableData.active} name="АКТИВ" years={years} />
        <TablePart partData={tableData.passive} name="ПАССИВ" years={years} />
      </tbody>
    </table>
  )
}

export default BalanceTable;