export interface ChartSeries {
    name: string;
    data: number[];
  }
  
  export interface ChartState {
    chartOne: {
      series: ChartSeries[];
    };
    chartTwo: {
      series: ChartSeries[];
    };
    chartThree: {
      series: number[];
    };
  }
  