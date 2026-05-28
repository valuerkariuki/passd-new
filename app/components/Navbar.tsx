import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      padding: '20px 40px', 
      alignItems: 'center',
      borderBottom: '1px solid #e2e8f0' 
    }}>
      {/* Your Logo/Brand Name */}
      <div style={{ fontSize: '1.5rem', fontWeight: '800', color: '#00172D' }}>PASSD</div>
      
      {/* Navigation Links */}
      <div style={{ display: 'flex', gap: '25px' }}>
        <Link href="/" style={{ textDecoration: 'none', color: '#00172D', fontWeight: '600' }}>Home</Link>
        <Link href="/about" style={{ textDecoration: 'none', color: '#00172D', fontWeight: '600' }}>About Us</Link>
        <Link href="/#pricing" style={{ textDecoration: 'none', color: '#00172D', fontWeight: '600' }}>Pricing</Link>
      </div>
    </nav>
  );
}