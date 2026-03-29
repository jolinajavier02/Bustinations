import React, { useState } from 'react';
import { Bus, Car, Armchair, ChevronLeft, CreditCard } from 'lucide-react';

const Booking = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const seats = Array.from({ length: 45 }, (_, i) => ({ id: i + 1, reserved: i % 4 === 0 })); // Mock data

  const toggleSeat = (id) => {
    if (seats.find(s => s.id === id).reserved) return;
    if (selectedSeats.includes(id)) {
      setSelectedSeats(prev => prev.filter(s => s !== id));
    } else {
      setSelectedSeats(prev => [...prev, id]);
    }
  };

  return (
    <div style={{ padding: '2rem 0', display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <section className="card" style={{ padding: '2rem' }}>
        <header style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
          <button style={{ backgroundColor: '#f1f5f9', padding: '0.5rem', borderRadius: '50%' }}>
            <ChevronLeft size={24} />
          </button>
          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800 }}>Seat Selection</h2>
            <p style={{ color: 'var(--text-muted)' }}>Select your preferred seat(s) for Victory Liner [Bus #4412]</p>
          </div>
        </header>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2.5rem' }}>
          <div style={{ 
            backgroundColor: 'var(--bg-main)', 
            padding: '2rem 3rem', 
            borderRadius: '2rem', 
            border: '2px solid var(--border)',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1rem',
            position: 'relative'
          }}>
            <div style={{ position: 'absolute', top: '-1rem', left: '50%', transform: 'translateX(-50%)', backgroundColor: 'var(--white)', padding: '0.25rem 1rem', borderRadius: '2rem', fontSize: '0.75rem', fontWeight: 800, border: '1px solid var(--border)' }}>DRIVER</div>
            {seats.map((seat) => (
              <button
                key={seat.id}
                onClick={() => toggleSeat(seat.id)}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  backgroundColor: seat.reserved ? '#e2e8f0' : selectedSeats.includes(seat.id) ? 'var(--primary)' : 'var(--white)',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: seat.reserved ? '#94a3b8' : selectedSeats.includes(seat.id) ? 'var(--white)' : 'var(--text-main)',
                  cursor: seat.reserved ? 'not-allowed' : 'pointer',
                  transform: selectedSeats.includes(seat.id) ? 'scale(1.1)' : 'scale(1)',
                  transition: 'all 0.2s ease',
                  gridColumn: (seat.id % 4 === 3) ? '3' : ''
                }}
              >
                <Armchair size={20} />
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '2.5rem', fontSize: '0.875rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '16px', height: '16px', backgroundColor: 'var(--white)', border: '1px solid var(--border)', borderRadius: '4px' }} /> Available
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '16px', height: '16px', backgroundColor: '#e2e8f0', borderRadius: '4px' }} /> Reserved
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '16px', height: '16px', backgroundColor: 'var(--primary)', borderRadius: '4px' }} /> Selected
            </div>
          </div>
        </div>
      </section>

      <section className="card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '2rem' }}>Booking Summary</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '1rem', borderBottom: '1px solid var(--border)' }}>
            <span style={{ color: 'var(--text-muted)' }}>Passenger Count</span>
            <span style={{ fontWeight: 700 }}>{selectedSeats.length} Persons</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '1rem', borderBottom: '1px solid var(--border)' }}>
            <span style={{ color: 'var(--text-muted)' }}>Seat Numbers</span>
            <span style={{ fontWeight: 700 }}>{selectedSeats.join(', ') || 'None selected'}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '1rem', borderBottom: '1px solid var(--border)' }}>
            <span style={{ color: 'var(--text-muted)' }}>Subtotal</span>
            <span style={{ fontWeight: 700 }}>P{(selectedSeats.length * 550).toLocaleString()}</span>
          </div>
        </div>
        <div style={{ marginTop: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '1.25rem', fontWeight: 800 }}>Total</span>
            <span style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--primary)' }}>P{(selectedSeats.length * 550).toLocaleString()}</span>
          </div>
          <button className="btn-primary" style={{ width: '100%', padding: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', fontSize: '1.125rem' }}>
            <CreditCard size={20} /> Proceed to Checkout
          </button>
        </div>
      </section>
    </div>
  );
};

export default Booking;
