import React, { useState } from 'react';
import { Search, MapPin, Calendar, Users, ArrowRight } from 'lucide-react';

const Home = ({ onSearch }) => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [passengers, setPassengers] = useState(1);

  return (
    <main style={{ padding: '4rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '80vh' }}>
      <section style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '800px' }}>
        <h1 style={{ fontSize: '4.5rem', fontWeight: 900, letterSpacing: '-0.1em', marginBottom: '1.5rem', lineHeight: '100%', color: 'var(--text-main)' }}>
          Discover <span style={{ color: 'var(--primary)' }}>Bustinations</span> Across Luzon.
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto' }}>
          Compare thousands of bus and van routes. Book your next journey with ease.
        </p>
      </section>

      <div style={{
        width: '100%',
        maxWidth: '1000px',
        backgroundColor: 'var(--white)',
        borderRadius: '3rem',
        padding: '1.5rem 2.5rem',
        display: 'flex',
        alignItems: 'center',
        gap: '2rem',
        boxShadow: 'var(--shadow-lg)',
        border: '1px solid var(--border)',
        position: 'relative'
      }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <label style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Where From?</label>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <MapPin size={20} color="var(--primary)" />
            <input 
              type="text" 
              placeholder="Origin (e.g. Manila)" 
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              style={{ flex: 1, border: 'none', background: 'none', fontSize: '1rem', fontWeight: 500, color: 'var(--text-main)' }}
            />
          </div>
        </div>

        <div style={{ width: '1px', backgroundColor: 'var(--border)', height: '40px' }} />

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <label style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Where To?</label>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <MapPin size={20} color="var(--primary)" />
            <input 
              type="text" 
              placeholder="Destination (e.g. Baguio)" 
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              style={{ flex: 1, border: 'none', background: 'none', fontSize: '1rem', fontWeight: 500, color: 'var(--text-main)' }}
            />
          </div>
        </div>

        <div style={{ width: '1px', backgroundColor: 'var(--border)', height: '40px' }} />

        <div style={{ flex: 0.8, display: 'flex', flexDirection: 'column' }}>
          <label style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Departure</label>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Calendar size={20} color="var(--primary)" />
            <input 
              type="date" 
              value={date}
              onChange={(e) => setDate(e.target.value)}
              style={{ flex: 1, border: 'none', background: 'none', fontSize: '1rem', fontWeight: 500, color: 'var(--text-main)' }}
            />
          </div>
        </div>

        <div style={{ width: '1px', backgroundColor: 'var(--border)', height: '40px' }} />

        <div style={{ flex: 0.6, display: 'flex', flexDirection: 'column' }}>
          <label style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Passengers</label>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Users size={20} color="var(--primary)" />
            <select 
              value={passengers}
              onChange={(e) => setPassengers(e.target.value)}
              style={{ flex: 1, border: 'none', background: 'none', fontSize: '1rem', fontWeight: 500, color: 'var(--text-main)' }}
            >
              {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n}</option>)}
            </select>
          </div>
        </div>

        <button onClick={onSearch} style={{
          backgroundColor: 'var(--primary)',
          color: 'var(--white)',
          padding: '1rem',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: 'translateX(3rem)',
          boxShadow: '0 8px 32px rgba(113, 183, 225, 0.4)'
        }}>
          <Search size={28} strokeWidth={2.5} />
        </button>
      </div>

      <div style={{ marginTop: '5rem', width: '100%', maxWidth: '1200px' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '2rem', color: 'var(--text-main)', textAlign: 'left', paddingLeft: '1rem' }}>
          Popular Destinations in <span style={{ color: 'var(--primary)' }}>Luzon</span>
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', padding: '1rem' }}>
          {['Manila to Baguio', 'Manila to Vigan', 'Manila to Sagada', 'Manila to Tagaytay'].map((route) => (
            <div key={route} className="card" style={{ padding: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontWeight: 600, color: 'var(--text-main)' }}>{route}</span>
              <ArrowRight size={18} color="var(--primary)" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
