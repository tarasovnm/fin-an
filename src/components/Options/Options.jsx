import React from 'react';
import s from "./Options.module.scss";
import Period from "./Period/Period";

const Options = ({companyName, analysisPeriod, updateCompanyName, changePeriodStart, changePeriodEnd}) => {

    let companyNameElement = React.createRef();

    const companyNameChanged = () => {
        const text = companyNameElement.current.value;
        updateCompanyName(text);
    }

    return (
        <div className={s.options}>
            <div className={s.options__label}>
                <label htmlFor="name">Наименование организации:</label>
            </div>
            <div className={s.options__data}>
                <input type="text" id="name" value={companyName ? companyName : ''} ref={companyNameElement} onChange={companyNameChanged} />
            </div>
            <div className={s.options__label}>
                <label htmlFor="name">Анализируемый период:</label>
            </div>
            <div className={s.options__data}>
                <Period analysisPeriod={analysisPeriod} changePeriodStart={changePeriodStart} changePeriodEnd={changePeriodEnd} />
            </div>
        </div>
    );
}

export default Options;