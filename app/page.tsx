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
    { title: "Express", price: "500", months: "3", desc: "Senior Professional/RPQ (direct entry) focus.", popular: false, features: ["Onboarding meeting", "Case study selection", "Expectation setting", "Structured planning", "Monthly support", "Unlimited doc reviews", "1 mock interview"] },
    { title: "Intensive", price: "700", months: "6", desc: "For fast-track, motivated candidates.", popular: false, features: ["Onboarding meeting", "Competency/Pathway guidance", "Structured planning", "Monthly support", "Unlimited doc reviews", "1 guest + 1 personal mock interview"] },
    { title: "Balanced", price: "1300", months: "12", desc: "For candidates who want structured guidance, balanced pacing, and consistent support.", popular: true, features: ["Onboarding meeting", "Pathway alignment", "Structured planning", "Monthly support", "Unlimited doc reviews", "1 guest + 1 personal mock interview"] },
    { title: "FlexPath", price: "2500", months: "24", desc: "Ideal for candidates who prefer a more flexible APC timeline.", popular: false, features: ["Onboarding meeting", "Pathway alignment", "Structured planning", "Quarterly support", "Unlimited doc reviews", "2 guest + 1 personal mock interview"] },
  ];

  const resources = [
    { title: 'Ask the Assessor', date: '2 July 2026', link: 'https://www.rics.org/training-events' },
    { title: 'Five APC Pitfalls', date: '1 June / 5 Aug 2026', link: 'https://www.rics.org/training-events' },
    { title: 'Five Keys to APC Success', date: '20 July 2026', link: 'https://www.rics.org/training-events' },
    { title: 'Final Countdown', date: '8 June / 15 July 2026', link: 'https://www.rics.org/training-events' },
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      <style jsx>{`
        .scrolling-container { width: 100%; overflow: hidden; background: transparent; padding: 20px 0; }
        .scrolling-text { display: flex; animation: scroll-left 20s linear infinite; gap: 20px; }
        .review-card { min-width: 280px; max-width: 280px; padding: 20px; background: white; border: 1px solid #e2e8f0; border-radius: 16px; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1); display: flex; flex-direction: column; justify-content: space-between; overflow: hidden; }
        @keyframes scroll-left { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
      `}</style>

      {/* HERO SECTION */}
      <section className="py-20 px-6 text-center bg-white border-b border-slate-100">
        <h1 className="text-5xl md:text-7xl font-extrabold text-[#00172D] mb-6 tracking-tight">Find the Right <span className="text-[#C9A050]">APC Counsellor</span></h1>
        <button onClick={handleScrollToPackages} className="px-8 py-4 bg-[#00172D] text-white rounded-xl font-bold hover:bg-slate-800 transition">View APC Packages</button>
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
              <Link href="/start" className="block w-full py-3 bg-[#C9A050] text-white rounded-xl font-bold hover:bg-opacity-90 transition">Get started today</Link>
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
              <ul className="text-xs text-slate-600 space-y-2 mb-6 flex-grow">
                {pkg.features.map((feature, i) => <li key={i}>✓ {feature}</li>)}
              </ul>
              <Link href={`/apply?package=${pkg.title}`} className="block w-full py-3 bg-[#00172D] text-white text-center rounded-xl font-bold hover:bg-slate-800 transition">Get a Counsellor</Link>
            </div>
          ))}
        </div>
      </section>

      {/* RESOURCES & NETWORK SECTION */}
      <section className="py-20 px-6 bg-slate-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#00172D] mb-12">Free APC Resources</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-20">
            {resources.map((res) => (
              <div key={res.title} className="p-6 bg-white border border-slate-200 rounded-2xl flex justify-between items-center shadow-sm">
                <div><h4 className="font-bold text-[#00172D]">{res.title}</h4><p className="text-xs text-slate-500">{res.date}</p></div>
                <a href={res.link} target="_blank" className="text-[#C9A050] font-bold">Book now</a>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-center text-[#00172D] mb-10">Candidate Success Stories</h2>
          <div className="scrolling-container mb-20">
            <div className="scrolling-text">
              {[...Array(2)].map((_, groupIndex) => [
                { name: "Onesmus Njoroge", text: "Passd.net helped me pass the Oct 2025 assessment!" },
                { name: "James Abawa", text: "My journey has been much easier thanks to passd.net." },
                { name: "Ruth Karuga", text: "Passd.net connected me with a great counsellor." },
                { name: "Godfrey Mungai", text: "Passd.net offered great support in my direct entry." }
              ].map((rev, i) => (
                <div key={`${groupIndex}-${i}`} className="review-card">
                  <p className="text-sm text-slate-700 italic mb-4 break-words">"{rev.text}"</p>
                  <p className="text-xs font-bold text-[#C9A050] truncate">— {rev.name}</p>
                </div>
              )))}
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#00172D] mb-8">Our Global Network</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[ 
                {n:"UK", bg:"linear-gradient(180deg, #012169 50%, #C8102E 50%)"}, 
                {n:"Saudi", bg:"#006C35"}, 
                {n:"Australia", bg:"#00008B"}, 
                {n:"Kenya", bg:"linear-gradient(180deg, #000000 33%, #9E1B32 33%, #9E1B32 66%, #006600 66%)"}, 
                {n:"Uganda", bg:"linear-gradient(180deg, #000000 25%, #FDC500 25%, #FDC500 50%, #FFFFFF 50%, #FFFFFF 75%, #000000 75%)"}, 
                {n:"Seychelles", bg:"linear-gradient(120deg, #003893 25%, #FCD856 25%, #FCD856 40%, #FFFFFF 40%, #FFFFFF 60%, #D62828 60%, #D62828 75%, #007A33 75%)"}, 
                {n:"UAE", bg:"linear-gradient(90deg, #FF0000 25%, #000000 25%, #000000 50%, #00732F 50%, #FFFFFF 75%, #FFFFFF 75%)"} 
              ].map((c) => (
                <div key={c.n} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm w-28 flex flex-col items-center">
                  <div className="w-12 h-8 rounded mb-2 shadow-inner border border-slate-100" style={{background: c.bg}}></div>
                  <div className="text-xs font-bold text-[#00172D]">{c.n}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}