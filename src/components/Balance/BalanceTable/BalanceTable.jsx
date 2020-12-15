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
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
        </tr>
        </thead>
    );
}

const SectoinRow = ({sectionStr}) => {
    return (
        <tr>
            <td>{sectionStr.name}</td>
            <td>{sectionStr.code}</td>
            {sectionStr.values.map(val => <td>{val}</td>)}
        </tr>
    );
}

const BalanceSection = ({sectionData}) => {
    return (
        <>
            <tr>
                <td colSpan="5">{sectionData.name}</td>
            </tr>
            {sectionData.data.map(sectionStr => <SectoinRow sectionStr={sectionStr} />)}
        </>
    );
}

const TablePart = ({partData, name}) => {
    return (
        <>
            <tr>
                <td colSpan="5">{name}</td>
            </tr>
            {partData.sections.map(section => <BalanceSection sectionData={section}/>)}
        </>
    );
}

const BalanceTable = ({tableData}) => {
    return (
        <table border="1">
            <TableHeader/>
            <tbody>
            <TablePart partData={tableData.active} name="АКТИВ"/>
            <TablePart partData={tableData.passive} name="ПАССИВ"/>
            </tbody>
        </table>
    )
}

export default BalanceTable;