import s from './BalanceTable.module.scss';

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Показатель</th>
        <th>Код показателя</th>
        <th>31.12.2020</th>
        <th>31.12.2019</th>
        <th>31.12.2018</th>
      </tr>
      <tr>
        <td className={s.table__colNum}>1</td>
        <td className={s.table__colNum}>2</td>
        <td className={s.table__colNum}>3</td>
        <td className={s.table__colNum}>4</td>
        <td className={s.table__colNum}>5</td>
      </tr>
    </thead>
  );
}

const SectoinRow = ({ sectionStr }) => {
  return (
    <tr>
      <td className={s.table__str}>{sectionStr.name}</td>
      <td className={s.table__code}>{sectionStr.code}</td>
      {sectionStr.values.map(val => <td className={s.table__value}>{val}</td>)}
    </tr>
  );
}

const SectionTotal = ({ totalData, sectionId }) => {
  return (
    <tr className={s.table__sectionTotal}>
      <td>ИТОГО по разделу {sectionId}</td>
      <td className={s.table__code}>{totalData.code}</td>
      {totalData.values.map(val => <td className={s.table__value}>{val}</td>)}
    </tr>
  );
}

const BalanceSection = ({ sectionData }) => {
  return (
    <>
      <tr>
        <td className={s.table__section} colSpan="5">{sectionData.name}</td>
      </tr>
      {sectionData.data.map(sectionStr => <SectoinRow sectionStr={sectionStr} />)}
      <SectionTotal totalData={sectionData.total} sectionId={sectionData.id} />
    </>
  );
}

const PartTotal = ({ totalData }) => {
  return (
    <tr className={s.table__partTotal}>
      <td>БАЛАНС</td>
      <td className={s.table__code}>{totalData.code}</td>
      {totalData.values.map(val => <td className={s.table__value}>{val}</td>)}
    </tr>
  );
}

const TablePart = ({ partData, name }) => {
  return (
    <>
      <tr>
        <td className={s.table__part} colSpan="5">{name}</td>
      </tr>
      {partData.sections.map(section => <BalanceSection sectionData={section} />)}
      <PartTotal totalData={partData.total} />
    </>
  );
}

const BalanceTable = ({ tableData }) => {
  return (
    <table className={s.table}>
      <TableHeader />
      <tbody>
        <TablePart partData={tableData.active} name="АКТИВ" />
        <TablePart partData={tableData.passive} name="ПАССИВ" />
      </tbody>
    </table>
  )
}

export default BalanceTable;