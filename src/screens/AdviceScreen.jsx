import { useState } from 'react';
import { ChevronLeft, ChevronRight, Search, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const insightsData = [
  {
    id: 1,
    date: 'MAY 24',
    title: 'Your 30-day forecast',
    description: 'Check transactions expected on your accounts from May 24 to Jun 23.',
    moneyIn: '$129.27',
    moneyOut: '$2,249.17',
    chart: [60, 80, 50, 70, 65, 40],
  },
  {
    id: 2,
    date: 'MAY 24',
    title: 'May spending',
    description: 'Review your spending so far this month.',
    amount: '$383',
    chart: [50, 70, 40, 60, 55, 85],
  },
  {
    id: 3,
    date: 'MAY 04',
    title: 'Your spending increased',
    description: 'In April, you spent approximately 31% more at Tim Hortons than usual.',
    amount: '$131',
    chart: [50, 60, 40, 65, 90],
  },
  {
    id: 4,
    date: 'MAY 04',
    title: 'Monthly shopping review',
    description: "Let's review your purchases from new merchants in April.",
    hasIllustration: true,
  },
];

function InsightCard({ insight }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-scotia-grey-100 w-full">
      <div className="px-4 py-3">
        {insight.moneyIn && insight.moneyOut ? (
          <div className="flex gap-6 mb-3">
            <div>
              <div className="text-[17px] font-bold text-scotia-grey-900 mb-0.5">{insight.moneyIn}</div>
              <div className="text-[11px] text-scotia-grey-500">Money in</div>
            </div>
            <div>
              <div className="text-[17px] font-bold text-scotia-grey-900 mb-0.5">{insight.moneyOut}</div>
              <div className="text-[11px] text-scotia-grey-500">Money out</div>
            </div>
          </div>
        ) : insight.hasIllustration ? (

          <div className="mb-2 h-16 rounded-xl overflow-hidden bg-gradient-to-br from-yellow-100 to-yellow-50 relative">
            <div className="absolute top-4 right-6 w-20 h-20 bg-white rounded-xl shadow transform rotate-12">
              <div className="absolute top-2 left-2 w-7 h-1.5 bg-scotia-purple rounded" />
              <div className="absolute top-5 left-2 w-10 h-1 bg-scotia-grey-200 rounded" />
              <div className="absolute top-7 left-2 w-8 h-1 bg-scotia-grey-200 rounded" />
              <div className="absolute bottom-4 left-2 w-12 h-2.5 bg-scotia-gold rounded" />
            </div>
            <div className="absolute top-6 right-2 w-14 h-14 border-4 border-scotia-purple/40 rounded-full" />
          </div>
        ) : (
          <div className="mb-3">
            <div className="flex items-end justify-center gap-1.5 h-12 mb-1">
              {insight.chart?.map((height, i) => (
                <div
                  key={i}
                  className={`w-7 rounded-t ${i === insight.chart.length - 1 ? 'bg-scotia-teal' : 'bg-scotia-grey-200'}`}
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
            <div className="text-center text-[20px] font-bold text-scotia-grey-900 mb-1">
              {insight.amount}
            </div>
          </div>
        )}

        <div className="text-[10px] text-scotia-grey-400 tracking-wider mb-0.5">{insight.date}</div>
        <h3 className="text-[14px] font-semibold text-scotia-grey-900 mb-0.5">{insight.title}</h3>
        <p className="text-[12px] text-scotia-grey-500 mb-2">{insight.description}</p>
        <a href="#" className="text-scotia-teal text-[12px] font-medium">View details</a>
      </div>
    </div>
  );
}

export default function AdviceScreen() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % insightsData.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + insightsData.length) % insightsData.length);

  return (
    <div className="bg-scotia-grey-50 pb-4">
      {/* Header */}
      <div className="px-5 pt-4 pb-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-[22px] font-bold text-scotia-grey-900">Advice+</h1>
          <button className="w-9 h-9 rounded-full bg-white border border-scotia-grey-200 flex items-center justify-center shadow-sm">
            <Search size={16} className="text-scotia-grey-600" />
          </button>
        </div>

        <p className="text-[13px] text-scotia-grey-500 text-center leading-relaxed mb-4">
          Your saving, budgeting, and investing dashboard.{' '}
          Scotia Smart Money tools put you in control.
        </p>

        <div className="w-10 h-0.5 bg-scotia-red mx-auto mb-5" />

        {/* Insights */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="text-[18px]">💡</span>
              <h2 className="text-[17px] font-semibold text-scotia-grey-900">Insights</h2>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={prevSlide} className="text-scotia-grey-400 hover:text-scotia-grey-900 bg-transparent border-none cursor-pointer">
                <ChevronLeft size={18} />
              </button>
              <span className="text-[12px] text-scotia-grey-500 tracking-wider">
                {currentSlide + 1} OF {insightsData.length}
              </span>
              <button onClick={nextSlide} className="text-scotia-grey-400 hover:text-scotia-grey-900 bg-transparent border-none cursor-pointer">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-out gap-3"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {insightsData.map((insight) => (
                <div key={insight.id} className="min-w-full">
                  <InsightCard insight={insight} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Savings Tool Promo */}
      <div className="px-5 mb-3">
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-scotia-grey-100 relative overflow-hidden">
          <button className="absolute top-3 right-3 w-7 h-7 rounded-full bg-scotia-grey-100 flex items-center justify-center border-none cursor-pointer">
            <ChevronRight size={14} className="text-scotia-teal" />
          </button>
          <h3 className="text-[15px] font-semibold text-scotia-grey-900 mb-2 pr-8">
            Get a smart savings tool that boosts every dollar you save
          </h3>
          <p className="text-[12px] text-scotia-grey-500 mb-4">
            Open a Money Master Savings Account and use a smart savings tool to reach your financial goals faster.
          </p>
          <div className="h-24 rounded-xl overflow-hidden bg-gradient-to-br from-scotia-green-light to-blue-50 flex items-center justify-center">
            <span className="text-[32px]">💰</span>
          </div>
        </div>
      </div>

      {/* Scotia Smart Investor */}
      <div className="px-5 mb-3">
        <div
          className="bg-white rounded-2xl p-4 shadow-sm border border-scotia-grey-100 flex items-center justify-between cursor-pointer hover:bg-scotia-grey-50 transition-colors"
          onClick={() => navigate('/smart-investor')}
        >
          <div className="pr-4">
            <h3 className="text-[15px] font-semibold text-scotia-grey-900 mb-1">Scotia Smart Investor</h3>
            <p className="text-[12px] text-scotia-grey-500">
              Get personalized investment advice, manage investments, create and track goals.
            </p>
          </div>
          <ChevronRight size={18} className="text-scotia-teal flex-shrink-0" />
        </div>
      </div>

      {/* Scotia Smart Trading */}
      <div className="px-5 mb-3">
        <div
          className="bg-white rounded-2xl p-4 shadow-sm border border-scotia-grey-100 flex items-center justify-between cursor-pointer hover:bg-scotia-grey-50 transition-colors"
          onClick={() => navigate('/smart-trading')}
        >
          <div className="pr-4">
            <h3 className="text-[15px] font-semibold text-scotia-grey-900 mb-1">Scotia Smart Trading</h3>
            <p className="text-[12px] text-scotia-grey-500">
              Trade stocks and ETFs, monitor your portfolio, and execute market or limit orders.
            </p>
          </div>
          <ChevronRight size={18} className="text-scotia-teal flex-shrink-0" />
        </div>
      </div>

      {/* TransUnion */}
      <div className="px-5 mb-3">
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-scotia-grey-100 flex items-center justify-between">
          <h3 className="text-[15px] font-semibold text-scotia-grey-900">TransUnion Credit Score</h3>
          <ChevronRight size={18} className="text-scotia-teal" />
        </div>
      </div>

      {/* Manage */}
      <div className="px-5 mb-3">
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-scotia-grey-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Settings size={18} className="text-scotia-teal" />
            <h3 className="text-[15px] font-semibold text-scotia-grey-900">Manage</h3>
          </div>
          <ChevronRight size={18} className="text-scotia-teal" />
        </div>
      </div>

      {/* Feedback */}
      <div className="px-5 mb-3">
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-scotia-grey-100">
          <h3 className="text-[15px] font-semibold text-scotia-grey-900 mb-1">Let us know what you think</h3>
          <p className="text-[12px] text-scotia-grey-500 mb-3">
            Your feedback helps us improve the Advice+ experience.
          </p>
          <a href="#" className="text-scotia-teal text-[13px] font-medium">Provide feedback</a>
        </div>
      </div>

      {/* Legal */}
      <div className="px-5 pb-2">
        <h4 className="text-[12px] font-semibold text-scotia-grey-700 mb-1">Legal disclaimer</h4>
        <p className="text-[11px] text-scotia-grey-400 leading-relaxed">
          If you have any questions about whether any recommended action, insight or product is right for you, please{' '}
          <a href="#" className="text-scotia-teal">contact us</a>.
        </p>
      </div>
    </div>
  );
}
