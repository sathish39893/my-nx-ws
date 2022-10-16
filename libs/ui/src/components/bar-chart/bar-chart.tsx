import Chart from 'react-apexcharts';

type ChartProps = {
  chartData: any[];
  chartOptions: any;
};

const BarChart = ({ chartData = [], chartOptions = {} }: ChartProps) => {
  return (
    <Chart
      options={chartOptions}
      series={chartData}
      type="bar"
      width="100%"
      height="100%"
    />
  );
};

export default BarChart;
