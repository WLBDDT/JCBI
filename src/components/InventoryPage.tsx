import React from 'react';
import { Boxes, Truck, Activity, BarChart3, LineChart, MapPinned, PieChart } from 'lucide-react';
import KPICard from './KPICard';
import { InventoryAmountAgingChart, InventoryHistoryChart, InventoryInOutChart, InventoryWarehouseDistributionChart } from './Charts';

const InventoryPage: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <KPICard
          title="当前库存重量"
          value="1,015"
          unit="吨"
          icon={<Boxes size={16} className="text-[#e3b341]" />}
        />
        <KPICard
          title="在途库存"
          value="260"
          unit="吨"
          icon={<Truck size={16} className="text-[#4c8bf5]" />}
        />
        <KPICard
          title="实时库存"
          value="755"
          unit="吨"
          icon={<Activity size={16} className="text-[#3ba272]" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <section className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-sm text-dashboard-muted mb-1">
            <BarChart3 size={14} className="text-dashboard-accent" />
            <span>出入库统计</span>
          </div>
          <div className="dashboard-card p-4">
            <div className="card-corner-top-right"></div>
            <div className="card-corner-bottom-left"></div>
            <InventoryInOutChart />
          </div>
        </section>

        <section className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-sm text-dashboard-muted mb-1">
            <LineChart size={14} className="text-dashboard-accent" />
            <span>历史库存分析</span>
          </div>
          <div className="dashboard-card p-4">
            <div className="card-corner-top-right"></div>
            <div className="card-corner-bottom-left"></div>
            <InventoryHistoryChart />
          </div>
        </section>
      </div>

      <section className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-sm text-dashboard-muted mb-1">
          <MapPinned size={14} className="text-dashboard-accent" />
          <span>库存仓库分布</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="dashboard-card p-4">
            <div className="card-corner-top-right"></div>
            <div className="card-corner-bottom-left"></div>
            <InventoryWarehouseDistributionChart />
          </div>
          <div className="dashboard-card overflow-hidden">
            <div className="card-corner-top-right"></div>
            <div className="card-corner-bottom-left"></div>
            <table className="w-full text-sm">
              <thead className="bg-[#2d313d] text-dashboard-accent">
                <tr>
                  <th className="p-3 border-b border-dashboard-border text-left">仓库</th>
                  <th className="p-3 border-b border-dashboard-border text-right">库存重量(吨)</th>
                  <th className="p-3 border-b border-dashboard-border text-right">占比</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: '华东仓', value: 320, pct: 31.5, color: '#4c8bf5' },
                  { name: '华南仓', value: 260, pct: 25.6, color: '#e3b341' },
                  { name: '华北仓', value: 210, pct: 20.7, color: '#3ba272' },
                  { name: '西南仓', value: 160, pct: 15.8, color: '#9a60b4' },
                  { name: '西北仓', value: 90, pct: 8.9, color: '#ea7ccc' },
                ].map((row) => (
                  <tr key={row.name} className="hover:bg-white/5">
                    <td className="p-3 border-b border-dashboard-border text-dashboard-muted">{row.name}</td>
                    <td className="p-3 border-b border-dashboard-border text-right text-dashboard-accent font-bold">
                      {row.value.toLocaleString()}
                    </td>
                    <td className="p-3 border-b border-dashboard-border text-right">
                      <div className="flex items-center justify-end gap-2">
                        <div className="w-16 h-1.5 bg-[#14161d] rounded-full overflow-hidden">
                          <div className="h-full rounded-full" style={{ width: `${row.pct}%`, backgroundColor: row.color }}></div>
                        </div>
                        <span>{row.pct.toFixed(1)}%</span>
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
          <PieChart size={14} className="text-dashboard-accent" />
          <span>库存金额占比_库龄</span>
        </div>
        <div className="dashboard-card p-4">
          <div className="card-corner-top-right"></div>
          <div className="card-corner-bottom-left"></div>
          <InventoryAmountAgingChart />
        </div>
      </section>
    </div>
  );
};

export default InventoryPage;

