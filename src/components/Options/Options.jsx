import s from "./Options.module.scss";
import Period from "./Period/Period";

const Options = () => {
    return (
        <div className={s.options}>
            <div className={s.options__label}>
                <label htmlFor="name">Наименование организации:</label>
            </div>
            <div className={s.options__data}>
                <input type="text" id="name"/>
            </div>
            <div className={s.options__label}>
                <label htmlFor="name">Анализируемый период:</label>
            </div>
            <div className={s.options__data}>
                <Period />
            </div>
        </div>
    );
}

export default Options;