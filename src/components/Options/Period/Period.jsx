import s from "./Period.module.scss";
import YearPicker from "./YearPicker/YearPicker";

const Period = ({analysisPeriod, changePeriodStart, changePeriodEnd}) => {

  return (
    <div className={s.period}>
      <YearPicker value={analysisPeriod.start} changeValue={changePeriodStart} />
      <span className="material-icons">remove</span>
      <YearPicker value={analysisPeriod.end} changeValue={changePeriodEnd} />
    </div>
  );
}

export default Period;