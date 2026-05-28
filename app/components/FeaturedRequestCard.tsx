export default function FeaturedRequestCard() {
  return (
    <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '32px', padding: '60px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.03)', textAlign: 'center', marginTop: '48px', marginBottom: '48px', position: 'relative' }}>
      
      {/* 1. Avatars - Human trust section */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px', position: 'relative', left: '16px' }}>
        {[
          { name: 'James R.', title: 'FRICS', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop' },
          { name: 'Sarah L.', title: 'MRICS', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop' },
          { name: 'David K.', title: 'MRICS', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop' }
        ].map((counsellor, i) => (
          <div key={i} style={{ width: '64px', height: '64px', borderRadius: '50%', border: '4px solid #ffffff', overflow: 'hidden', marginLeft: '-16px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', position: 'relative' }}>
            <img 
              src={counsellor.img} 
              alt={`${counsellor.name}, ${counsellor.title}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        ))}
        <div style={{ marginLeft: '16px', alignSelf: 'center', textAlign: 'left' }}>
          <p style={{ fontSize: '1.1rem', fontWeight: '700', color: '#00172D', margin: 0 }}>Matched by Experts</p>
          <p style={{ fontSize: '0.85rem', color: '#64748b', margin: 0 }}>Meet James, Sarah, David & 15+ others</p>
        </div>
      </div>

      {/* 2. Premium Branding & Text */}
      <h2 style={{ fontSize: '3rem', fontWeight: '900', color: '#00172D', letterSpacing: '-0.05em', marginBottom: '16px', lineHeight: '1.1' }}>
        Find Your <span style={{ color: '#C9A050' }}>Perfect</span> APC Counsellor
      </h2>
      <p style={{ fontSize: '1.25rem', color: '#334155', maxWidth: '36rem', marginLeft: 'auto', marginRight: 'auto', marginBottom: '32px', lineHeight: '1.6' }}>
        We match you with qualified MRICS and FRICS mentors based on your specific APC pathway, route, and career goals.
      </p>
      
      {/* 3. The Premium Action Button */}
      <a href="/apply" style={{ display: 'inline-block', backgroundColor: '#00172D', color: '#ffffff', paddingLeft: '40px', paddingRight: '40px', paddingTop: '20px', paddingBottom: '20px', borderRadius: '9999px', fontWeight: '700', fontSize: '1.1rem', textDecoration: 'none', transition: 'all 0.3s ease', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}>
        Request a Counsellor Match
      </a>
    </div>
  );
}