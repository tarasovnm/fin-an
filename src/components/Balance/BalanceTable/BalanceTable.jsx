import React from 'react';
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

const Cell = ({ code, index, value, cellValueChanged }) => {

  const onCellChange = (e) => {
    const target = e.target;
    cellValueChanged({
      code: target.dataset.code,
      index: target.dataset.index,
      value: target.value
    });
  }

  return (
    <td className={s.table__cell}>
      <input className={s.table__input}
        type="text"
        value={value}
        onChange={onCellChange}
        data-code={code}
        data-index={index}>
      </input>
    </td>
  );
}

const SectoinRow = ({ sectionStr, cellValueChanged }) => {
  return (
    <tr>
      <td className={s.table__str}>{sectionStr.name}</td>
      <td className={s.table__code}>{sectionStr.code}</td>
      {sectionStr.values.map((val, idx) => <Cell value={val} key={idx} code={sectionStr.code} index={idx} cellValueChanged={cellValueChanged} />)}
    </tr>
  );
}

const SectionTotal = ({ totalData, sectionId, years }) => {
  return (
    <tr className={s.table__sectionTotal}>
      <td>ИТОГО по разделу {sectionId}</td>
      <td className={s.table__code}>{totalData.code}</td>
      {totalData.values.map((val, idx) => <td className={s.table__cell} key={idx}>{val}</td>)}
    </tr>
  );
}

const BalanceSection = ({ sectionData, years, cellValueChanged }) => {
  return (
    <>
      <tr>
        <td className={s.table__section} colSpan={years.length + 2}>{sectionData.id + '. ' + sectionData.name}</td>
      </tr>
      {sectionData.data.map(sectionStr => <SectoinRow sectionStr={sectionStr} key={sectionStr.code} cellValueChanged={cellValueChanged} />)}
      <SectionTotal totalData={sectionData.total} sectionId={sectionData.id} years={years} />
    </>
  );
}

const PartTotal = ({ totalData, years }) => {
  return (
    <tr className={s.table__partTotal}>
      <td>БАЛАНС</td>
      <td className={s.table__code}>{totalData.code}</td>
      {totalData.values.map((val, idx) => <td className={s.table__cell} key={idx}>{val}</td>)}
    </tr>
  );
}

const TablePart = ({ partData, name, years, cellValueChanged }) => {
  return (
    <>
      <tr>
        <td className={s.table__part} colSpan={years.length + 2}>{name}</td>
      </tr>
      {partData.sections.map(section => <BalanceSection sectionData={section} years={years} key={section.id} cellValueChanged={cellValueChanged} />)}
      <PartTotal totalData={partData.total} years={years} />
    </>
  );
}

const BalanceTable = ({ tableData, analysisPeriod, cellValueChanged }) => {

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
        <TablePart
          partData={tableData.active}
          name="АКТИВ"
          years={years}
          cellValueChanged={cellValueChanged} />
        <TablePart
          partData={tableData.passive}
          name="ПАССИВ"
          years={years}
          cellValueChanged={cellValueChanged} />
      </tbody>
    </table>
  )
}

export default BalanceTable;