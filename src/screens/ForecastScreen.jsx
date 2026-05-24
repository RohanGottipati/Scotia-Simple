import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FORECAST_ITEMS = [
  { date: 'May 25', label: 'Netflix subscription', amount: '-$17.99', type: 'out' },
  { date: 'May 28', label: 'Spotify', amount: '-$10.99', type: 'out' },
  { date: 'Jun 1', label: 'Payroll deposit', amount: '+$2,100.00', type: 'in' },
  { date: 'Jun 3', label: 'Rent — e-Transfer', amount: '-$1,450.00', type: 'out' },
  { date: 'Jun 5', label: 'Scotia VISA payment', amount: '-$717.45', type: 'out' },
  { date: 'Jun 10', label: 'Phone bill', amount: '-$53.74', type: 'out' },
];

export default function ForecastScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-full bg-scotia-grey-50 flex flex-col">
      {/* Header */}
      <div className="bg-scotia-red text-white px-5 pt-2 pb-4">
        <div className="flex items-center gap-2 mb-3">
          <button
            onClick={() => navigate('/')}
            className="p-1 -ml-1 bg-transparent border-none cursor-pointer text-white"
          >
            <ChevronLeft size={22} />
          </button>
          <span className="text-[17px] font-semibold">30-Day Forecast</span>
        </div>
        <p className="text-[13px] opacity-75">May 24 – Jun 23, 2026</p>
      </div>

      <div className="flex-1 px-4 pt-4 pb-6 space-y-3">
        {/* Summary */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="px-4 py-3 border-b border-scotia-grey-100">
            <p className="text-[11px] font-semibold text-scotia-grey-500 uppercase tracking-wide">Summary</p>
          </div>
          <div className="divide-y divide-scotia-grey-100">
            <div className="flex justify-between items-center px-4 py-3">
              <span className="text-[14px] text-scotia-grey-600">Expected money in</span>
              <span className="text-[14px] font-semibold text-scotia-green">$2,229.27</span>
            </div>
            <div className="flex justify-between items-center px-4 py-3">
              <span className="text-[14px] text-scotia-grey-600">Expected money out</span>
              <span className="text-[14px] font-semibold text-scotia-red">$2,249.17</span>
            </div>
            <div className="flex justify-between items-center px-4 py-3">
              <span className="text-[14px] text-scotia-grey-600">Net</span>
              <span className="text-[14px] font-semibold text-scotia-grey-900">-$19.90</span>
            </div>
          </div>
        </div>

        {/* Upcoming transactions */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="px-4 py-3 border-b border-scotia-grey-100">
            <p className="text-[11px] font-semibold text-scotia-grey-500 uppercase tracking-wide">Upcoming transactions</p>
          </div>
          <div className="divide-y divide-scotia-grey-100">
            {FORECAST_ITEMS.map((item, i) => (
              <div key={i} className="flex items-center justify-between px-4 py-3">
                <div>
                  <p className="text-[14px] text-scotia-grey-900 font-medium">{item.label}</p>
                  <p className="text-[12px] text-scotia-grey-400 mt-0.5">{item.date}</p>
                </div>
                <span className={`text-[14px] font-semibold ${item.type === 'in' ? 'text-scotia-green' : 'text-scotia-grey-900'}`}>
                  {item.amount}
                </span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-[11px] text-scotia-grey-400 text-center px-2 leading-relaxed">
          Based on your recurring transactions and scheduled payments. Estimates only.
        </p>
      </div>
    </div>
  );
}
