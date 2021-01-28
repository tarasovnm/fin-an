export default function createReport(state) {
  return {
    analyticalBalance: prepareAnalyticalBalance(state)
  }
}

function prepareAnalyticalBalance(state) {
  const balance = state.balanceData;
  const balanceTotal = [...state.balanceData.active.total.values].reverse();
  let analyticalBalance = {
    sections: [],
    total: {}
  };

  Object.keys(balance).forEach(part => {
    balance[part].sections.forEach(section => {
      let analyticalSection = {
        id: section.id,
        name: section.name,
        data: []
      }

      // Добавляем в массив data объект с итого по секции
      let totalValues = [...section.total.values].reverse();
      let sectionTotal = {
        name: section.id + '. ' + section.name,
        values: totalValues,
        absoluteChange: estimateAbsoluteChange(totalValues),
        relativeChange: estimateRelativeChange(totalValues),
        weight: estimateWeight(totalValues, balanceTotal)
      };
      analyticalSection.data.push(sectionTotal);

      // Добавляем в массив data объекты по каждому показателю
      section.data.forEach(row => {
        let rowValues = [...row.values].reverse();
        let analyticalRow = {
          name: row.name,
          values: rowValues,
          absoluteChange: estimateAbsoluteChange(rowValues),
          relativeChange: estimateRelativeChange(rowValues),
          weight: estimateWeight(rowValues, balanceTotal)
        }
        analyticalSection.data.push(analyticalRow);
      });
      analyticalBalance.sections.push(analyticalSection);
    });

    analyticalBalance.total = {
      values: balanceTotal,
      absoluteChange: estimateAbsoluteChange(balanceTotal),
      relativeChange: estimateRelativeChange(balanceTotal),
    }
  });

  console.log(analyticalBalance);

  return analyticalBalance;
}

function estimateAbsoluteChange(values) {
  let result = [0];
  for (let i = 1; i < values.length; i++) {
    result.push(values[i] - values[i - 1]);
  }
  return result;
}

function estimateRelativeChange(values) {
  let result = [0];
  for (let i = 1; i < values.length; i++) {
    result.push((values[i] / values[i - 1]) - 1);
  }
  return result;
}

function estimateWeight(values, total) {
  let result = [];
  for (let i = 0; i < values.length; i++) {
    result.push((values[i] / total[i]));
  }
  return result;
}