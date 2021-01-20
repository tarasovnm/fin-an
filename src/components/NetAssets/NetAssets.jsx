import s from './NetAssets.module.scss';

const NetAssets = ({ isReportPrepared }) => {
  if (isReportPrepared) {
    return (
      <section className={s.assets}>
        <h3 className={s.assets__title}>Чистые активы организации</h3>
      </section>
    )
  }

  return <></>;
}

export default NetAssets;