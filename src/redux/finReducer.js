const MAX_PERIOD_LENGTH = 5;

const CHANGE_PERIOD_START = 'CHANGE_PERIOD_START';
const CHANGE_PERIOD_END = 'CHANGE_PERIOD_END';
const COMPANY_NAME_CHANGED = 'COMPANY_NAME_CHANGED';

const initialState = {
  companyName: null,
  analysisPeriod: {
    start: 2018,
    end: 2020
  },
  balanceData: {
    active: {
      sections: [
        {
          id: "I",
          name: "ВНЕОБОРОТНЫЕ АКТИВЫ",
          data: [
            {
              name: "Нематериальные активы",
              code: 1110,
              values: [0, 0, 0]
            },
            {
              name: "Результаты исследований и разработок",
              code: 1120,
              values: [0, 0, 0]
            },
            {
              name: "Нематериальные поисковые активы",
              code: 1130,
              values: [0, 0, 0]
            },
            {
              name: "Материальные поисковые активы",
              code: 1140,
              values: [0, 0, 0]
            },
            {
              name: "Основные средства",
              code: 1150,
              values: [0, 0, 0]
            },
            {
              name: "Доходные вложения в материальные ценности",
              code: 1160,
              values: [0, 0, 0]
            },
            {
              name: "Финансовые вложения",
              code: 1170,
              values: [0, 0, 0]
            },
            {
              name: "Отложенные налоговые активы",
              code: 1180,
              values: [0, 0, 0]
            },
            {
              name: "Прочие внеоборотные активы",
              code: 1190,
              values: [0, 0, 0]
            },
          ],
          total: {
            code: 1100,
            values: [0, 0, 0]
          }
        },
        {
          id: "II",
          name: "ОБОРОТНЫЕ АКТИВЫ",
          data: [
            {
              name: "Запасы",
              code: 1210,
              values: [0, 0, 0]
            },
            {
              name: "Налог на добавленную стоимость по приобретенным ценностям",
              code: 1220,
              values: [0, 0, 0]
            },
            {
              name: "Дебиторская задолженность",
              code: 1230,
              values: [0, 0, 0]
            },
            {
              name: "Финансовые вложения (за исключением денежных эквивалентов)",
              code: 1240,
              values: [0, 0, 0]
            },
            {
              name: "Денежные средства и денежные эквиваленты",
              code: 1250,
              values: [0, 0, 0]
            },
            {
              name: "Прочие оборотные активы",
              code: 1260,
              values: [0, 0, 0]
            },
          ],
          total: {
            code: 1200,
            values: [0, 0, 0]
          }
        }
      ],
      total: {
        code: 1600,
        values: [0, 0, 0]
      }
    },
    passive: {
      sections: [
        {
          id: "III",
          name: "КАПИТАЛ И РЕЗЕРВЫ",
          data: [
            {
              name: "Уставный капитал (складочный капитал, уставный фонд, вклады товарищей)",
              code: 1310,
              values: [0, 0, 0]
            },
            {
              name: "Собственные акции, выкупленные у акционеров",
              code: 1320,
              values: [0, 0, 0]
            },
            {
              name: "Переоценка внеоборотных активов",
              code: 1340,
              values: [0, 0, 0]
            },
            {
              name: "Добавочный капитал (без переоценки)",
              code: 1350,
              values: [0, 0, 0]
            },
            {
              name: "Резервный капитал",
              code: 1360,
              values: [0, 0, 0]
            },
            {
              name: "Нераспределенная прибыль (непокрытый убыток)",
              code: 1370,
              values: [0, 0, 0]
            },
          ],
          total: {
            code: 1300,
            values: [0, 0, 0]
          }
        },
        {
          id: "IV",
          name: "ДОЛГОСРОЧНЫЕ ОБЯЗАТЕЛЬСТВА",
          data: [
            {
              name: "Заемные средства",
              code: 1410,
              values: [0, 0, 0]
            },
            {
              name: "Отложенные налоговые обязательства",
              code: 1420,
              values: [0, 0, 0]
            },
            {
              name: "Оценочные обязательства",
              code: 1430,
              values: [0, 0, 0]
            },
            {
              name: "Прочие долгосрочные обязательства",
              code: 1450,
              values: [0, 0, 0]
            },
          ],
          total: {
            code: 1400,
            values: [0, 0, 0]
          }
        },
        {
          id: "V",
          name: "КРАТКОСРОЧНЫЕ ОБЯЗАТЕЛЬСТВА",
          data: [
            {
              name: "Заемные средства",
              code: 1510,
              values: [0, 0, 0]
            },
            {
              name: "Кредиторская задолженность",
              code: 1520,
              values: [0, 0, 0]
            },
            {
              name: "Доходы будущих периодов",
              code: 1530,
              values: [0, 0, 0]
            },
            {
              name: "Оценочные обязательства",
              code: 1540,
              values: [0, 0, 0]
            },
            {
              name: "Прочие краткосрочные обязательства",
              code: 1550,
              values: [0, 0, 0]
            },
          ],
          total: {
            code: 1500,
            values: [0, 0, 0]
          }
        }
      ],
      total: {
        code: 1700,
        values: [0, 0, 0]
      }
    }
  }
}

const finReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMPANY_NAME_CHANGED:
      return {
        ...state,
        companyName: action.newText
      };

    case CHANGE_PERIOD_START:
      let oldStartValue = state.analysisPeriod.start;
      let newStartValue = state.analysisPeriod.start + action.delta;

      if (newStartValue <= 2010 || newStartValue >= state.analysisPeriod.end || newStartValue <= state.analysisPeriod.end - MAX_PERIOD_LENGTH) {
        newStartValue = oldStartValue;
      }

      return {
        ...state,
        analysisPeriod: {
          start: newStartValue,
          end: state.analysisPeriod.end
        }
      };

    case CHANGE_PERIOD_END:
      let oldEndValue = state.analysisPeriod.end;
      let newEndValue = state.analysisPeriod.end + action.delta;
      if (newEndValue > 2020 || newEndValue <= state.analysisPeriod.start || newEndValue >= state.analysisPeriod.start + MAX_PERIOD_LENGTH) {
        newEndValue = oldEndValue;
      }

      return {
        ...state,
        analysisPeriod: {
          start: state.analysisPeriod.start,
          end: newEndValue
        }
      };

    default:
      return state;
  }

}

export const updateCompanyNameAC = (text) => ({type: COMPANY_NAME_CHANGED, newText: text});
export const changePeriodStartAC = (delta) => ({type: CHANGE_PERIOD_START, delta});
export const changePeriodEndAC = (delta) => ({type: CHANGE_PERIOD_END, delta});

export default finReducer;