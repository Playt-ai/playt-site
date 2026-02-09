'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaTruck, FaStar, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const vendors = [
  {
    name: 'Fresh Farms',
    items: ['Tomatoes', 'Lettuce', 'Onions'],
    subtotal: 142.50,
    deliveryFee: 15.00,
    deliveryDays: 1,
    reliability: 98,
  },
  {
    name: 'Quality Meats',
    items: ['Chicken Breast', 'Ground Beef'],
    subtotal: 215.75,
    deliveryFee: 20.00,
    deliveryDays: 2,
    reliability: 95,
  },
  {
    name: 'Restaurant Depot',
    items: ['Olive Oil', 'Flour', 'Sugar'],
    subtotal: 89.00,
    deliveryFee: 0,
    deliveryDays: 3,
    reliability: 92,
  },
];

export default function VendorChoiceMockup() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [expanded, setExpanded] = useState(0);

  const totalCost = vendors.reduce((sum, v) => sum + v.subtotal + v.deliveryFee, 0);

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
        <h3 className="font-semibold text-gray-900">Vendor Orders</h3>
        <p className="text-sm text-gray-500">Review and send purchase orders</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50">
        {[
          { label: 'Vendors', value: '3', icon: FaTruck },
          { label: 'Total Cost', value: `$${totalCost.toFixed(0)}`, icon: null },
          { label: 'Avg Reliability', value: '95%', icon: FaStar },
        ].map((stat, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-xl p-3 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: i * 0.1 + 0.3 }}
          >
            <p className="text-xl font-bold text-gray-900">{stat.value}</p>
            <p className="text-xs text-gray-500">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Vendor List */}
      <div className="p-4 space-y-3">
        {vendors.map((vendor, i) => (
          <motion.div
            key={i}
            className="border border-gray-100 rounded-xl overflow-hidden"
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: i * 0.1 + 0.5 }}
          >
            <button
              onClick={() => setExpanded(expanded === i ? -1 : i)}
              className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-playt-purple-100 flex items-center justify-center">
                  <FaTruck className="w-5 h-5 text-playt-purple" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-900">{vendor.name}</p>
                  <p className="text-xs text-gray-500">
                    {vendor.items.length} items • {vendor.deliveryDays} day delivery • {vendor.reliability}% reliable
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <p className="font-bold text-gray-900">${(vendor.subtotal + vendor.deliveryFee).toFixed(2)}</p>
                  {vendor.deliveryFee > 0 && (
                    <p className="text-xs text-gray-500">+${vendor.deliveryFee.toFixed(2)} delivery</p>
                  )}
                </div>
                {expanded === i ? <FaChevronUp className="w-4 h-4 text-gray-400" /> : <FaChevronDown className="w-4 h-4 text-gray-400" />}
              </div>
            </button>

            {expanded === i && (
              <motion.div
                className="px-4 pb-4 border-t border-gray-100 pt-3"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.2 }}
              >
                <div className="space-y-2">
                  {vendor.items.map((item, j) => (
                    <div key={j} className="flex items-center justify-between text-sm py-1">
                      <span className="text-gray-700">{item}</span>
                      <span className="text-gray-500">Included</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <motion.div
        className="px-6 py-4 border-t border-gray-100 bg-gray-50 flex items-center justify-between"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.9 }}
      >
        <div>
          <p className="text-sm text-gray-500">Total Order Value</p>
          <p className="text-2xl font-bold text-gray-900">${totalCost.toFixed(2)}</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-playt-purple text-white rounded-xl font-medium hover:bg-playt-purple-600 transition-colors">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
          Send All Orders
        </button>
      </motion.div>
    </motion.div>
  );
}
