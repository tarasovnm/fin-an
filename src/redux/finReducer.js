import { createBalanceState, changeStartColumn, changeEndColumn, changeCellValue } from './balance-table';
import getExampleState from './exampleState';

const MAX_PERIOD_LENGTH = 5;

const CHANGE_PERIOD_START = 'CHANGE_PERIOD_START';
const CHANGE_PERIOD_END = 'CHANGE_PERIOD_END';
const COMPANY_NAME_CHANGED = 'COMPANY_NAME_CHANGED';
const CELL_VALUE_CHANGED = 'CELL_VALUE_CHANGED';
const CLEAR_INPUT_DATA = 'CLEAR_INPUT_DATA';
const LOAD_EXAMPLE_DATA = 'LOAD_EXAMPLE_DATA';

const initialState = {
  companyName: null,
  analysisPeriod: {
    start: 2018,
    end: 2020
  },
  balanceData: createBalanceState(2018, 2020)
}

// const exampleState = getExampleState();

const finReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMPANY_NAME_CHANGED:
      return {
        ...state,
        companyName: action.newText
      };

    case CHANGE_PERIOD_START:
      let startDelta = action.delta;
      let newStartValue = state.analysisPeriod.start + startDelta;

      if (newStartValue <= 2010 || newStartValue >= state.analysisPeriod.end || newStartValue <= state.analysisPeriod.end - MAX_PERIOD_LENGTH) {
        startDelta = 0;
      }

      newStartValue = state.analysisPeriod.start + startDelta;

      return {
        ...state,
        analysisPeriod: {
          start: newStartValue,
          end: state.analysisPeriod.end
        },
        balanceData: startDelta ? changeStartColumn(state.balanceData, startDelta) : state.balanceData
      };

    case CHANGE_PERIOD_END:
      let endDelta = action.delta;
      let newEndValue = state.analysisPeriod.end + endDelta;


      if (newEndValue > 2020 || newEndValue <= state.analysisPeriod.start || newEndValue >= state.analysisPeriod.start + MAX_PERIOD_LENGTH) {
        endDelta = 0;
      }

      newEndValue = state.analysisPeriod.end + endDelta;

      return {
        ...state,
        analysisPeriod: {
          start: state.analysisPeriod.start,
          end: newEndValue
        },
        balanceData: endDelta ? changeEndColumn(state.balanceData, action.delta) : state.balanceData
      };

    case CELL_VALUE_CHANGED:
      const newCellValue = parseInt(action.data.value)
      if (newCellValue) {
        return {
          ...state,
          balanceData: changeCellValue(state.balanceData, action.data.code, action.data.index, newCellValue)
        }
      }
      return state;

    case CLEAR_INPUT_DATA:
      console.log('Пришел запрос на очистку введенных данных');
      return {
        companyName: null,
        analysisPeriod: {
          start: 2018,
          end: 2020
        },
        balanceData: createBalanceState(2018, 2020)
      };

    case LOAD_EXAMPLE_DATA:
      console.log('Пришел запрос на загрузку данных организации-примера')
      return getExampleState();

    default:
      return state;
  }

}

export const updateCompanyNameAC = (text) => ({ type: COMPANY_NAME_CHANGED, newText: text });
export const changePeriodStartAC = (delta) => ({ type: CHANGE_PERIOD_START, delta });
export const changePeriodEndAC = (delta) => ({ type: CHANGE_PERIOD_END, delta });
export const cellValueChangedAC = (data) => ({ type: CELL_VALUE_CHANGED, data });
export const clearInputDataAC = () => ({ type: CLEAR_INPUT_DATA });
export const loadExampleDataAC = () => ({ type: LOAD_EXAMPLE_DATA });

export default finReducer;