import React from 'react';
import { ShoppingCart, Scale, FileText, DollarSign, TrendingUp, Calendar, Rocket, AlertTriangle, ClipboardCheck, Clock } from 'lucide-react';
import KPICard from './KPICard';
import { PurchaseTrendChart, SupplierRankChart } from './Charts';

const PurchasePage: React.FC = () => {
  const purchaseIndicators = [
    { label: '当月值', value: '490.24', unit: '万', icon: <Rocket size={18} />, color: 'from-blue-600 to-blue-400', shadow: 'shadow-blue-500/20' },
    { label: '年度累计值', value: '4902', unit: '万', icon: <AlertTriangle size={18} />, color: 'from-purple-600 to-purple-400', shadow: 'shadow-purple-500/20' },
    { label: '年度预算', value: '6271', unit: '万', icon: <ClipboardCheck size={18} />, color: 'from-green-600 to-green-400', shadow: 'shadow-green-500/20' },
    { label: '预实差额', value: '1369', unit: '万', icon: <Clock size={18} />, color: 'from-orange-600 to-orange-400', shadow: 'shadow-orange-500/20' },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          title="采购总金额"
          value="1,380"
          unit="万"
          icon={<DollarSign size={16} className="text-[#4c8bf5]" />}
        />
        <KPICard
          title="采购重量"
          value="9,200"
          unit="吨"
          icon={<Scale size={16} className="text-[#e3b341]" />}
        />
        <KPICard
          title="采购合同数"
          value="156"
          unit="份"
          icon={<FileText size={16} className="text-[#3ba272]" />}
        />
        <KPICard
          title="已付金额"
          value="980"
          unit="万"
          icon={<DollarSign size={16} className="text-[#9a60b4]" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <section className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-sm text-dashboard-muted mb-1">
            <TrendingUp size={14} className="text-dashboard-accent" />
            <span>采购额重点指标</span>
          </div>
          <div className="dashboard-card p-4 flex flex-col gap-4 h-[312px]">
            <div className="card-corner-top-right"></div>
            <div className="card-corner-bottom-left"></div>
            <div className="flex-1 flex items-center justify-center pt-4">
              <div className="grid grid-cols-4 gap-3 w-full max-w-[720px]">
                {purchaseIndicators.map((item, idx) => (
                  <div
                    key={idx}
                    className={`relative overflow-hidden rounded-lg p-2 bg-gradient-to-br ${item.color} ${item.shadow} shadow-lg flex flex-col items-center justify-center gap-1 group transition-transform hover:scale-[1.02]`}
                  >
                    <div className="absolute top-0 right-0 p-8 bg-white/10 rounded-full -mr-4 -mt-4 blur-2xl group-hover:blur-xl transition-all"></div>
                    <div className="text-white drop-shadow-md">
                      {item.icon}
                    </div>
                    <span className="text-[10px] text-white/80 font-medium">{item.label}</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-base font-bold text-white drop-shadow-sm">{item.value}</span>
                      <span className="text-[10px] text-white/70">{item.unit}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-auto">
              <div className="flex justify-between items-center text-xs">
                <span className="text-dashboard-muted">年度完成率</span>
                <span className="text-dashboard-accent font-bold">78.18%</span>
              </div>
              <div className="w-full h-2 bg-dashboard-bg/50 rounded-full overflow-hidden border border-dashboard-border/50 p-[2px]">
                <div className="h-full bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-300 rounded-full shadow-[0_0_8px_rgba(56,189,248,0.5)]" style={{ width: '78.18%' }}></div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-sm text-dashboard-muted mb-1">
            <Calendar size={14} className="text-dashboard-accent" />
            <span>月采购量趋势</span>
          </div>
          <div className="dashboard-card p-4">
            <div className="card-corner-top-right"></div>
            <div className="card-corner-bottom-left"></div>
            <PurchaseTrendChart />
          </div>
        </section>
      </div>

      <section className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-sm text-dashboard-muted mb-1">
          <ShoppingCart size={14} className="text-dashboard-accent" />
          <span>供应商采购金额排名 Top5</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="dashboard-card p-4">
            <div className="card-corner-top-right"></div>
            <div className="card-corner-bottom-left"></div>
            <SupplierRankChart />
          </div>
          <div className="dashboard-card p-4">
            <div className="card-corner-top-right"></div>
            <div className="card-corner-bottom-left"></div>
            <table className="w-full text-sm">
              <thead className="bg-[#2d313d] text-dashboard-accent">
                <tr>
                  <th className="p-3 border-b border-dashboard-border text-left">排名</th>
                  <th className="p-3 border-b border-dashboard-border text-left">供应商名称</th>
                  <th className="p-3 border-b border-dashboard-border text-right">采购金额</th>
                  <th className="p-3 border-b border-dashboard-border text-right">占比</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { rank: 1, name: '供应商A', amount: '720万', pct: '24.5%', color: '#ea7ccc' },
                  { rank: 2, name: '供应商B', amount: '560万', pct: '19.1%', color: '#9a60b4' },
                  { rank: 3, name: '供应商C', amount: '420万', pct: '14.3%', color: '#e3b341' },
                  { rank: 4, name: '供应商D', amount: '350万', pct: '11.9%', color: '#4c8bf5' },
                  { rank: 5, name: '供应商E', amount: '280万', pct: '9.5%', color: '#3ba272' },
                ].map((item) => (
                  <tr key={item.rank} className="hover:bg-white/5">
                    <td className="p-3 border-b border-dashboard-border">
                      <span className="w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold" style={{ backgroundColor: item.color + '30', color: item.color }}>{item.rank}</span>
                    </td>
                    <td className="p-3 border-b border-dashboard-border text-dashboard-muted">{item.name}</td>
                    <td className="p-3 border-b border-dashboard-border text-right text-dashboard-accent font-bold">{item.amount}</td>
                    <td className="p-3 border-b border-dashboard-border text-right">
                      <div className="flex items-center justify-end gap-2">
                        <div className="w-16 h-1.5 bg-[#14161d] rounded-full overflow-hidden">
                          <div className="h-full rounded-full" style={{ width: item.pct, backgroundColor: item.color }}></div>
                        </div>
                        <span>{item.pct}</span>
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
          <FileText size={14} className="text-dashboard-accent" />
          <span>采购商品分析</span>
        </div>
        <div className="dashboard-card overflow-hidden">
          <div className="card-corner-top-right"></div>
          <div className="card-corner-bottom-left"></div>
          <table className="w-full text-sm">
            <thead className="bg-[#2d313d] text-dashboard-accent">
              <tr>
                <th className="p-3 border-b border-dashboard-border text-left">供应商</th>
                <th className="p-3 border-b border-dashboard-border text-left">原产国</th>
                <th className="p-3 border-b border-dashboard-border text-left">厂号</th>
                <th className="p-3 border-b border-dashboard-border text-left">件套</th>
                <th className="p-3 border-b border-dashboard-border text-left">品名</th>
                <th className="p-3 border-b border-dashboard-border text-right">件数</th>
                <th className="p-3 border-b border-dashboard-border text-right">重量(吨)</th>
                <th className="p-3 border-b border-dashboard-border text-right">采购成本(万)</th>
              </tr>
            </thead>
            <tbody>
              {[
                { supplier: '供应商A', origin: '澳大利亚', factoryNo: 'AUS-2024-001', packSet: 'A1', productName: '澳牛腩块', quantity: 120, weight: 24.5, cost: 86.5 },
                { supplier: '供应商A', origin: '澳大利亚', factoryNo: 'AUS-2024-002', packSet: 'A2', productName: '澳牛腱子肉', quantity: 85, weight: 17.2, cost: 60.2 },
                { supplier: '供应商B', origin: '巴西', factoryNo: 'BRA-2024-001', packSet: 'B1', productName: '巴西去骨牛肉', quantity: 200, weight: 42.0, cost: 126.0 },
                { supplier: '供应商C', origin: '阿根廷', factoryNo: 'ARG-2024-001', packSet: 'C1', productName: '阿牛后胸肉', quantity: 150, weight: 31.5, cost: 94.5 },
                { supplier: '供应商D', origin: '乌拉圭', factoryNo: 'URU-2024-001', packSet: 'D1', productName: '乌牛肩肉', quantity: 95, weight: 19.8, cost: 59.4 },
                { supplier: '供应商E', origin: '新西兰', factoryNo: 'NZL-2024-001', packSet: 'E1', productName: '新西兰羊排', quantity: 60, weight: 12.0, cost: 48.0 },
                { supplier: '供应商A', origin: '澳大利亚', factoryNo: 'AUS-2024-003', packSet: 'A3', productName: '澳牛上脑', quantity: 75, weight: 15.3, cost: 53.6 },
                { supplier: '供应商B', origin: '巴西', factoryNo: 'BRA-2024-002', packSet: 'B2', productName: '巴西牛碎肉', quantity: 180, weight: 36.0, cost: 72.0 },
              ].map((item, idx) => (
                <tr key={idx} className="hover:bg-white/5">
                  <td className="p-3 border-b border-dashboard-border text-dashboard-muted">{item.supplier}</td>
                  <td className="p-3 border-b border-dashboard-border">
                    <span className="px-2 py-0.5 rounded text-xs bg-blue-500/20 text-blue-400">{item.origin}</span>
                  </td>
                  <td className="p-3 border-b border-dashboard-border text-dashboard-muted font-mono text-xs">{item.factoryNo}</td>
                  <td className="p-3 border-b border-dashboard-border text-dashboard-muted">{item.packSet}</td>
                  <td className="p-3 border-b border-dashboard-border">{item.productName}</td>
                  <td className="p-3 border-b border-dashboard-border text-right">{item.quantity.toLocaleString()}</td>
                  <td className="p-3 border-b border-dashboard-border text-right text-dashboard-accent">{item.weight.toFixed(1)}</td>
                  <td className="p-3 border-b border-dashboard-border text-right font-bold text-dashboard-accent">{item.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default PurchasePage;
