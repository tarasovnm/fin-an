import s from './Calculate.module.scss';

const Calculate = ({ isReportPrepared, prepareReport }) => {
  return (
    <section className={s.calculate}>
      <button className={s.calculate__btn}
        onClick={prepareReport}
        disabled={isReportPrepared}>Построить отчет</button>
    </section>
  );
}


export default Calculate;