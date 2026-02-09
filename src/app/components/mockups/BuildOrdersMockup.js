'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaCheck, FaMinus, FaPlus } from 'react-icons/fa';

const orderItems = [
  { name: 'Tomatoes', category: 'Produce', currentStock: 15, parLevel: 50, suggestedQty: 40, unit: 'lbs', price: 2.50, vendor: 'Fresh Farms' },
  { name: 'Chicken Breast', category: 'Protein', currentStock: 25, parLevel: 40, suggestedQty: 30, unit: 'lbs', price: 4.25, vendor: 'Quality Meats' },
  { name: 'Olive Oil', category: 'Pantry', currentStock: 8, parLevel: 12, suggestedQty: 6, unit: 'gal', price: 18.00, vendor: 'Restaurant Depot' },
];

const categoryColors = {
  Produce: 'bg-green-100 text-green-700',
  Protein: 'bg-red-100 text-red-700',
  Pantry: 'bg-amber-100 text-amber-700',
};

export default function BuildOrdersMockup() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [selected, setSelected] = useState(new Set([0, 1, 2]));
  const [quantities, setQuantities] = useState(orderItems.map(i => i.suggestedQty));

  const toggleItem = (index) => {
    const newSelected = new Set(selected);
    if (newSelected.has(index)) {
      newSelected.delete(index);
    } else {
      newSelected.add(index);
    }
    setSelected(newSelected);
  };

  const updateQuantity = (index, delta) => {
    setQuantities(prev => {
      const newQty = [...prev];
      newQty[index] = Math.max(0, newQty[index] + delta);
      return newQty;
    });
  };

  const total = orderItems.reduce((sum, item, i) => {
    if (selected.has(i)) {
      return sum + quantities[i] * item.price;
    }
    return sum;
  }, 0);

  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-2xl shadow-soft-xl border border-gray-100 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-gray-900">Build Orders</h3>
            <p className="text-sm text-gray-500">AI-suggested quantities for next week</p>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-playt-purple-100 rounded-lg text-sm text-playt-purple-700">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            AI Optimized
          </div>
        </div>
      </div>

      {/* Order Items */}
      <div className="p-4 space-y-3">
        {orderItems.map((item, i) => (
          <motion.div
            key={i}
            className={`p-4 rounded-xl border transition-all ${
              selected.has(i) ? 'border-playt-purple bg-playt-purple-50/30' : 'border-gray-100 opacity-50'
            }`}
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: i * 0.1 + 0.3 }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => toggleItem(i)}
                  className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-colors ${
                    selected.has(i)
                      ? 'bg-playt-purple border-playt-purple text-white'
                      : 'border-gray-300 hover:border-playt-purple'
                  }`}
                >
                  {selected.has(i) && <FaCheck className="w-3 h-3" />}
                </button>
                <div>
                  <p className="font-medium text-gray-900">{item.name}</p>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs px-2 py-0.5 rounded-full ${categoryColors[item.category]}`}>
                      {item.category}
                    </span>
                    <span className="text-xs text-gray-500">{item.vendor}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6">
                {/* Stock indicator */}
                <div className="text-right">
                  <p className="text-xs text-gray-500">Current Stock</p>
                  <p className="text-sm font-medium text-gray-700">
                    {item.currentStock}/{item.parLevel} {item.unit}
                  </p>
                </div>

                {/* Quantity adjuster */}
                <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-1">
                  <button
                    onClick={() => updateQuantity(i, -5)}
                    className="p-1.5 hover:bg-gray-200 rounded transition-colors"
                  >
                    <FaMinus className="w-3 h-3 text-gray-600" />
                  </button>
                  <span className="w-16 text-center font-medium text-sm">
                    {quantities[i]} {item.unit}
                  </span>
                  <button
                    onClick={() => updateQuantity(i, 5)}
                    className="p-1.5 hover:bg-gray-200 rounded transition-colors"
                  >
                    <FaPlus className="w-3 h-3 text-gray-600" />
                  </button>
                </div>

                {/* Subtotal */}
                <div className="w-20 text-right">
                  <p className="font-semibold text-gray-900">${(quantities[i] * item.price).toFixed(2)}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <motion.div
        className="px-6 py-4 border-t border-gray-100 bg-gray-50 flex items-center justify-between"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8 }}
      >
        <div>
          <p className="text-sm text-gray-500">Estimated Total</p>
          <p className="text-2xl font-bold text-gray-900">${total.toFixed(2)}</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-playt-purple text-white rounded-xl font-medium hover:bg-playt-purple-600 transition-colors">
          Review & Send Orders
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </motion.div>
    </motion.div>
  );
}
