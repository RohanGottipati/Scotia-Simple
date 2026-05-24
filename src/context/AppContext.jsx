import { createContext, useContext, useState } from 'react';
import { BALANCES, MOMENTS_HISTORY, TOTAL_FOUND_THIS_YEAR, USER, INITIAL_TRADING_HOLDINGS } from '../data/mockData';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [balances, setBalances] = useState(BALANCES);
  const [momentConfirmed, setMomentConfirmed] = useState(false);
  const [lastConfirmedAmount, setLastConfirmedAmount] = useState(0);
  const [hasTfsa, setHasTfsa] = useState(USER.hasTfsa);
  const [hasTradingAccount, setHasTradingAccount] = useState(false);
  const [tradingHoldings, setTradingHoldings] = useState(INITIAL_TRADING_HOLDINGS);
  const [history, setHistory] = useState(MOMENTS_HISTORY);
  const [totalFoundThisYear, setTotalFoundThisYear] = useState(TOTAL_FOUND_THIS_YEAR);

  const confirmMoment = (amount) => {
    setLastConfirmedAmount(amount);
    setBalances(prev => ({
      ...prev,
      chequing: prev.chequing - amount,
      tfsa: prev.tfsa + amount,
      tfsaRoomRemaining: prev.tfsaRoomRemaining - amount,
      netWorth: prev.netWorth,
    }));
    setHistory(prev =>
      prev.map(m => m.id === 'hist-001' ? { ...m, status: 'completed' } : m)
    );
    setTotalFoundThisYear(prev => prev + amount);
    setMomentConfirmed(true);
  };

  const openTfsa = (withTrading = false) => {
    setHasTfsa(true);
    if (withTrading) setHasTradingAccount(true);
  };

  const buyStock = (symbol, quantity, price) => {
    const cost = quantity * price;
    setBalances(prev => ({ ...prev, chequing: parseFloat((prev.chequing - cost).toFixed(2)) }));
    setTradingHoldings(prev => {
      const existing = prev.find(h => h.symbol === symbol);
      if (existing) {
        const totalShares = existing.shares + quantity;
        const newAvgCost = parseFloat(((existing.shares * existing.avgCost + quantity * price) / totalShares).toFixed(2));
        return prev.map(h => h.symbol === symbol ? { ...h, shares: totalShares, avgCost: newAvgCost } : h);
      }
      return [...prev, { symbol, shares: quantity, avgCost: parseFloat(price.toFixed(2)) }];
    });
  };

  const sellStock = (symbol, quantity, price) => {
    const proceeds = quantity * price;
    setBalances(prev => ({ ...prev, chequing: parseFloat((prev.chequing + proceeds).toFixed(2)) }));
    setTradingHoldings(prev => {
      const existing = prev.find(h => h.symbol === symbol);
      if (!existing) return prev;
      const remaining = existing.shares - quantity;
      if (remaining <= 0) return prev.filter(h => h.symbol !== symbol);
      return prev.map(h => h.symbol === symbol ? { ...h, shares: remaining } : h);
    });
  };

  return (
    <AppContext.Provider value={{
      balances,
      momentConfirmed,
      lastConfirmedAmount,
      hasTfsa,
      hasTradingAccount,
      tradingHoldings,
      history,
      totalFoundThisYear,
      confirmMoment,
      openTfsa,
      buyStock,
      sellStock,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
