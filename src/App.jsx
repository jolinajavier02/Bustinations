import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import TransportList from './pages/TransportList'
import Booking from './pages/Booking'
import HostPortal from './pages/HostPortal'
import LiveMap from './pages/LiveMap'

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <Home onSearch={() => setCurrentPage('list')} />;
      case 'list': return <TransportList onSelect={() => setCurrentPage('booking')} />;
      case 'booking': return <Booking />;
      case 'host': return <HostPortal />;
      case 'map': return <LiveMap />;
      default: return <Home />;
    }
  }

  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }} onClick={() => setCurrentPage('home')}>
          <div style={{
            backgroundColor: 'var(--primary)',
            padding: '8px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-1.1 0-2 .9-2 2v7h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
          </div>
          <span style={{ fontSize: '1.5rem', fontWeight: '800', letterSpacing: '-0.025em', color: 'var(--text-main)' }}>
            Bustinations
          </span>
        </div>

        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <button onClick={() => setCurrentPage('home')} style={{ textDecoration: 'none', color: currentPage === 'home' || currentPage === 'list' || currentPage === 'booking' ? 'var(--primary)' : 'var(--text-muted)', fontWeight: 600 }}>Bookings</button>
          <button onClick={() => setCurrentPage('map')} style={{ textDecoration: 'none', color: currentPage === 'map' ? 'var(--primary)' : 'var(--text-muted)', fontWeight: 600 }}>Live Map</button>
          <button onClick={() => setCurrentPage('host')} style={{ textDecoration: 'none', color: currentPage === 'host' ? 'var(--primary)' : 'var(--text-muted)', fontWeight: 600 }}>Become a Host</button>
        </div>

        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
             <button style={{ padding: '0.5rem 1rem', border: '1px solid var(--border)', borderRadius: '24px', color: 'var(--text-main)', fontSize: '0.875rem', fontWeight: 500, background: 'none' }}>Log In</button>
             <button className="btn-primary" style={{ padding: '0.5rem 1.25rem', borderRadius: '24px' }}>Sign Up</button>
        </div>
      </nav>

      <div className="container" style={{ flex: 1, paddingTop: '2rem' }}>
        {renderPage()}
      </div>

      <footer style={{ marginTop: 'auto', padding: '4rem 0', borderTop: '1px solid var(--border)', backgroundColor: 'var(--white)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <span style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--text-main)' }}>Bustinations</span>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Your ultimate travel partner for Luzon exploring.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <span style={{ fontWeight: 700 }}>Company</span>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>About Us</span>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Careers</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <span style={{ fontWeight: 700 }}>Support</span>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Help Center</span>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Safety</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <span style={{ fontWeight: 700 }}>Legal</span>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Privacy Policy</span>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
