import s from "./Perido.module.scss";
import YearPicker from "./YearPicker/YearPicker";

const Period = ({ analysisPeriod }) => {

  const changePeriodStart = () => {
    console.log('Изменено начало периода');
  }

  return (
    <div className={s.period}>
      <YearPicker value={analysisPeriod.start} changeValue={changePeriodStart} />
      <span className="material-icons">remove</span>
      <YearPicker value={analysisPeriod.end} />
    </div>
  );
}

export default Period;