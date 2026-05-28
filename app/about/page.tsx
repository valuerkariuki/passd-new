export default function AboutPage() {
  return (
    <main style={{ 
      maxWidth: '800px', 
      margin: '0 auto', 
      padding: '60px 20px', 
      fontFamily: 'sans-serif', 
      lineHeight: '1.7', 
      color: '#334155' 
    }}>
      
      {/* Title Section */}
      <h1 style={{ 
        fontSize: '2.5rem', 
        color: '#00172D', 
        marginBottom: '40px', 
        fontWeight: '800' 
      }}>
        Why PASSD Exists
      </h1>

      {/* Main Content */}
      <div style={{ marginBottom: '40px', fontSize: '1.1rem' }}>
        <p style={{ marginBottom: '20px' }}>
          PASSD was born out of a real challenge. When our founder was going through his own RICS journey, 
          his employer didn’t have any internal RICS members or counsellors to guide him. Driven to succeed, 
          he took a leap of faith: he walked straight into a rival firm, introduced himself, and asked for help.
        </p>
        <p>
          Fortunately, that boldness paid off. He was paired with an incredible counselor and supervisor, 
          passing his APC assessment on the very first try. Grateful for that support, he promised to pay 
          it forward. Over the last 6 years, he has faithfully mentored more than 30 candidates as an 
          official counselor—achieving a 98% success rate.
        </p>
      </div>

      {/* Mission Section with premium background/border styling */}
      <section style={{ 
        backgroundColor: '#f8fafc', 
        padding: '40px', 
        borderRadius: '24px', 
        border: '1px solid #e2e8f0',
        marginBottom: '40px'
      }}>
        <h2 style={{ 
          fontSize: '1.8rem', 
          color: '#00172D', 
          marginBottom: '20px',
          fontWeight: '700'
        }}>
          Our Mission: A Marketplace for Your Success
        </h2>
        <p style={{ margin: 0 }}>
          We know firsthand how stressful it is to navigate the APC without in-house backing. We also 
          know that corporate-level prep packages from big competitors are far too expensive for 
          individual candidates. That’s why we built PASSD. Think of us as an on-demand marketplace 
          where you are in total control. You choose the exact service you need and only pay for that 
          specific help.
        </p>
      </section>

    </main>
  );
}