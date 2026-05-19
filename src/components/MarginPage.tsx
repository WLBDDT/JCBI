import React from 'react';
import KPICard from './KPICard';
import { MonthlyTrendChart, CategoryContributionChart, ClientTypeChart } from './Charts';
import ProductTable from './ProductTable';
import { Package, TrendingUp, Users, LayoutDashboard, PieChart } from 'lucide-react';

const MarginPage: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
        <KPICard 
          title="毛利额" 
          value="136.24" 
          unit="万"
          yoy={{ value: "8.25%", isUp: true }}
          mom={{ value: "47.46%", isUp: true }}
          icon={<Package size={16} className="text-[#4c8bf5]" />}
        />
        <KPICard 
          title="毛利率" 
          value="28.15" 
          unit="%"
          yoy={{ value: "-1.83%", isUp: false }}
          mom={{ value: "1.50%", isUp: true }}
          icon={<TrendingUp size={16} className="text-dashboard-accent" />}
        />
        <KPICard 
          title="战略客户毛利贡献度" 
          value="41.26" 
          unit="%"
          yoy={{ value: "27.36%", isUp: true }}
          mom={{ value: "84.05%", isUp: true }}
          icon={<Users size={16} className="text-[#e3b341]" />}
        />
        <KPICard 
          title="亏损订单毛利额" 
          value="-4.91" 
          unit="万"
          yoy={{ value: "57.80%", isUp: true }}
          mom={{ value: "81.15%", isUp: true }}
          icon={<LayoutDashboard size={16} className="text-[#9a60b4]" />}
        />
        <KPICard 
          title="成熟期产品毛利贡献度" 
          value="23.68" 
          unit="%"
          yoy={{ value: "-25.26%", isUp: false }}
          mom={{ value: "21.53%", isUp: true }}
          icon={<PieChart size={16} className="text-[#3ba272]" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <section className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-sm text-dashboard-muted mb-1">
            <TrendingUp size={14} className="text-dashboard-accent" />
            <span>毛利额月度趋势</span>
          </div>
          <div className="dashboard-card p-4">
            <div className="card-corner-top-right"></div>
            <div className="card-corner-bottom-left"></div>
            <MonthlyTrendChart />
          </div>
        </section>

        <section className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-sm text-dashboard-muted mb-1">
            <PieChart size={14} className="text-dashboard-accent" />
            <span>产品大类毛利额贡献度</span>
          </div>
          <div className="dashboard-card p-4">
            <div className="card-corner-top-right"></div>
            <div className="card-corner-bottom-left"></div>
            <CategoryContributionChart />
          </div>
        </section>

        <section className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-sm text-dashboard-muted mb-1">
            <Users size={14} className="text-dashboard-accent" />
            <span>客户类型</span>
          </div>
          <div className="dashboard-card p-4">
            <div className="card-corner-top-right"></div>
            <div className="card-corner-bottom-left"></div>
            <ClientTypeChart />
          </div>
        </section>
      </div>

      <section className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-sm text-dashboard-muted mb-1">
          <Package size={14} className="text-dashboard-accent" />
          <span>产品分析</span>
        </div>
        <ProductTable />
      </section>
    </>
  );
};

export default MarginPage;