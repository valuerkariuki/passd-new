'use client';

import Link from 'next/link';

export default function HomePage() {
  const handleScrollToPackages = () => {
    const element = document.getElementById('packages');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-slate-50">
      
      {/* 1. HERO SECTION - Updated CTA */}
      <section className="py-20 px-6 text-center bg-white border-b border-slate-100">
        <h1 className="text-5xl md:text-7xl font-extrabold text-[#00172D] mb-6 tracking-tight">
          Find the Right <span className="text-[#C9A050]">APC Counsellor</span>
        </h1>
        <div className="flex justify-center">
          <button 
            onClick={handleScrollToPackages} 
            className="px-8 py-4 bg-[#00172D] text-white rounded-xl font-bold hover:bg-slate-800 transition"
          >
            View APC Packages
          </button>
        </div>
      </section>

      {/* 2. PROMINENT GET STARTED BANNER */}
      <section className="py-16 px-6 max-w-5xl mx-auto -mt-10">
        <div className="bg-[#00172D] text-white p-10 rounded-3xl shadow-2xl border-2 border-[#C9A050]">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">Getting Started: 30-Minute Intro Call</h2>
              <p className="text-slate-300 mb-6 font-medium">Best for: Surveyors who want to know the best sector, pathway, and what to expect along the APC journey.</p>
              <ul className="space-y-2 mb-6 text-sm text-slate-300">
                <li>✓ Tell me your story</li>
                <li>✓ Sector and Pathway selection guidance</li>
                <li>✓ Guidance on next steps</li>
              </ul>
            </div>
            <div className="bg-white text-[#00172D] p-6 rounded-2xl w-full md:w-80 shadow-lg text-center">
              <div className="text-lg font-bold mb-4">Choose your speed:</div>
              <div className="space-y-3 mb-6">
                <div className="p-2 border border-slate-200 rounded-lg text-sm font-semibold">5 Working Days: £45</div>
                <div className="p-2 border border-slate-200 rounded-lg text-sm font-semibold">Within 24 Hours: £60</div>
              </div>
              <Link href="/start" className="block w-full py-3 bg-[#C9A050] text-white rounded-xl font-bold hover:bg-opacity-90 transition">
                Get started today
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ENHANCED APC SERVICE PACKAGES */}
      <section id="packages" className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold center text-[#00172D] mb-16 text-center">APC Service Packages</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { title: "Express", price: "500", months: "3", desc: "Senior Professional/RPQ focus." },
            { title: "Intensive", price: "700", months: "6", desc: "For fast-track, motivated candidates." },
            { title: "Balanced", price: "1300", months: "12", desc: "Flagship, end-to-end mentorship.", popular: true },
            { title: "FlexPath", price: "2500", months: "24", desc: "Long-term, flexible support." },
          ].map((pkg) => (
            <div key={pkg.title} className={`p-8 rounded-3xl border ${pkg.popular ? 'border-2 border-[#C9A050] shadow-xl' : 'border-slate-200'} bg-white flex flex-col`}>
              {pkg.popular && <span className="text-[#C9A050] text-xs font-bold uppercase tracking-widest mb-2">Most Popular</span>}
              <h3 className="text-2xl font-bold text-[#00172D]">{pkg.title}</h3>
              <div className="text-4xl font-extrabold my-4 text-[#00172D]">£{pkg.price}</div>
              <p className="text-sm text-slate-500 mb-6 flex-grow">{pkg.months} months support: {pkg.desc}</p>
              
              <Link 
                href={`/apply?package=${pkg.title}&price=${pkg.price}&id=${pkg.title.toLowerCase()}`}
                className="block w-full py-3 bg-[#00172D] text-white text-center rounded-xl font-bold hover:bg-slate-800 transition"
              >
                Get a Counsellor
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FREE RESOURCES */}
      <section className="py-20 px-6 bg-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#00172D] mb-12">Free APC Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {['Ask the Assessor', 'Five APC Pitfalls', 'Five Keys to APC Success', 'Final Countdown'].map((res) => (
              <div key={res} className="p-6 bg-white border border-slate-200 rounded-2xl flex justify-between items-center shadow-sm">
                <h4 className="font-bold text-[#00172D]">{res}</h4>
                <Link href="/contact" className="text-[#C9A050] font-bold">Book now</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}