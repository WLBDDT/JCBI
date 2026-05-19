import React from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';

interface BaseChartProps {
  height?: number | string;
}

export const MonthlyTrendChart: React.FC<BaseChartProps> = ({ height = '240px' }) => {
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
  return <ReactECharts option={option} style={{ height }} />;
};

export const CategoryContributionChart: React.FC<BaseChartProps> = ({ height = '240px' }) => {
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
  return <ReactECharts option={option} style={{ height }} />;
};

export const ClientTypeChart: React.FC<BaseChartProps> = ({ height = '240px' }) => {
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
  return <ReactECharts option={option} style={{ height }} />;
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
  const productValues = [180, 230, 310, 420, 560];
  const productTotal = productValues.reduce((sum, v) => sum + v, 0);
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
        data: productValues.map((value) => ({
          value,
          pct: Number(((value / productTotal) * 100).toFixed(1))
        })),
        itemStyle: {
          color: (params: { dataIndex: number }) => {
            const colors = ['#3ba272', '#4c8bf5', '#e3b341', '#9a60b4', '#ea7ccc'];
            return colors[params.dataIndex];
          }
        },
        label: {
          show: true,
          position: 'right',
          color: '#a0a0a0',
          formatter: (params: { data: { value: number; pct: number } }) => `${params.data.value}万  ${params.data.pct}%`
        }
      }
    ]
  };
  return <ReactECharts option={option} style={{ height: '240px' }} />;
};

export const SalesCustomerTop5Chart: React.FC = () => {
  const customerValues = [220, 280, 340, 460, 620];
  const customerTotal = customerValues.reduce((sum, v) => sum + v, 0);
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
        data: customerValues.map((value) => ({
          value,
          pct: Number(((value / customerTotal) * 100).toFixed(1))
        })),
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
        label: {
          show: true,
          position: 'right',
          color: '#a0a0a0',
          formatter: (params: { data: { value: number; pct: number } }) => `${params.data.value}万  ${params.data.pct}%`
        }
      }
    ]
  };
  return <ReactECharts option={option} style={{ height: '240px' }} />;
};

