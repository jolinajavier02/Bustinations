import React from 'react';
import { Bus, Car, Filter, ChevronRight, Clock, Star } from 'lucide-react';

const TransportList = ({ onSelect }) => {
  const transports = [
    { id: 1, type: 'Bus', company: 'Victory Liner', origin: 'Manila', destination: 'Baguio', departure: '08:00 AM', price: 'P550', seats: 45, taken: 45, rating: 4.8 },
    { id: 2, type: 'Van', company: 'Ilocos Trans', origin: 'Manila', destination: 'Vigan', departure: '09:30 AM', price: 'P850', seats: 12, taken: 8, rating: 4.5 },
    { id: 3, type: 'Bus', company: 'Genesis Transport', origin: 'Manila', destination: 'Baler', departure: '10:00 AM', price: 'P600', seats: 50, taken: 20, rating: 4.2 },
    { id: 4, type: 'Van', company: 'North Star', origin: 'Manila', destination: 'Pagudpud', departure: '11:15 AM', price: 'P1200', seats: 15, taken: 15, rating: 4.9 },
  ];

  return (
    <div style={{ padding: '2rem 0', width: '100%', maxWidth: '1000px', margin: '0 auto' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800 }}>Available Transportation</h2>
          <p style={{ color: 'var(--text-muted)' }}>Found 4 routes for Manila to Baguio</p>
        </div>
        <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '0.6rem 1.25rem' }}>
          <Filter size={18} /> Filters
        </button>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {transports.map((item) => (
          <div key={item.id} className="card" style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            padding: '1.5rem 2rem', 
            position: 'relative',
            opacity: item.seats === item.taken ? 0.7 : 1,
            border: item.seats === item.taken ? '1px solid #ff4d4f' : '1px solid var(--border)'
          }}>
            <div style={{ display: 'flex', gap: '2rem', flex: 1 }}>
              <div style={{
                backgroundColor: 'var(--bg-main)',
                padding: '1.25rem',
                borderRadius: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {item.type === 'Bus' ? <Bus size={36} color="var(--primary)" /> : <Car size={36} color="var(--primary)" />}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <span style={{ fontWeight: 800, fontSize: '1.125rem' }}>{item.company}</span>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>{item.type} {item.seats === item.taken ? '(Fully Booked)' : `(${item.seats - item.taken} seats left)`}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    <Clock size={14} /> {item.departure}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', color: '#f39c12' }}>
                    <Star size={14} fill="#f39c12" /> {item.rating}
                  </div>
                </div>
              </div>
            </div>

            <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--primary)' }}>{item.price}</span>
              <button 
                disabled={item.seats === item.taken}
                onClick={() => onSelect()}
                className="btn-primary" 
                style={{ 
                  marginTop: '1rem', 
                  backgroundColor: item.seats === item.taken ? '#999' : 'var(--primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  opacity: item.seats === item.taken ? 0.5 : 1,
                  cursor: item.seats === item.taken ? 'not-allowed' : 'pointer'
                }}
              >
                {item.seats === item.taken ? 'Fully Booked' : 'Book Now'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default TransportList;
