import React from 'react';
import ReactECharts from 'echarts-for-react';

export const MonthlyTrendChart: React.FC = () => {
  const option = {
    backgroundColor: 'transparent',
    tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
    legend: { data: ['毛利额', '毛利率'], textStyle: { color: '#a0a0a0' }, right: 10 },
    grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
    xAxis: [
      {
        type: 'category',
        data: ['2025-02', '2025-03', '2025-04', '2025-05', '2025-06', '2025-07'],
        axisLine: { lineStyle: { color: '#3a3f4b' } },
        axisLabel: { color: '#a0a0a0' }
      }
    ],
    yAxis: [
      { type: 'value', name: '毛利额', axisLine: { show: false }, axisLabel: { color: '#a0a0a0', formatter: '{value}万' }, splitLine: { lineStyle: { color: '#3a3f4b', type: 'dashed' } } },
      { type: 'value', name: '毛利率', axisLine: { show: false }, axisLabel: { color: '#a0a0a0', formatter: '{value}%' }, splitLine: { show: false } }
    ],
    series: [
      { name: '毛利额', type: 'bar', barWidth: '40%', data: [80, 110, 100, 120, 136.24, 70], itemStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: '#e3b341' }, { offset: 1, color: '#b88a2d' }] } } },
      { name: '毛利率', type: 'line', yAxisIndex: 1, data: [25, 27, 26, 28, 28.15, 26], itemStyle: { color: '#4c8bf5' }, lineStyle: { width: 3 } }
    ]
  };
  return <ReactECharts option={option} style={{ height: '240px' }} />;
};

export const CategoryContributionChart: React.FC = () => {
  const option = {
    backgroundColor: 'transparent',
    tooltip: { trigger: 'item' },
    legend: { orient: 'horizontal', top: '5%', data: ['大类1', '大类2', '大类3', '大类4', '大类5'], textStyle: { color: '#a0a0a0' } },
    series: [
      {
        name: '毛利额贡献度', type: 'pie', radius: ['40%', '70%'], center: ['50%', '60%'],
        avoidLabelOverlap: false, label: { show: false },
        emphasis: { label: { show: true, fontSize: '14', fontWeight: 'bold', color: '#fff' } },
        data: [
          { value: 1048, name: '大类1', itemStyle: { color: '#e3b341' } },
          { value: 735, name: '大类2', itemStyle: { color: '#4c8bf5' } },
          { value: 580, name: '大类3', itemStyle: { color: '#3ba272' } },
          { value: 484, name: '大类4', itemStyle: { color: '#9a60b4' } },
          { value: 300, name: '大类5', itemStyle: { color: '#ea7ccc' } }
        ]
      }
    ]
  };
  return <ReactECharts option={option} style={{ height: '240px' }} />;
};

export const ClientTypeChart: React.FC = () => {
  const option = {
    backgroundColor: 'transparent',
    tooltip: { trigger: 'axis' },
    legend: { data: ['毛利额-核心', '毛利额-战略', '毛利额-中小', '毛利率-核心', '毛利率-战略', '毛利率-中小'], textStyle: { color: '#a0a0a0', fontSize: 10 }, bottom: 0, itemWidth: 10, itemHeight: 10 },
    grid: { left: '3%', right: '4%', bottom: '20%', containLabel: true },
    xAxis: { type: 'category', data: ['2025-02', '2025-03', '2025-04', '2025-05', '2025-06', '2025-07'], axisLine: { lineStyle: { color: '#3a3f4b' } }, axisLabel: { color: '#a0a0a0' } },
    yAxis: [
      { type: 'value', axisLabel: { color: '#a0a0a0' }, splitLine: { lineStyle: { color: '#3a3f4b', type: 'dashed' } } },
      { type: 'value', axisLabel: { color: '#a0a0a0' }, splitLine: { show: false } }
    ],
    series: [
      { name: '毛利额-核心', type: 'bar', data: [30, 45, 35, 50, 60, 40], itemStyle: { color: '#e3b341' } },
      { name: '毛利额-战略', type: 'bar', data: [20, 30, 25, 40, 50, 30], itemStyle: { color: '#4c8bf5' } },
      { name: '毛利额-中小', type: 'bar', data: [15, 20, 18, 25, 35, 20], itemStyle: { color: '#3ba272' } },
      { name: '毛利率-核心', type: 'line', yAxisIndex: 1, data: [28, 30, 29, 31, 32, 30], itemStyle: { color: '#e3b341' } },
      { name: '毛利率-战略', type: 'line', yAxisIndex: 1, data: [22, 25, 24, 26, 27, 25], itemStyle: { color: '#4c8bf5' } },
      { name: '毛利率-中小', type: 'line', yAxisIndex: 1, data: [18, 20, 19, 21, 22, 20], itemStyle: { color: '#3ba272' } }
    ]
  };
  return <ReactECharts option={option} style={{ height: '240px' }} />;
};

