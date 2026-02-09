'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const inventoryData = [
  { name: 'Tomatoes', category: 'Produce', stock: 15, parLevel: 50, unit: 'lbs', daysLeft: 1.2, status: 'critical' },
  { name: 'Chicken Breast', category: 'Protein', stock: 25, parLevel: 40, unit: 'lbs', daysLeft: 2.5, status: 'low' },
  { name: 'Olive Oil', category: 'Pantry', stock: 8, parLevel: 12, unit: 'gal', daysLeft: 4.0, status: 'low' },
  { name: 'Mozzarella', category: 'Dairy', stock: 35, parLevel: 30, unit: 'lbs', daysLeft: 7.0, status: 'adequate' },
];

const categoryColors = {
  Produce: 'bg-green-100 text-green-700',
  Protein: 'bg-red-100 text-red-700',
  Pantry: 'bg-amber-100 text-amber-700',
  Dairy: 'bg-blue-100 text-blue-700',
};

const statusColors = {
  critical: { bg: 'bg-red-100', text: 'text-red-600', bar: 'bg-red-500' },
  low: { bg: 'bg-amber-100', text: 'text-amber-600', bar: 'bg-amber-500' },
  adequate: { bg: 'bg-green-100', text: 'text-green-600', bar: 'bg-green-500' },
};

export default function InventoryDashboardMockup() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-2xl shadow-soft-xl border border-gray-100 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-gray-900">Inventory Dashboard</h3>
          <p className="text-sm text-gray-500">Real-time stock levels</p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-lg text-sm">
          <span className="w-2 h-2 rounded-full bg-green-500" />
          Live
        </div>
      </div>

      {/* KPI Row */}
      <div className="grid grid-cols-4 gap-4 p-4 bg-gray-50">
        {[
          { label: 'Total Items', value: '24', color: 'text-playt-purple' },
          { label: 'Low Stock', value: '3', color: 'text-red-600' },
          { label: 'Expiring Soon', value: '2', color: 'text-amber-600' },
          { label: 'On Order', value: '5', color: 'text-blue-600' },
        ].map((stat, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-xl p-3 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: i * 0.1 + 0.3 }}
          >
            <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
            <p className="text-xs text-gray-500">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Inventory Table */}
      <div className="p-4">
        <table className="w-full">
          <thead>
            <tr className="text-xs text-gray-500 border-b border-gray-100">
              <th className="text-left pb-3 font-medium">Item</th>
              <th className="text-left pb-3 font-medium">Stock Level</th>
              <th className="text-left pb-3 font-medium">Days Left</th>
              <th className="text-center pb-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {inventoryData.map((item, i) => (
              <motion.tr
                key={i}
                className="border-b border-gray-50"
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.1 + 0.5 }}
              >
                <td className="py-3">
                  <p className="font-medium text-gray-900 text-sm">{item.name}</p>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${categoryColors[item.category]}`}>
                    {item.category}
                  </span>
                </td>
                <td className="py-3">
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${statusColors[item.status].bar}`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${(item.stock / item.parLevel) * 100}%` } : {}}
                        transition={{ delay: i * 0.1 + 0.7, duration: 0.5 }}
                      />
                    </div>
                    <span className="text-xs text-gray-600">
                      {item.stock}/{item.parLevel} {item.unit}
                    </span>
                  </div>
                </td>
                <td className="py-3">
                  <span className={`text-sm font-medium ${item.daysLeft <= 2 ? 'text-red-600' : 'text-gray-600'}`}>
                    {item.daysLeft} days
                  </span>
                </td>
                <td className="py-3 text-center">
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${statusColors[item.status].bg} ${statusColors[item.status].text}`}>
                    {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                  </span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
