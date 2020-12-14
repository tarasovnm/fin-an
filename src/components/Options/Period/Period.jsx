import s from "./Perido.module.scss";
import YearPicker from "./YearPicker/YearPicker";

const Period = () => {
    return (
        <div className={s.period}>
            <YearPicker />
            <span className="material-icons">remove</span>
            <YearPicker />
        </div>
    );
}

export default Period;