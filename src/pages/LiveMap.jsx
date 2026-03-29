import React from 'react';
import { MapPin, Navigation, Info } from 'lucide-react';

const LiveMap = () => {
  const points = [
    { name: 'Manila Bus Terminal', x: '50%', y: '60%' },
    { name: 'Baguio City Terminal', x: '45%', y: '25%' },
    { name: 'Vigan Heritage Site', x: '42%', y: '10%' },
    { name: 'Legazpi City', x: '70%', y: '85%' },
  ];

  return (
    <div style={{ padding: '2rem 1rem', display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <section className="card" style={{ padding: '1rem', height: '600px', position: 'relative', overflow: 'hidden', backgroundColor: '#e2e8f0' }}>
        <div style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 10, display: 'flex', gap: '0.5rem' }}>
          <div style={{ backgroundColor: 'white', padding: '0.5rem 1rem', borderRadius: '24px', boxShadow: 'var(--shadow-sm)', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem' }}>
            <div style={{ width: '8px', height: '8px', backgroundColor: '#22c55e', borderRadius: '50%' }} /> 14 Active Buses
          </div>
          <div style={{ backgroundColor: 'white', padding: '0.5rem 1rem', borderRadius: '24px', boxShadow: 'var(--shadow-sm)', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem' }}>
            <div style={{ width: '8px', height: '8px', backgroundColor: '#3b82f6', borderRadius: '50%' }} /> 8 Active Vans
          </div>
        </div>

        {/* Mock Map Background Style */}
        <div style={{ width: '100%', height: '100%', backgroundColor: '#f1f5f9', borderRadius: '1rem', border: '1px solid var(--border)', position: 'relative' }}>
           <svg width="100%" height="100%" filter="grayscale(100%) opacity(30%)" style={{ position: 'absolute' }}>
             <path d="M50 0 L100 0 L100 100 L0 100 L0 0 Z" fill="#e2e8f0" />
           </svg>
           {points.map((p, i) => (
             <div key={i} style={{ position: 'absolute', left: p.x, top: p.y, transform: 'translate(-50%, -50%)', cursor: 'pointer' }}>
               <div style={{ position: 'relative' }}>
                 <MapPin size={32} color="var(--primary)" fill="white" />
                 <div style={{ position: 'absolute', top: '-1.5rem', left: '50%', transform: 'translateX(-50%)', backgroundColor: 'var(--text-main)', color: 'white', padding: '0.2rem 0.5rem', borderRadius: '4px', whiteSpace: 'nowrap', fontSize: '0.625rem' }}>{p.name}</div>
               </div>
             </div>
           ))}
        </div>
      </section>

      <section style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div className="card" style={{ padding: '1.5rem' }}>
          <h3 style={{ fontSize: '1.125rem', fontWeight: 800, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Navigation size={20} color="var(--primary)" /> Real-time Navigation
          </h3>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Live updates for all routes in Luzon area. Track your bus or van in real-time.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {[1,2,3].map(i => (
            <div key={i} className="card" style={{ padding: '1rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <div style={{ backgroundColor: 'var(--bg-main)', padding: '0.75rem', borderRadius: '50%' }}>
                <Bus size={20} color="var(--primary)" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: '0.875rem' }}>Bus #{4000 + i}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Manila ➔ Baguio</div>
              </div>
              <div style={{ color: '#22c55e', fontSize: '0.75rem', fontWeight: 700 }}>On Time</div>
            </div>
          ))}
        </div>

        <div className="card" style={{ padding: '1.25rem', backgroundColor: '#f0f9ff', border: '1px solid #71b7e1', marginTop: 'auto' }}>
           <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.5rem' }}>
             <Info size={16} color="var(--primary)" /> <span style={{ fontWeight: 700, fontSize: '0.875rem' }}>Did You Know?</span>
           </div>
           <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>You can view the exact location of your vehicle 30 minutes before departure.</p>
        </div>
      </section>
    </div>
  );
};

export default LiveMap;
