import { useState } from 'react';
import { motion } from 'framer-motion';
import BankingSection from '../components/cards/BankingSection';
import CreditCardsSection from '../components/cards/CreditCardsSection';
import InvestmentsSection from '../components/cards/InvestmentsSection';
import QuickAccessCards from '../components/cards/QuickAccessCards';
import MyBalancesCard from '../components/cards/MyBalancesCard';
import NavigationCards from '../components/cards/NavigationCards';
import FeedbackSection from '../components/cards/FeedbackSection';
import MoneyMomentCard from '../components/cards/MoneyMomentCard';
import ScotiaOneAlert from '../components/cards/ScotiaOneAlert';
import ForecastAlert from '../components/cards/ForecastAlert';
import { useApp } from '../context/AppContext';

export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState('accounts');
  const [alertDismissed, setAlertDismissed] = useState(false);
  const [forecastDismissed, setForecastDismissed] = useState(false);
  const { momentConfirmed } = useApp();

  const notifCount = ((!momentConfirmed && !alertDismissed) ? 1 : 0) + (!forecastDismissed ? 1 : 0);

  return (
    <div className="bg-scotia-grey-50">
      {/* Accounts/Updates Tab Card - overlaps header */}
      <div className="bg-white rounded-t-3xl mx-4 mt-4 relative z-10 shadow-sm">
        <div className="flex border-b border-scotia-grey-200">
          <button
            onClick={() => setActiveTab('accounts')}
            className={`flex-1 py-4 text-[15px] font-semibold transition-colors relative cursor-pointer bg-transparent border-none ${
              activeTab === 'accounts' ? 'text-scotia-red' : 'text-scotia-grey-500'
            }`}
          >
            My accounts
            {activeTab === 'accounts' && (
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-scotia-red rounded-full" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('updates')}
            className={`flex-1 py-4 text-[15px] font-semibold transition-colors relative cursor-pointer bg-transparent border-none ${
              activeTab === 'updates' ? 'text-scotia-red' : 'text-scotia-grey-500'
            }`}
          >
            My updates
            {notifCount > 0 && (
              <span className="ml-2 inline-flex items-center justify-center w-6 h-6 text-[11px] font-bold text-scotia-red border-2 border-scotia-red rounded-md">
                {notifCount}
              </span>
            )}
            {activeTab === 'updates' && (
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-scotia-red rounded-full" />
            )}
          </button>
        </div>

        {activeTab === 'accounts' ? (
          <div className="p-4 space-y-4">
            <BankingSection />
            <CreditCardsSection />
            <InvestmentsSection />
          </div>
        ) : (
          <div className="py-3 space-y-0">
            {!momentConfirmed && !alertDismissed && (
              <ScotiaOneAlert onDismiss={() => setAlertDismissed(true)} />
            )}
            {!forecastDismissed && (
              <ForecastAlert onDismiss={() => setForecastDismissed(true)} />
            )}
            {(momentConfirmed || alertDismissed) && forecastDismissed && (
              <p className="text-[14px] text-scotia-grey-500 text-center py-4">No new updates</p>
            )}
          </div>
        )}
      </div>

      {/* Feed Cards */}
      <motion.div
        className="px-4 space-y-4 mt-4 pb-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <QuickAccessCards />

        <MyBalancesCard />
        <NavigationCards />
        <FeedbackSection />
      </motion.div>
    </div>
  );
}
