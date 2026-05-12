import React, { useState } from 'react';
import { Settings, LayoutDashboard, PieChart, Users, Package, TrendingUp, ShoppingCart, BarChart3, Box } from 'lucide-react';
import KPICard from './components/KPICard';
import { MonthlyTrendChart, CategoryContributionChart, ClientTypeChart } from './components/Charts';
import ProductTable from './components/ProductTable';
import PurchasePage from './components/PurchasePage';
import SalesPage from './components/SalesPage';
import InventoryPage from './components/InventoryPage';

type PageType = 'overview' | 'purchase' | 'sales' | 'inventory';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('overview');

  const navItems = [
    { id: 'overview' as PageType, label: '概 览', icon: <LayoutDashboard size={18} /> },
    { id: 'purchase' as PageType, label: '采 购', icon: <ShoppingCart size={18} /> },
    { id: 'sales' as PageType, label: '销 售', icon: <BarChart3 size={18} /> },
    { id: 'inventory' as PageType, label: '库 存', icon: <Box size={18} /> },
  ];

  const renderContent = () => {
    switch (currentPage) {
      case 'overview':
        return (
          <>
            {/* KPI Row */}
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

            {/* Charts Row */}
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

            {/* Table Row */}
            <section className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-sm text-dashboard-muted mb-1">
                <Package size={14} className="text-dashboard-accent" />
                <span>产品分析</span>
              </div>
              <ProductTable />
            </section>
          </>
        );
      case 'purchase':
        return <PurchasePage />;
      case 'sales':
        return <SalesPage />;
      case 'inventory':
        return <InventoryPage />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#1a1c24] text-white p-6 font-sans">
      {/* Header */}
      <header className="flex justify-between items-start mb-8">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-dashboard-card rounded-lg border border-dashboard-border">
              <Settings className="text-dashboard-accent" size={24} />
            </div>
            <h1 className="text-2xl font-bold tracking-tight">驾驶舱</h1>
          </div>

          <nav className="nav-shell">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`nav-btn ${currentPage === item.id ? 'active' : ''}`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
        
        <div className="flex items-center gap-4 bg-dashboard-card px-4 py-2 rounded-lg border border-dashboard-border text-sm">
          <div className="flex items-center gap-2">
            <span className="text-dashboard-muted">年月</span>
            <div className="flex gap-1 items-center bg-[#14161d] px-2 py-1 rounded border border-dashboard-border">
              <span className="text-dashboard-accent">2026</span>
              <span className="text-xs text-dashboard-muted">年</span>
              <span className="ml-2 text-dashboard-accent">1</span>
              <span className="text-xs text-dashboard-muted">月</span>
              <span className="ml-1 text-dashboard-muted">▼</span>
            </div>
          </div>
        </div>
      </header>

      {renderContent()}
    </div>
  );
};

export default App;
