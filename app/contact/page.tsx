'use client';

import { socialLinks } from '../config/socials';

export default function ContactPage() {
  return (
    <main className="max-w-2xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold text-[#00172D] mb-4">Contact Us</h1>
      <p className="text-slate-600 mb-10">
        We're here to help you succeed on your APC journey. Reach out with any questions.
      </p>
      
      {/* Contact Form */}
      <form action="https://formspree.io/f/mvzylpaj" method="POST" className="space-y-6">
        <div>
          <label className="block font-bold mb-2">Name</label>
          <input type="text" name="name" required className="w-full p-4 border rounded-xl" />
        </div>
        
        <div>
          <label className="block font-bold mb-2">Email</label>
          <input type="email" name="email" required className="w-full p-4 border rounded-xl" />
        </div>

        <div>
          <label className="block font-bold mb-2">APC Pathway</label>
          <input type="text" name="pathway" placeholder="e.g. Quantity Surveying" className="w-full p-4 border rounded-xl" />
        </div>

        <div>
          <label className="block font-bold mb-2">Subject</label>
          <select name="subject" required className="w-full p-4 border rounded-xl bg-white">
            <option value="General Enquiry">General Enquiry</option>
            <option value="APC Guidance">APC Guidance</option>
            <option value="Packages">Packages</option>
            <option value="Technical Support">Technical Support</option>
            <option value="Counsellor Support">Counsellor Support</option>
            <option value="Mock Interviews">Mock Interviews</option>
            <option value="Billing">Billing</option>
            <option value="Partnerships">Partnerships</option>
          </select>
        </div>

        <div>
          <label className="block font-bold mb-2">Message</label>
          <textarea name="message" required className="w-full p-4 border rounded-xl h-32" />
        </div>

        <button type="submit" className="w-full py-4 bg-[#00172D] text-white rounded-xl font-bold hover:bg-slate-800 transition">
          Send Message
        </button>
      </form>

      {/* Social Media Links */}
      <div className="mt-16 pt-8 border-t text-center">
        <p className="font-bold text-[#00172D] mb-4">Follow us</p>
        <div className="flex justify-center gap-6 text-[#C9A050] font-bold">
          <a 
            href="https://www.linkedin.com/company/passd-net/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:underline"
          >
            LinkedIn
          </a>
          <a 
            href="https://www.instagram.com/passdapc/"
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:underline"
          >
            Instagram
          </a>
        </div>
      </div>
    </main>
  );
}