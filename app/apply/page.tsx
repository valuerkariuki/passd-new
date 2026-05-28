'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function ApplyForm() {
  const searchParams = useSearchParams();
  
  // Extract values from URL automatically
  const selectedPackage = searchParams.get('package') || 'Not Selected';
  const price = searchParams.get('price') || '0';
  const id = searchParams.get('id') || 'n-a';

  return (
    <main className="p-10 max-w-xl mx-auto bg-slate-50 min-h-screen">
      <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
        <h1 className="text-3xl font-bold text-[#00172D] mb-6">Complete Your Application</h1>
        <p className="text-slate-600 mb-8">
          You are applying for the: <strong className="text-[#00172D]">{selectedPackage}</strong> package (£{price}).
        </p>

        <form action="https://formspree.io/f/mvzylpaj" method="POST" className="space-y-6">
          {/* User Fields */}
          <input type="text" name="full_name" placeholder="Full Name" required className="w-full p-4 border border-slate-200 rounded-xl" />
          <input type="email" name="email" placeholder="Email Address" required className="w-full p-4 border border-slate-200 rounded-xl" />

          {/* International Matching Preference (Radio Buttons) */}
          <div className="p-4 border border-slate-200 rounded-xl bg-slate-50 space-y-4">
            <label className="font-bold text-[#00172D] block">International Counsellor Matching</label>
            <p className="text-sm text-slate-600">
              We work with MRICS/FRICS-qualified counsellors worldwide. Are you comfortable being matched with a highly qualified, English-speaking expert based outside of the UK? (Note: English may not be their first language, but they are fully proficient in APC requirements.)
            </p>
            
            <div className="flex gap-6">
              <label className="flex items-center gap-2 cursor-pointer font-medium">
                <input type="radio" name="global_counsellor_preference" value="yes" required className="w-4 h-4" />
                Yes
              </label>
              <label className="flex items-center gap-2 cursor-pointer font-medium">
                <input type="radio" name="global_counsellor_preference" value="no" required className="w-4 h-4" />
                No
              </label>
            </div>
          </div>

          {/* Hidden Fields: Populates automatically from URL */}
          <input type="hidden" name="selected_package" value={selectedPackage} />
          <input type="hidden" name="package_price" value={price} />
          <input type="hidden" name="package_id" value={id} />

          <button type="submit" className="w-full py-4 bg-[#C9A050] text-white rounded-xl font-bold hover:bg-opacity-90 transition shadow-md">
            Submit Application
          </button>
        </form>
      </div>
    </main>
  );
}

// Suspense wrapper for Next.js 13+ searchParams
export default function ApplyPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading application form...</div>}>
      <ApplyForm />
    </Suspense>
  );
}