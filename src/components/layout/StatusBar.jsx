import { Search } from 'lucide-react';
import { USER } from '../../data/mockData';

export default function StatusBar() {
  const now = new Date();
  const hour = now.getHours();
  const greeting = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';

  return (
    <header className="bg-scotia-red text-white px-5 pt-2 pb-2">
      <div className="flex items-center justify-between mb-2">
        <img src="/icon.webp" alt="Scotiabank" className="h-8 w-auto" />
        <button className="flex items-center gap-1.5 bg-white/20 hover:bg-white/25 transition-colors rounded-full px-3 py-1.5 cursor-pointer border-none">
          <Search size={13} />
          <span className="text-[12px] font-medium">Search &amp; chat</span>
        </button>
      </div>
      <h1 className="text-[22px] font-extrabold leading-tight">
        {greeting}, {USER.firstName}
      </h1>
    </header>
  );
}
