import React from 'react';
import { Bus, MapPin, User, Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1.25rem 2.5rem',
      backgroundColor: 'var(--white)',
      borderBottom: '1px solid var(--border)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backdropFilter: 'blur(12px)',
      background: 'rgba(255, 255, 255, 0.9)',
      boxShadow: 'var(--shadow-sm)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Bus size={32} color="var(--primary)" strokeWidth={2.5} />
        <span style={{ fontSize: '1.5rem', fontWeight: '800', letterSpacing: '-0.025em', color: 'var(--text-main)' }}>
          Bustinations
        </span>
      </div>

      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <a href="/" style={{ textDecoration: 'none', color: 'var(--text-main)', fontWeight: 500 }}>Flights</a>
        <a href="/" style={{ textDecoration: 'none', color: 'var(--text-muted)', fontWeight: 500 }}>Buses</a>
        <a href="/" style={{ textDecoration: 'none', color: 'var(--text-muted)', fontWeight: 500 }}>Vans</a>
        <a href="/" style={{ textDecoration: 'none', color: 'var(--text-muted)', fontWeight: 500 }}>Live Map</a>
      </div>

      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <button style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '0.5rem 1rem',
          border: '1px solid var(--border)',
          borderRadius: '24px',
          color: 'var(--text-main)',
          fontSize: '0.875rem',
          fontWeight: 500,
          background: 'none'
        }}>
          Become a Host
        </button>
        <div style={{
          padding: '8px',
          backgroundColor: 'var(--bg-main)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid var(--border)',
          cursor: 'pointer'
        }}>
          <User size={20} color="var(--text-muted)" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
