'use client';

import Link from 'next/link';

export default function HomePage() {
  const handleScrollToPackages = () => {
    const element = document.getElementById('packages');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const packages = [
    { 
      title: "Express", price: "500", months: "3", desc: "Senior Professional/RPQ (direct entry) focus.", popular: false,
      features: ["Onboarding meeting", "Case study selection", "Expectation setting", "Structured planning", "Monthly support", "Unlimited doc reviews", "1 mock interview"]
    },
    { 
      title: "Intensive", price: "700", months: "6", desc: "For fast-track, motivated candidates.", popular: false,
      features: ["Onboarding meeting", "Competency/Pathway guidance", "Structured planning", "Monthly support", "Unlimited doc reviews", "1 guest + 1 personal mock interview"]
    },
    { 
      title: "Balanced", price: "1300", months: "12", desc: "For candidates who want structured guidance, balanced pacing, and consistent support.", popular: true,
      features: ["Onboarding meeting", "Pathway alignment", "Structured planning", "Monthly support", "Unlimited doc reviews", "1 guest + 1 personal mock interview"]
    },
    { 
      title: "FlexPath", price: "2500", months: "24", desc: "Ideal for candidates who prefer a more flexible APC timeline.", popular: false,
      features: ["Onboarding meeting", "Pathway alignment", "Structured planning", "Quarterly support", "Unlimited doc reviews", "2 guest + 1 personal mock interview"]
    },
  ];

  const resources = [
    { title: 'Ask the Assessor', date: '2 July 2026', link: 'https://www.rics.org/training-events' },
    { title: 'Five APC Pitfalls', date: '1 June / 5 Aug 2026', link: 'https://www.rics.org/training-events' },
    { title: 'Five Keys to APC Success', date: '20 July 2026', link: 'https://www.rics.org/training-events' },
    { title: 'Final Countdown', date: '8 June / 15 July 2026', link: 'https://www.rics.org/training-events' },
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      
      {/* HERO SECTION */}
      <section className="py-20 px-6 text-center bg-white border-b border-slate-100">
        <h1 className="text-5xl md:text-7xl font-extrabold text-[#00172D] mb-6 tracking-tight">
          Find the Right <span className="text-[#C9A050]">APC Counsellor</span>
        </h1>
        <div className="flex justify-center">
          <button onClick={handleScrollToPackages} className="px-8 py-4 bg-[#00172D] text-white rounded-xl font-bold hover:bg-slate-800 transition">
            View APC Packages
          </button>
        </div>
      </section>

      {/* GET STARTED BANNER */}
      <section className="py-16 px-6 max-w-5xl mx-auto -mt-10">
        <div className="bg-[#00172D] text-white p-10 rounded-3xl shadow-2xl border-2 border-[#C9A050]">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">Getting Started: 30-Minute Intro Call</h2>
              <p className="text-slate-300 mb-6 font-medium">Best for: Surveyors who want to know the best sector, pathway, and what to expect along the APC journey.</p>
            </div>
            <div className="bg-white text-[#00172D] p-6 rounded-2xl w-full md:w-80 shadow-lg text-center">
              <div className="text-lg font-bold mb-4">Choose your speed:</div>
              <Link href="/start" className="block w-full py-3 bg-[#C9A050] text-white rounded-xl font-bold hover:bg-opacity-90 transition">
                Get started today
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* APC SERVICE PACKAGES */}
      <section id="packages" className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-[#00172D] mb-16 text-center">APC Service Packages</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {packages.map((pkg) => (
            <div key={pkg.title} className={`p-6 rounded-3xl border ${pkg.popular ? 'border-2 border-[#C9A050] shadow-xl' : 'border-slate-200'} bg-white flex flex-col`}>
              {pkg.popular && <span className="text-[#C9A050] text-xs font-bold uppercase tracking-widest mb-2">Most Popular</span>}
              <h3 className="text-xl font-bold text-[#00172D]">{pkg.title}</h3>
              <div className="text-3xl font-extrabold my-3 text-[#00172D]">£{pkg.price}</div>
              <p className="text-xs text-slate-500 mb-4 font-semibold">{pkg.months} months support: {pkg.desc}</p>
              
              <ul className="text-xs text-slate-600 space-y-2 mb-6 flex-grow">
                {pkg.features.map((feature, i) => (
                  <li key={i}>✓ {feature}</li>
                ))}
              </ul>

              <Link href={`/apply?package=${pkg.title}`} className="block w-full py-3 bg-[#00172D] text-white text-center rounded-xl font-bold hover:bg-slate-800 transition">
                Get a Counsellor
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FREE RESOURCES */}
      <section className="py-20 px-6 bg-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#00172D] mb-12">Free APC Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {resources.map((res) => (
              <div key={res.title} className="p-6 bg-white border border-slate-200 rounded-2xl flex justify-between items-center shadow-sm">
                <div className="text-left">
                  <h4 className="font-bold text-[#00172D]">{res.title}</h4>
                  <p className="text-xs text-slate-500">{res.date}</p>
                </div>
                <a href={res.link} target="_blank" rel="noopener noreferrer" className="text-[#C9A050] font-bold">Book now</a>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <a href="https://www.rics.org/news-insights/rics-podcasts" target="_blank" rel="noopener noreferrer" className="text-[#00172D] font-bold underline">
              View Free RICS CPD Podcasts
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}