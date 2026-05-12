import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface ProductData {
  name: string;
  gpRateChange: string;
  gpAmountChangeRate: string;
  gpContribution: string;
  isUp: boolean;
}

const productData: ProductData[] = [
  { name: '产品4', gpRateChange: '1.15%', gpAmountChangeRate: '181.62%', gpContribution: '20.85%', isUp: true },
  { name: '产品2', gpRateChange: '1.72%', gpAmountChangeRate: '215.19%', gpContribution: '12.21%', isUp: true },
  { name: '产品5', gpRateChange: '0.95%', gpAmountChangeRate: '130.49%', gpContribution: '15.98%', isUp: true },
  { name: '产品9', gpRateChange: '-3.36%', gpAmountChangeRate: '106.46%', gpContribution: '10.72%', isUp: true },
  { name: '产品10', gpRateChange: '-0.19%', gpAmountChangeRate: '40.15%', gpContribution: '17.69%', isUp: false },
  { name: '产品11', gpRateChange: '-1.46%', gpAmountChangeRate: '-20.03%', gpContribution: '5.48%', isUp: false },
];

const ProductTable: React.FC = () => {
  return (
    <div className="dashboard-card overflow-hidden">
      <div className="card-corner-top-right"></div>
      <div className="card-corner-bottom-left"></div>
      
      <table className="w-full text-left text-sm border-collapse">
        <thead className="bg-[#2d313d] text-dashboard-accent">
          <tr>
            <th className="p-3 border-b border-dashboard-border">产品名称</th>
            <th className="p-3 border-b border-dashboard-border">毛利率变动额</th>
            <th className="p-3 border-b border-dashboard-border">毛利额变动率</th>
            <th className="p-3 border-b border-dashboard-border">毛利额贡献度</th>
          </tr>
        </thead>
        <tbody>
          {productData.map((item, index) => (
            <tr key={index} className="hover:bg-white/5 transition-colors">
              <td className="p-3 border-b border-dashboard-border text-dashboard-muted">{item.name}</td>
              <td className="p-3 border-b border-dashboard-border">{item.gpRateChange}</td>
              <td className="p-3 border-b border-dashboard-border">{item.gpAmountChangeRate}</td>
              <td className="p-3 border-b border-dashboard-border">
                <div className="flex items-center gap-2 justify-between">
                  <span>{item.gpContribution}</span>
                  {item.isUp ? (
                    <ArrowUp size={14} className="text-red-500" />
                  ) : (
                    <ArrowDown size={14} className="text-green-500" />
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
