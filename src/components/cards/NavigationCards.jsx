import { Trophy, Tag, ShoppingCart, ChevronRight } from 'lucide-react';

const cards = [
  { icon: Trophy, label: 'Benefits', iconColor: 'text-[#FFD700]' },
  { icon: Tag, label: 'Offers and more', iconColor: 'text-scotia-pink' },
  { icon: ShoppingCart, label: 'Discover products', iconColor: 'text-scotia-teal' },
];

export default function NavigationCards() {
  return (
    <div className="space-y-3">
      {cards.map((card) => (
        <div
          key={card.label}
          className="bg-white rounded-2xl p-4 flex items-center justify-between hover:bg-scotia-grey-50 transition-colors cursor-pointer shadow-sm"
        >
          <div className="flex items-center gap-4">
            <card.icon size={28} className={card.iconColor} />
            <span className="text-scotia-grey-900 font-medium text-[15px]">{card.label}</span>
          </div>
          <ChevronRight size={18} className="text-scotia-teal" />
        </div>
      ))}
    </div>
  );
}