export const SalesHalfYearAnalysisChart: React.FC = () => {
  const months = ['2025-02', '2025-03', '2025-04', '2025-05', '2025-06', '2025-07'];
  const actual = [1900, 2300, 1980, 1750, 2000, 2650];
  const target = [3100, 2200, 2400, 3600, 3557.45, 2750];
  const rate = months.map((_, i) => {
    const base = target[i] || 0;
    return base ? Number(((actual[i] / base) * 100).toFixed(2)) : 0;
  });

  const option = {
    backgroundColor: 'transparent',
    tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
    grid: { left: '3%', right: '6%', top: '14%', bottom: '10%', containLabel: true },
    xAxis: {
      type: 'category',
      data: months,
      axisLine: { lineStyle: { color: '#3a3f4b' } },
      axisLabel: { color: '#a0a0a0' }
    },
    yAxis: [
      {
        type: 'value',
        name: '金额(万)',
        axisLine: { show: false },
        axisLabel: { color: '#a0a0a0', formatter: '{value}万' },
        splitLine: { lineStyle: { color: '#3a3f4b', type: 'dashed' } }
      },
      {
        type: 'value',
        name: '完成率',
        min: 0,
        max: 140,
        axisLine: { show: false },
        axisLabel: { color: '#a0a0a0', formatter: '{value}%' },
        splitLine: { show: false }
      }
    ],
    series: [
      {
        name: '实际',
        type: 'bar',
        barWidth: 22,
        data: actual,
        itemStyle: { color: '#3d6cf2' },
        label: { show: false }
      },
      {
        name: '目标',
        type: 'bar',
        barWidth: 22,
        barGap: '30%',
        data: target,
        itemStyle: { color: '#44c2ff' },
        label: {
          show: true,
          position: 'top',
          color: 'rgba(255,255,255,0.75)',
          formatter: (p: { value: number }) => `${Number(p.value).toLocaleString()}万`
        }
      },
      {
        name: '完成率',
        type: 'line',
        yAxisIndex: 1,
        data: rate,
        smooth: true,
        symbol: 'circle',
        symbolSize: 6,
        itemStyle: { color: '#8a6df2' },
        lineStyle: { width: 3, color: '#8a6df2' },
        label: {
          show: true,
          position: 'top',
          color: 'rgba(255,255,255,0.7)',
          formatter: (p: { value: number }) => `${Number(p.value).toFixed(2)}%`
        }
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '260px' }} />;
};

export const SalesProductTrendChart: React.FC = () => {
  const dates = [
    '2024-04-03',
    '2024-04-05',
    '2024-04-07',
    '2024-04-09',
    '2024-04-11',
    '2024-04-13',
    '2024-04-15',
    '2024-04-17',
    '2024-04-19',
    '2024-04-21',
    '2024-04-23',
    '2024-04-25',
    '2024-04-27',
    '2024-04-29',
    '2024-05-01'
  ];

  const seriesDefs = [
    { name: '品类0', color: '#2b5cff', data: [21, 19, 18, 16, 9, 12, 14, 18, 24, 21, 22, 23, 21, 22, 19] },
    { name: '品类1', color: '#3f5fbf', data: [10, 9, 8, 7, 4, 6, 9, 14, 22, 20, 18, 16, 14, 17, 13] },
    { name: '品类2', color: '#8b7cf6', data: [14, 11, 11, 10, 9, 15, 21, 32, 43, 34, 31, 22, 25, 14, 18] },
    { name: '品类3', color: '#66c6ff', data: [4, 4, 3, 3, 2, 3, 4, 4, 5, 4, 4, 3, 3, 1, 2] },
    { name: '品类4', color: '#56d0c0', data: [2, 2, 2, 2, 1, 2, 2, 3, 3, 2, 2, 2, 2, 1, 1] },
    { name: '品类5', color: '#ff8b52', data: [3, 2, 2, 1, 1, 2, 3, 5, 12, 8, 10, 5, 9, 1, 5] },
    { name: '品类6', color: '#4c8bf5', data: [1, 1, 1, 1, 1, 1, 2, 2, 3, 3, 2, 2, 1, 1, 1] },
    { name: '品类7', color: '#a0a0a0', data: [0.6, 0.5, 0.5, 0.4, 0.3, 0.4, 0.6, 0.8, 1.0, 0.9, 0.8, 0.7, 0.6, 0.4, 0.5] }
  ];

  const option = {
    backgroundColor: 'transparent',
    tooltip: { trigger: 'axis' },
    legend: {
      type: 'scroll',
      top: 0,
      textStyle: { color: '#a0a0a0', fontSize: 10 },
      pageIconColor: '#a0a0a0',
      pageTextStyle: { color: '#a0a0a0' }
    },
    grid: { left: '3%', right: '4%', top: '18%', bottom: '10%', containLabel: true },
    xAxis: {
      type: 'category',
      data: dates,
      axisLine: { lineStyle: { color: '#3a3f4b' } },
      axisLabel: { color: '#a0a0a0' }
    },
    yAxis: {
      type: 'value',
      axisLine: { show: false },
      axisLabel: { color: '#a0a0a0', formatter: '{value}万' },
      splitLine: { lineStyle: { color: '#3a3f4b', type: 'dashed' } }
    },
    series: seriesDefs.map((s, idx) => ({
      name: s.name,
      type: 'line',
      smooth: true,
      showSymbol: false,
      symbol: 'circle',
      symbolSize: 6,
      data: s.data,
      lineStyle: { width: idx === 2 ? 3 : 2, color: s.color },
      itemStyle: { color: s.color }
    }))
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
};

export const SalesRegionAnalysisChart: React.FC = () => {
  const provinceRows = React.useMemo(
    () => [
      { name: '湖北', value: 520 },
      { name: '山东', value: 480 },
      { name: '河南', value: 450 },
      { name: '广东', value: 360 },
      { name: '江苏', value: 310 },
      { name: '浙江', value: 280 },
      { name: '四川', value: 240 },
      { name: '上海', value: 210 },
      { name: '北京', value: 190 },
      { name: '福建', value: 170 },
      { name: '安徽', value: 160 },
      { name: '湖南', value: 150 },
      { name: '江西', value: 130 },
      { name: '河北', value: 120 },
      { name: '陕西', value: 110 }
    ],
    []
  );

  const top10 = React.useMemo(() => {
    const ranked = [...provinceRows].sort((a, b) => b.value - a.value).slice(0, 10);
    const total = provinceRows.reduce((s, r) => s + r.value, 0);
    return ranked.map((r, i) => ({
      ...r,
      rank: i + 1,
      pct: total ? Number(((r.value / total) * 100).toFixed(1)) : 0
    }));
  }, [provinceRows]);

  const rankColors = ['#4c8bf5', '#e3b341', '#3ba272', '#9a60b4', '#ea7ccc'];
  const getColor = (rank: number) => rankColors[rank - 1] ?? '#00bfa5';

  return (
    <div className="h-[240px] overflow-auto">
      <table className="w-full text-sm">
        <thead className="bg-[#2d313d] text-dashboard-accent">
          <tr>
            <th className="p-3 border-b border-dashboard-border text-left">排名</th>
            <th className="p-3 border-b border-dashboard-border text-left">省份</th>
            <th className="p-3 border-b border-dashboard-border text-right">销售额(万)</th>
            <th className="p-3 border-b border-dashboard-border text-right">占比</th>
          </tr>
        </thead>
        <tbody>
          {top10.map((item) => {
            const color = getColor(item.rank);
            return (
              <tr key={item.name} className="hover:bg-white/5">
                <td className="p-3 border-b border-dashboard-border">
                  <span
                    className="w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold"
                    style={{ backgroundColor: color + '30', color }}
                  >
                    {item.rank}
                  </span>
                </td>
                <td className="p-3 border-b border-dashboard-border text-dashboard-muted">{item.name}</td>
                <td className="p-3 border-b border-dashboard-border text-right text-dashboard-accent font-bold">
                  {item.value.toLocaleString()}
                </td>
                <td className="p-3 border-b border-dashboard-border text-right">
                  <div className="flex items-center justify-end gap-2">
                    <div className="w-16 h-1.5 bg-[#14161d] rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${item.pct}%`, backgroundColor: color }}></div>
                    </div>
                    <span>{item.pct.toFixed(1)}%</span>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
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

export const InventoryAmountAgingChart: React.FC = () => {
  const option = {
    backgroundColor: 'transparent',
    tooltip: { trigger: 'item', formatter: '{b}<br/>金额：{c}万<br/>占比：{d}%' },
    legend: {
      orient: 'vertical',
      right: 0,
      top: 'center',
      textStyle: { color: '#a0a0a0', fontSize: 11 },
      itemWidth: 10,
      itemHeight: 10
    },
    series: [
      {
        name: '库龄占比',
        type: 'pie',
        radius: ['55%', '75%'],
        center: ['40%', '50%'],
        label: {
          color: 'rgba(255,255,255,0.75)',
          formatter: '{b}\n{c}万  {d}%',
          fontSize: 10
        },
        labelLine: { lineStyle: { color: 'rgba(255,255,255,0.25)' } },
        data: [
          { value: 2230.39, name: '1个月内', itemStyle: { color: '#4c8bf5' } },
          { value: 3018.46, name: '1-3个月', itemStyle: { color: '#9ec3ff' } },
          { value: 1364.83, name: '3-6个月', itemStyle: { color: '#3ba272' } },
          { value: 1260.18, name: '6-12个月', itemStyle: { color: '#e3b341' } },
          { value: 342.71, name: '1-2年', itemStyle: { color: '#3bb7d8' } },
          { value: 727.38, name: '2-3年', itemStyle: { color: '#9a60b4' } },
          { value: 0.0, name: '其他', itemStyle: { color: '#ea7ccc' } }
        ]
      }
    ]
  };
  return <ReactECharts option={option} style={{ height: '240px' }} />;
};
