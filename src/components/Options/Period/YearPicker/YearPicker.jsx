import s from "./YearPicker.module.scss";

const YearPicker = ({ value, changeValue }) => {

  const changeYear = (e) => {
    const target = e.target;
    const parent = target.parentElement;
    if (target.classList.contains('increse') || parent.classList.contains('increse')) {
      changeValue(1);
    } else if (target.classList.contains('decrese') || parent.classList.contains('decrese')) {
      changeValue(-1);
    }
  }

  return (
    <div className={s.yearPicker}>
      <button className={s.yearPicker__btn + " decrese"} onClick={changeYear}>
        <span className="material-icons">remove</span>
      </button>
      <div className={s.yearPicker__value}>{value}</div>
      <button className={s.yearPicker__btn + " increse"} onClick={changeYear}>
        <span className="material-icons">add</span>
      </button>
    </div>
  );
}

export default YearPicker;