import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChartState, ChartSeries } from './types';

const initialState: ChartState = {
  chartOne: {
    series: [
      {
        name: 'Product One',
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 45],
      },
      {
        name: 'Product Two',
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 51],
      },
    ],
  },
  chartTwo: {
    series: [
      {
        name: 'Sales',
        data: [44, 55, 41, 67, 22, 43, 65],
      },
      {
        name: 'Revenue',
        data: [13, 23, 20, 8, 13, 27, 15],
      },
    ],
  },
  chartThree: {
    series: [44, 55, 13, 43],
  },
};

const chartsSlice = createSlice({
  name: 'charts',
  initialState,
  reducers: {
    updateChartOne(state, action: PayloadAction<ChartSeries[]>) {
      state.chartOne.series = action.payload;
    },
    updateChartTwo(state, action: PayloadAction<ChartSeries[]>) {
      state.chartTwo.series = action.payload;
    },
    updateChartThree(state, action: PayloadAction<number[]>) {
      state.chartThree.series = action.payload;
    },
    resetChart(state) {
      return initialState;
    },
  },
});

export const { updateChartOne, updateChartTwo, updateChartThree, resetChart } = chartsSlice.actions;

export default chartsSlice.reducer;