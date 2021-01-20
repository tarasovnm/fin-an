import s from './PropertyStructure.module.scss';

const PropertyStructure = ({ isReportPrepared }) => {
  if (isReportPrepared) {
    return (
      <section className={s.property}>
        <h3 className={s.property__title}>Структура имущества и источники его формирования</h3>
      </section>
    )
  }

  return <></>;
}

export default PropertyStructure;