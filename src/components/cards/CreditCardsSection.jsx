import { useState } from 'react';
import { ChevronUp, ChevronDown, Plus } from 'lucide-react';
import { CREDIT_CARDS } from '../../data/mockData';

export default function CreditCardsSection() {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-4 hover:bg-scotia-grey-50 transition-colors cursor-pointer border-none bg-transparent"
      >
        <span className="text-scotia-red text-[17px] font-bold">
          Credit Cards ({CREDIT_CARDS.length})
        </span>
        {isExpanded ? (
          <ChevronUp size={20} className="text-scotia-red" />
        ) : (
          <ChevronDown size={20} className="text-scotia-red" />
        )}
      </button>

      {isExpanded && (
        <div className="border-t border-scotia-grey-200">
          {CREDIT_CARDS.map((card) => (
            <div
              key={card.last4}
              className="p-4 border-b border-scotia-grey-200 hover:bg-scotia-grey-50 transition-colors cursor-pointer"
            >
              <div className="flex items-baseline justify-between mb-1">
                <span className="text-scotia-grey-900 font-medium text-[15px]">{card.name}</span>
                <span className="text-scotia-grey-500 text-[13px]">({card.last4})</span>
              </div>
              <div className="text-scotia-grey-900 text-[17px] font-bold">
                ${card.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </div>
            </div>
          ))}

          <div className="p-4">
            <button className="flex items-center gap-2 text-scotia-teal font-medium text-[14px] hover:text-scotia-teal-dark transition-colors cursor-pointer bg-transparent border-none p-0">
              <span>Add card</span>
              <Plus size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
