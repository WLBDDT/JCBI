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
  size?: 'default' | 'compact';
}

const KPICard: React.FC<KPICardProps> = ({ title, value, unit, yoy, mom, icon, size = 'default' }) => {
  const showCompare = Boolean(yoy) || Boolean(mom);
  const isCompact = size === 'compact';
  return (
    <div
      className={cn(
        "dashboard-card flex flex-col min-w-[200px] flex-1",
        isCompact ? "p-3 gap-1.5" : "p-4 gap-2"
      )}
    >
      <div className="card-corner-top-right"></div>
      <div className="card-corner-bottom-left"></div>
      
      <div className={cn("flex items-center gap-2 text-dashboard-muted", isCompact ? "text-xs" : "text-sm")}>
        {icon && <div className="p-1.5 bg-dashboard-card rounded-full border border-dashboard-border">{icon}</div>}
        <span>{title}</span>
      </div>
      
      <div className={cn("flex items-baseline gap-1", isCompact ? "mt-0.5" : "mt-1")}>
        <span className={cn("font-bold text-[#4c8bf5]", isCompact ? "text-xl" : "text-2xl")}>{value}</span>
        {unit && <span className={cn("text-dashboard-muted", isCompact ? "text-xs" : "text-sm")}>{unit}</span>}
      </div>
      
      {showCompare && (
        <div className={cn("flex text-xs", isCompact ? "gap-3 mt-1" : "gap-4 mt-2")}>
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
