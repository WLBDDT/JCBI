import React from 'react';
import { DollarSign, Scale, Percent, FileText, Trophy, Users, MapPinned } from 'lucide-react';
import KPICard from './KPICard';
import { SalesCustomerTop5Chart, SalesProductTop5Chart, SalesRegionAnalysisChart } from './Charts';

const SalesPage: React.FC = () => {
  const productRows = [
    { product: '产品A', weight: 18.6, amount: 560, margin: 28.4 },
    { product: '产品B', weight: 14.2, amount: 420, margin: 26.1 },
    { product: '产品C', weight: 10.8, amount: 310, margin: 24.7 },
    { product: '产品D', weight: 8.1, amount: 230, margin: 22.9 },
    { product: '产品E', weight: 6.5, amount: 180, margin: 21.3 },
    { product: '产品F', weight: 5.8, amount: 160, margin: 19.8 },
    { product: '产品G', weight: 4.9, amount: 140, margin: 18.9 },
    { product: '产品H', weight: 3.6, amount: 110, margin: 17.6 },
  ];

  const customerRows = [
    { rank: 1, name: '客户A', amount: 620, pct: 24.2, color: '#4c8bf5' },
    { rank: 2, name: '客户B', amount: 460, pct: 18.0, color: '#e3b341' },
    { rank: 3, name: '客户C', amount: 340, pct: 13.3, color: '#3ba272' },
    { rank: 4, name: '客户D', amount: 280, pct: 11.0, color: '#9a60b4' },
    { rank: 5, name: '客户E', amount: 220, pct: 8.6, color: '#ea7ccc' },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <KPICard
          title="销售重量"
          value="92.5"
          unit="吨"
          icon={<Scale size={16} className="text-[#e3b341]" />}
        />
        <KPICard
          title="销售金额"
          value="2,180"
          unit="万"
          icon={<DollarSign size={16} className="text-[#4c8bf5]" />}
        />
        <KPICard
          title="毛利率"
          value="25.36"
          unit="%"
          icon={<Percent size={16} className="text-[#3ba272]" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <section className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-sm text-dashboard-muted mb-1">
            <FileText size={14} className="text-dashboard-accent" />
            <span>销售产品分析</span>
          </div>
          <div className="dashboard-card overflow-hidden">
            <div className="card-corner-top-right"></div>
            <div className="card-corner-bottom-left"></div>
            <table className="w-full text-sm">
              <thead className="bg-[#2d313d] text-dashboard-accent">
                <tr>
                  <th className="p-3 border-b border-dashboard-border text-left">品名</th>
                  <th className="p-3 border-b border-dashboard-border text-right">销售重量(吨)</th>
                  <th className="p-3 border-b border-dashboard-border text-right">销售金额(万)</th>
                  <th className="p-3 border-b border-dashboard-border text-right">毛利率</th>
                </tr>
              </thead>
              <tbody>
                {productRows.map((row) => (
                  <tr key={row.product} className="hover:bg-white/5">
                    <td className="p-3 border-b border-dashboard-border text-dashboard-muted">{row.product}</td>
                    <td className="p-3 border-b border-dashboard-border text-right text-dashboard-accent">{row.weight.toFixed(1)}</td>
                    <td className="p-3 border-b border-dashboard-border text-right font-bold text-dashboard-accent">{row.amount.toLocaleString()}</td>
                    <td className="p-3 border-b border-dashboard-border text-right">
                      <span className="px-2 py-0.5 rounded text-xs bg-green-500/15 text-green-400">{row.margin.toFixed(1)}%</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-sm text-dashboard-muted mb-1">
            <Trophy size={14} className="text-dashboard-accent" />
            <span>销售产品 Top5</span>
          </div>
          <div className="dashboard-card p-4">
            <div className="card-corner-top-right"></div>
            <div className="card-corner-bottom-left"></div>
            <SalesProductTop5Chart />
          </div>
        </section>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <section className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-sm text-dashboard-muted mb-1">
            <Users size={14} className="text-dashboard-accent" />
            <span>销售客户 Top5</span>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="dashboard-card p-4">
              <div className="card-corner-top-right"></div>
              <div className="card-corner-bottom-left"></div>
              <SalesCustomerTop5Chart />
            </div>
            <div className="dashboard-card overflow-hidden">
              <div className="card-corner-top-right"></div>
              <div className="card-corner-bottom-left"></div>
              <table className="w-full text-sm">
                <thead className="bg-[#2d313d] text-dashboard-accent">
                  <tr>
                    <th className="p-3 border-b border-dashboard-border text-left">排名</th>
                    <th className="p-3 border-b border-dashboard-border text-left">客户名称</th>
                    <th className="p-3 border-b border-dashboard-border text-right">销售金额(万)</th>
                    <th className="p-3 border-b border-dashboard-border text-right">占比</th>
                  </tr>
                </thead>
                <tbody>
                  {customerRows.map((item) => (
                    <tr key={item.rank} className="hover:bg-white/5">
                      <td className="p-3 border-b border-dashboard-border">
                        <span
                          className="w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold"
                          style={{ backgroundColor: item.color + '30', color: item.color }}
                        >
                          {item.rank}
                        </span>
                      </td>
                      <td className="p-3 border-b border-dashboard-border text-dashboard-muted">{item.name}</td>
                      <td className="p-3 border-b border-dashboard-border text-right text-dashboard-accent font-bold">
                        {item.amount.toLocaleString()}
                      </td>
                      <td className="p-3 border-b border-dashboard-border text-right">
                        <div className="flex items-center justify-end gap-2">
                          <div className="w-16 h-1.5 bg-[#14161d] rounded-full overflow-hidden">
                            <div className="h-full rounded-full" style={{ width: `${item.pct}%`, backgroundColor: item.color }}></div>
                          </div>
                          <span>{item.pct.toFixed(1)}%</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-sm text-dashboard-muted mb-1">
            <MapPinned size={14} className="text-dashboard-accent" />
            <span>销售区域分析</span>
          </div>
          <div className="dashboard-card p-4">
            <div className="card-corner-top-right"></div>
            <div className="card-corner-bottom-left"></div>
            <SalesRegionAnalysisChart />
          </div>
        </section>
      </div>
    </div>
  );
};

export default SalesPage;

