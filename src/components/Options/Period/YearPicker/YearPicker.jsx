import s from "./YearPicker.module.scss";

const YearPicker = () => {
    return (
        <div className={s.yearPicker}>
            <button className={s.yearPicker__btn}>
                <span className="material-icons">remove</span>
            </button>
            <div className={s.yearPicker__value}>2018</div>
            <button className={s.yearPicker__btn}>
                <span className="material-icons">add</span>
            </button>
        </div>
    );
}

export default YearPicker;