import React, { useEffect, useRef } from 'react';
import { Chart, CategoryScale, LinearScale, BarController, BarElement, Legend, Title, Tooltip } from 'chart.js';

import './index.css';

Chart.register(CategoryScale, LinearScale, BarController, BarElement, Legend, Title, Tooltip);

const ChartBar = ({ title, data }) => {
  const chartRef = useRef(null);
  let chartInstance = null; // chartInstance 변수 선언
  console.log(data);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // 이전 차트 파괴
    if (Chart.getChart(ctx)) {
      Chart.getChart(ctx).destroy();
    }

    const recentData = data.slice(-7);

    // Chart 객체 생성 및 설정
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: recentData.map(([year, counts]) => year),
        datasets: [
          {
            label: '난이도 하',
            data: recentData.map(([year, counts]) => counts.하),
            borderRadius: '5%',
            backgroundColor: 'rgba(255, 127, 91, 0.8)',
            stack: 'stack',
          },
          {
            label: '난이도 상',
            data: recentData.map(([year, counts]) => counts.상),
            borderRadius: '5px',
            backgroundColor: 'rgba(255, 190, 173, 0.8)',
            stack: 'stack',
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        scales: {
          x: {
            ticks: {
              beginAtZero: true,
            },
          },
          y: {
            ticks: {
              stepSize: 1,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            displayColors: true,
            backgroundColor: 'rgb(80, 24, 10, 0.8)',
          },
        },
      },
    });

    // legend 설정 유지
    chartRef.current.chartInstance = chartInstance;
  }, [data]);

  return (
    <div className="chartContainer">
      <div className="chartTitle">{title}</div>
      <div className="chartLegend">
        <div className="chartLegendItem">
          <div className="chartLegendColor" style={{ backgroundColor: '#ff7f5b' }}></div>
          <div className="chartLegendLabel">난이도 상</div>
        </div>
        <div className="chartLegendItem">
          <div className="chartLegendColor" style={{ backgroundColor: '#ffbead' }}></div>
          <div className="chartLegendLabel">난이도 하</div>
        </div>
      </div>
      <canvas className='chartBox' ref={chartRef}></canvas>
    </div>
  );
};

export default ChartBar;