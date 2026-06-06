export default function Footer() {
  return (
    <footer className="bg-[#00172D] text-white py-12 px-6 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Brand Info */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold">Passd.net</h2>
          <p className="text-slate-400 text-sm mt-2">© 2026 Passd.net. All rights reserved.</p>
        </div>

        {/* Navigation & Socials */}
        <div className="flex flex-col items-center md:items-end gap-6">
          <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            <a href="/" className="hover:text-[#C9A050] transition">Home</a>
            <a href="/about" className="hover:text-[#C9A050] transition">About Us</a>
            <a href="/#packages" className="hover:text-[#C9A050] transition">Packages</a>
            <a href="/apply" className="hover:text-[#C9A050] transition">Counsellors</a>
            <a href="/#resources" className="hover:text-[#C9A050] transition">Resources</a>
            <a href="/contact" className="hover:text-[#C9A050] transition">Contact</a>
          </nav>
          
          {/* Social Links */}
          <div className="flex gap-6">
            <a 
              href="https://www.linkedin.com/company/passd-net/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#C9A050] hover:text-white font-bold transition"
            >
              LinkedIn
            </a>
            <a 
              href="https://www.instagram.com/passdapc?igsh=b2Q5ZWVzcWxmMTNk" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#C9A050] hover:text-white font-bold transition"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}