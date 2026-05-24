import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, TrendingUp, Shield, DollarSign, XCircle, CheckCircle, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { LIVING_RISK_PROFILE } from '../data/mockData';

const signalIcons = [TrendingUp, Shield, DollarSign];

export default function RiskProfileScreen() {
  const navigate = useNavigate();
  const [toastVisible, setToastVisible] = useState(false);

  const handleReviewAllocation = () => {
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 2500);
  };

  return (
    <motion.div
      className="px-4 py-4 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {toastVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-2 left-4 right-4 bg-scotia-grey-900 text-white text-[12px] font-medium px-4 py-3 rounded-xl z-50 text-center shadow-lg"
        >
          Feature coming in full release
        </motion.div>
      )}

      <div className="flex items-center gap-3 mb-4">
        <button onClick={() => navigate('/')} className="bg-transparent border-none cursor-pointer p-1 -ml-1 text-scotia-grey-700">
          <ArrowLeft size={22} />
        </button>
        <h1 className="text-[20px] font-bold text-scotia-grey-900">Risk Profile</h1>
      </div>

      {/* Alert */}
      <div className="rounded-2xl p-4 mb-4 shadow-sm" style={{ backgroundColor: '#FFF8E1', border: '1px solid rgba(230,81,0,0.2)' }}>
        <span className="inline-block bg-scotia-red text-white text-[10px] font-bold uppercase px-2 py-0.5 rounded-full mb-2">Updated</span>
        <p className="text-[15px] font-bold text-scotia-grey-900">{LIVING_RISK_PROFILE.previousRisk} &rarr; {LIVING_RISK_PROFILE.currentRisk}</p>
        <p className="text-[12px] text-scotia-grey-500 mt-1">Based on 90 days of your financial behaviour</p>
        <p className="text-[11px] text-scotia-grey-400 mt-0.5">{LIVING_RISK_PROFILE.triggerDate}</p>
      </div>

      {/* Signals */}
      <div className="mb-4">
        <h2 className="text-[13px] font-semibold text-scotia-grey-600 uppercase tracking-[0.5px] mb-3">Signals detected</h2>
        <div className="space-y-2">
          {LIVING_RISK_PROFILE.signals.map((signal, i) => {
            const Icon = signalIcons[i];
            return (
              <div key={i} className="bg-white rounded-2xl p-3.5 border border-scotia-grey-100 shadow-sm flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-scotia-green-light flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-scotia-green" />
                </div>
                <div>
                  <p className="text-[11px] text-scotia-grey-400 uppercase tracking-[0.5px]">{signal.label}</p>
                  <p className="text-[13px] font-semibold text-scotia-grey-900">{signal.value}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Comparison */}
      <div className="mb-4">
        <h2 className="text-[13px] font-semibold text-scotia-grey-600 uppercase tracking-[0.5px] mb-3">Why this is different</h2>
        <div className="rounded-2xl overflow-hidden border border-scotia-grey-100 shadow-sm flex">
          <div className="flex-1 p-4 bg-scotia-grey-50">
            <XCircle size={16} className="text-scotia-grey-400 mb-1.5" />
            <p className="text-[11px] font-bold text-scotia-grey-400 uppercase tracking-[0.5px] mb-1">Other banks</p>
            <p className="text-[12px] text-scotia-grey-600 leading-relaxed">Ask 5 questions once. Never update.</p>
          </div>
          <div className="flex-1 p-4 bg-scotia-red text-white">
            <CheckCircle size={16} className="text-white/80 mb-1.5" />
            <p className="text-[11px] font-bold text-white/80 uppercase tracking-[0.5px] mb-1">Scotia One</p>
            <p className="text-[12px] text-white/80 leading-relaxed">Watches how you live. Updates with you.</p>
          </div>
        </div>
      </div>

      {/* Recommendation */}
      <div className="rounded-2xl p-4 bg-white border border-scotia-grey-100 shadow-sm border-l-[3px] border-l-scotia-red mb-4">
        <p className="text-[13px] text-scotia-grey-700 leading-relaxed">{LIVING_RISK_PROFILE.recommendation}</p>
        <button
          onClick={handleReviewAllocation}
          className="w-full bg-scotia-red hover:bg-scotia-red-dark text-white font-semibold text-[14px] py-3 px-6 rounded-full transition-all cursor-pointer border-none mt-4 flex items-center justify-center gap-1"
        >
          Review my allocation <ChevronRight size={16} />
        </button>
        <p className="text-[10px] text-scotia-grey-400 text-center mt-2">Any changes require your confirmation</p>
      </div>
    </motion.div>
  );
}
