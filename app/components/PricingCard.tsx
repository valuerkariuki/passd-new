'use client';
import { motion } from 'framer-motion';

export default function PricingCard({ title, price, duration, desc, features, isFlagship }: any) {
  // We pass the package details to the /apply page via URL parameters
  const queryParams = `?package=${encodeURIComponent(title)}&price=${encodeURIComponent(price)}`;

  return (
    <motion.div 
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className={`flex flex-col p-8 rounded-3xl border transition-all duration-300 ${
        isFlagship 
          ? 'border-2 border-[#C9A050] shadow-2xl bg-white scale-105' 
          : 'border-slate-200 bg-white hover:shadow-xl'
      }`}
    >
      {isFlagship && (
        <span className="text-[#C9A050] font-bold text-xs uppercase mb-4 tracking-widest">
          Most Popular
        </span>
      )}
      
      <h3 className="text-2xl font-bold text-[#00172D] mb-2">{title}</h3>
      <p className="text-slate-500 text-sm mb-4">{duration}</p>
      <div className="text-4xl font-extrabold text-[#00172D] mb-6">£{price}</div>
      <p className="text-slate-600 mb-8 flex-grow">{desc}</p>
      
      <ul className="space-y-3 mb-8 text-sm">
        {features.map((f: string) => (
          <li key={f} className="flex items-center text-slate-700">
            <span className="mr-2 text-[#C9A050]">✓</span> {f}
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        <a 
          href={`/apply${queryParams}`} 
          className="block w-full py-4 bg-[#00172D] text-white text-center rounded-xl font-bold hover:bg-slate-800 transition"
        >
          Get a Counsellor
        </a>
      </div>
    </motion.div>
  );
}