export const PurchaseTrendChart: React.FC = () => {
  const option = {
    backgroundColor: 'transparent',
    tooltip: { trigger: 'axis' },
    legend: { data: ['采购金额', '采购重量'], textStyle: { color: '#a0a0a0' }, right: 10 },
    grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
    xAxis: [
      {
        type: 'category',
        data: ['2025-02', '2025-03', '2025-04', '2025-05', '2025-06', '2025-07'],
        axisLine: { lineStyle: { color: '#3a3f4b' } },
        axisLabel: { color: '#a0a0a0' }
      }
    ],
    yAxis: [
      { type: 'value', name: '金额(万)', axisLine: { show: false }, axisLabel: { color: '#a0a0a0' }, splitLine: { lineStyle: { color: '#3a3f4b', type: 'dashed' } } },
      { type: 'value', name: '重量(吨)', axisLine: { show: false }, axisLabel: { color: '#a0a0a0' }, splitLine: { show: false } }
    ],
    series: [
      { name: '采购金额', type: 'bar', barWidth: '35%', data: [1200, 1350, 1280, 1420, 1560, 1380], itemStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: '#4c8bf5' }, { offset: 1, color: '#2d5cb8' }] } } },
      { name: '采购重量', type: 'line', yAxisIndex: 1, data: [8500, 9200, 8800, 9800, 10500, 9200], itemStyle: { color: '#e3b341' }, lineStyle: { width: 3 }, smooth: true }
    ]
  };
  return <ReactECharts option={option} style={{ height: '280px' }} />;
};

export const SupplierRankChart: React.FC = () => {
  const option = {
    backgroundColor: 'transparent',
    tooltip: { trigger: 'axis' },
    grid: { left: '3%', right: '4%', top: '10%', bottom: '3%', containLabel: true },
    xAxis: { type: 'value', axisLabel: { color: '#a0a0a0', formatter: '{value}万' }, splitLine: { lineStyle: { color: '#3a3f4b', type: 'dashed' } } },
    yAxis: {
      type: 'category',
      data: ['供应商E', '供应商D', '供应商C', '供应商B', '供应商A'],
      axisLine: { lineStyle: { color: '#3a3f4b' } },
      axisLabel: { color: '#a0a0a0' }
    },
    series: [
      {
        name: '采购金额',
        type: 'bar',
        data: [280, 350, 420, 560, 720],
        itemStyle: {
          color: (params: { dataIndex: number }) => {
            const colors = ['#3ba272', '#4c8bf5', '#e3b341', '#9a60b4', '#ea7ccc'];
            return colors[params.dataIndex];
          }
        },
        label: { show: true, position: 'right', color: '#a0a0a0', formatter: '{c}万' }
      }
    ]
  };
  return <ReactECharts option={option} style={{ height: '240px' }} />;
};

export const SalesProductTop5Chart: React.FC = () => {
  const option = {
    backgroundColor: 'transparent',
    tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
    grid: { left: '3%', right: '10%', top: '10%', bottom: '3%', containLabel: true },
    xAxis: {
      type: 'value',
      axisLabel: { color: '#a0a0a0', formatter: '{value}万' },
      splitLine: { lineStyle: { color: '#3a3f4b', type: 'dashed' } }
    },
    yAxis: {
      type: 'category',
      data: ['产品E', '产品D', '产品C', '产品B', '产品A'],
      axisLine: { lineStyle: { color: '#3a3f4b' } },
      axisLabel: { color: '#a0a0a0' }
    },
    series: [
      {
        name: '销售金额',
        type: 'bar',
        data: [180, 230, 310, 420, 560],
        itemStyle: {
          color: (params: { dataIndex: number }) => {
            const colors = ['#3ba272', '#4c8bf5', '#e3b341', '#9a60b4', '#ea7ccc'];
            return colors[params.dataIndex];
          }
        },
        label: { show: true, position: 'right', color: '#a0a0a0', formatter: '{c}万' }
      }
    ]
  };
  return <ReactECharts option={option} style={{ height: '240px' }} />;
};

export const SalesCustomerTop5Chart: React.FC = () => {
  const option = {
    backgroundColor: 'transparent',
    tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
    grid: { left: '3%', right: '12%', top: '10%', bottom: '3%', containLabel: true },
    xAxis: {
      type: 'value',
      axisLabel: { color: '#a0a0a0', formatter: '{value}万' },
      splitLine: { lineStyle: { color: '#3a3f4b', type: 'dashed' } }
    },
    yAxis: {
      type: 'category',
      data: ['客户E', '客户D', '客户C', '客户B', '客户A'],
      axisLine: { lineStyle: { color: '#3a3f4b' } },
      axisLabel: { color: '#a0a0a0' }
    },
    series: [
      {
        name: '销售金额',
        type: 'bar',
        data: [220, 280, 340, 460, 620],
        itemStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [
              { offset: 0, color: '#4c8bf5' },
              { offset: 1, color: '#e3b341' }
            ]
          }
        },
        label: { show: true, position: 'right', color: '#a0a0a0', formatter: '{c}万' }
      }
    ]
  };
  return <ReactECharts option={option} style={{ height: '240px' }} />;
};

