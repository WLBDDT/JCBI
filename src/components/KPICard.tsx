import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface KPICardProps {
  title: string;
  value: string;
  unit?: string;
  yoy?: { value: string; isUp: boolean };
  mom?: { value: string; isUp: boolean };
  icon?: React.ReactNode;
}

const KPICard: React.FC<KPICardProps> = ({ title, value, unit, yoy, mom, icon }) => {
  const showCompare = Boolean(yoy) || Boolean(mom);
  return (
    <div className="dashboard-card p-4 flex flex-col gap-2 min-w-[200px] flex-1">
      <div className="card-corner-top-right"></div>
      <div className="card-corner-bottom-left"></div>
      
      <div className="flex items-center gap-2 text-sm text-dashboard-muted">
        {icon && <div className="p-1.5 bg-dashboard-card rounded-full border border-dashboard-border">{icon}</div>}
        <span>{title}</span>
      </div>
      
      <div className="flex items-baseline gap-1 mt-1">
        <span className="text-2xl font-bold text-[#4c8bf5]">{value}</span>
        {unit && <span className="text-sm text-dashboard-muted">{unit}</span>}
      </div>
      
      {showCompare && (
        <div className="flex gap-4 mt-2 text-xs">
          {yoy && (
            <div className="flex items-center gap-1">
              <span className="text-dashboard-muted">同比</span>
              <span className={yoy.isUp ? "text-green-500" : "text-red-500"}>{yoy.value}</span>
              {yoy.isUp ? <ArrowUp size={12} className="text-green-500" /> : <ArrowDown size={12} className="text-red-500" />}
            </div>
          )}
          {mom && (
            <div className="flex items-center gap-1">
              <span className="text-dashboard-muted">环比</span>
              <span className={mom.isUp ? "text-green-500" : "text-red-500"}>{mom.value}</span>
              {mom.isUp ? <ArrowUp size={12} className="text-green-500" /> : <ArrowDown size={12} className="text-red-500" />}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default KPICard;
