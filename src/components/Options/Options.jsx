import React from 'react';
import s from "./Options.module.scss";
import Period from "./Period/Period";

const Options = ({ companyName, analysisPeriod, updateCompanyName,
  changePeriodStart, changePeriodEnd, clearInputData, loadExampleData }) => {

  let companyNameElement = React.createRef();

  const companyNameChanged = () => {
    const text = companyNameElement.current.value;
    updateCompanyName(text);
  }

  return (
    <section className={s.options}>
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
      <div className={s.options__buttons}>
        <button className={s.options__btn} onClick={clearInputData}>Очистить</button>
        <button className={s.options__btn} onClick={loadExampleData}>Загрузить данные организации-примера</button>
      </div>
    </section>
  );
}

export default Options;