export const SalesRegionAnalysisChart: React.FC = () => {
  const option = {
    backgroundColor: 'transparent',
    tooltip: { trigger: 'item' },
    legend: {
      orient: 'vertical',
      right: 10,
      top: 'center',
      textStyle: { color: '#a0a0a0' }
    },
    series: [
      {
        name: '销售区域',
        type: 'pie',
        radius: ['45%', '70%'],
        center: ['35%', '50%'],
        label: { show: false },
        data: [
          { value: 420, name: '华东', itemStyle: { color: '#4c8bf5' } },
          { value: 360, name: '华南', itemStyle: { color: '#e3b341' } },
          { value: 280, name: '华北', itemStyle: { color: '#3ba272' } },
          { value: 220, name: '西南', itemStyle: { color: '#9a60b4' } },
          { value: 160, name: '西北', itemStyle: { color: '#ea7ccc' } }
        ]
      }
    ]
  };
  return <ReactECharts option={option} style={{ height: '240px' }} />;
};

export const InventoryInOutChart: React.FC = () => {
  const option = {
    backgroundColor: 'transparent',
    tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
    legend: { data: ['入库', '出库'], textStyle: { color: '#a0a0a0' }, right: 10 },
    grid: { left: '3%', right: '4%', top: '12%', bottom: '3%', containLabel: true },
    xAxis: {
      type: 'category',
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      axisLine: { lineStyle: { color: '#3a3f4b' } },
      axisLabel: { color: '#a0a0a0' }
    },
    yAxis: {
      type: 'value',
      axisLabel: { color: '#a0a0a0' },
      splitLine: { lineStyle: { color: '#3a3f4b', type: 'dashed' } }
    },
    series: [
      { name: '入库', type: 'bar', barWidth: '35%', data: [120, 160, 140, 180, 210, 170, 150], itemStyle: { color: '#4c8bf5' } },
      { name: '出库', type: 'bar', barWidth: '35%', data: [90, 130, 110, 150, 190, 160, 140], itemStyle: { color: '#e3b341' } }
    ]
  };
  return <ReactECharts option={option} style={{ height: '240px' }} />;
};

export const InventoryHistoryChart: React.FC = () => {
  const option = {
    backgroundColor: 'transparent',
    tooltip: { trigger: 'axis' },
    grid: { left: '3%', right: '4%', top: '10%', bottom: '3%', containLabel: true },
    xAxis: {
      type: 'category',
      data: ['2025-02', '2025-03', '2025-04', '2025-05', '2025-06', '2025-07'],
      axisLine: { lineStyle: { color: '#3a3f4b' } },
      axisLabel: { color: '#a0a0a0' }
    },
    yAxis: {
      type: 'value',
      axisLabel: { color: '#a0a0a0', formatter: '{value}吨' },
      splitLine: { lineStyle: { color: '#3a3f4b', type: 'dashed' } }
    },
    series: [
      {
        name: '历史库存',
        type: 'line',
        smooth: true,
        data: [860, 920, 890, 980, 1040, 1015],
        itemStyle: { color: '#3ba272' },
        areaStyle: { color: 'rgba(59,162,114,0.18)' },
        lineStyle: { width: 3 }
      }
    ]
  };
  return <ReactECharts option={option} style={{ height: '240px' }} />;
};

export const InventoryWarehouseDistributionChart: React.FC = () => {
  const option = {
    backgroundColor: 'transparent',
    tooltip: { trigger: 'item' },
    legend: { bottom: 0, textStyle: { color: '#a0a0a0' } },
    series: [
      {
        name: '仓库分布',
        type: 'pie',
        radius: ['40%', '70%'],
        center: ['50%', '45%'],
        label: { show: false },
        data: [
          { value: 320, name: '华东仓', itemStyle: { color: '#4c8bf5' } },
          { value: 260, name: '华南仓', itemStyle: { color: '#e3b341' } },
          { value: 210, name: '华北仓', itemStyle: { color: '#3ba272' } },
          { value: 160, name: '西南仓', itemStyle: { color: '#9a60b4' } },
          { value: 90, name: '西北仓', itemStyle: { color: '#ea7ccc' } }
        ]
      }
    ]
  };
  return <ReactECharts option={option} style={{ height: '240px' }} />;
};
