import s from './FinancialStability.module.scss';

const FinancialStability = ({ isReportPrepared }) => {
  if (isReportPrepared) {
    return (
      <section className={s.stability}>
        <h3 className={s.stability__title}>Основные показатели финансовой устойчивости</h3>
      </section>
    )
  }

  return <></>;
}

export default FinancialStability;