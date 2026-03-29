import React, { useState } from 'react';
import { Bus, Car, CreditCard, CheckCircle, Smartphone, Building, ShieldCheck } from 'lucide-react';

const HostPortal = () => {
  const [step, setStep] = useState(1);
  const [vehicleType, setVehicleType] = useState('bus');
  const [subscription, setSubscription] = useState('monthly');

  return (
    <div style={{ padding: '4rem 0', maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      <header style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '1.25rem', color: 'var(--text-main)' }}>Grow Your Transport Business.</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto' }}>Join the largest network of bus and van operators in Luzon. Register your property and start booking.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2.5rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {[1, 2, 3].map((s) => (
            <div key={s} style={{ 
              padding: '1.5rem', 
              borderRadius: '1.25rem', 
              border: step === s ? '2px solid var(--primary)' : '1px solid var(--border)',
              backgroundColor: step === s ? 'white' : 'transparent',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              color: step === s ? 'var(--text-main)' : 'var(--text-muted)',
              fontWeight: 700,
              cursor: 'pointer'
            }} onClick={() => setStep(s)}>
              <span style={{ 
                width: '32px', 
                height: '32px', 
                borderRadius: '50%', 
                backgroundColor: step === s ? 'var(--primary)' : 'var(--border)', 
                color: 'white', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontSize: '0.875rem'
              }}>{s}</span>
              {s === 1 ? 'Vehicle Registration' : s === 2 ? 'Schedule & Routes' : 'Subscription'}
            </div>
          ))}
        </div>

        <div className="card" style={{ padding: '3rem' }}>
          {step === 1 && (
            <section>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '2rem' }}>Vehicle Information</h3>
              <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem' }}>
                <div 
                  onClick={() => setVehicleType('bus')}
                  style={{ 
                    flex: 1, 
                    padding: '2rem', 
                    borderRadius: '1.5rem', 
                    border: vehicleType === 'bus' ? '3px solid var(--primary)' : '1px solid var(--border)',
                    textAlign: 'center',
                    cursor: 'pointer',
                    backgroundColor: vehicleType === 'bus' ? '#f0f9ff' : 'white'
                  }}>
                  <Bus size={48} color="var(--primary)" style={{ marginBottom: '1rem' }} />
                  <div style={{ fontWeight: 800 }}>Bus Fleet</div>
                </div>
                <div 
                  onClick={() => setVehicleType('van')}
                  style={{ 
                    flex: 1, 
                    padding: '2rem', 
                    borderRadius: '1.5rem', 
                    border: vehicleType === 'van' ? '3px solid var(--primary)' : '1px solid var(--border)',
                    textAlign: 'center',
                    cursor: 'pointer',
                    backgroundColor: vehicleType === 'van' ? '#f0f9ff' : 'white'
                  }}>
                  <Car size={48} color="var(--primary)" style={{ marginBottom: '1rem' }} />
                  <div style={{ fontWeight: 800 }}>Van / Car</div>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, marginBottom: '0.5rem' }}>Company Name</label>
                  <input type="text" placeholder="e.g. Luzon Express" style={{ width: '100%', padding: '0.875rem 1.25rem', borderRadius: '0.75rem', border: '1px solid var(--border)', fontSize: '1rem' }} />
                </div>
                <button className="btn-primary" style={{ marginTop: '1rem', width: '100%' }} onClick={() => setStep(2)}>Continue</button>
              </div>
            </section>
          )}

          {step === 2 && (
            <section>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '2rem' }}>Routes & Slots</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Define your primary operation routes and seating capacity.</p>
              <button className="btn-primary" style={{ width: '100%' }} onClick={() => setStep(3)}>Continue to Subscription</button>
            </section>
          )}

          {step === 3 && (
            <section style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '2.5rem' }}>Choose Your Plan</h3>
              <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '3rem' }}>
                <div onClick={() => setSubscription('monthly')} style={{ flex: 1, padding: '2rem', borderRadius: '1.5rem', border: subscription === 'monthly' ? '3px solid var(--primary)' : '1px solid var(--border)', position: 'relative' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 900 }}>P999<span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>/mo</span></div>
                  <div style={{ fontWeight: 700, margin: '1rem 0' }}>Basic Provider</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.875rem', alignItems: 'flex-start' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle size={16} color="var(--primary)" /> 5 Vehicles Max</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle size={16} color="var(--primary)" /> Basic Analytics</div>
                  </div>
                </div>
                <div onClick={() => setSubscription('yearly')} style={{ flex: 1, padding: '2rem', borderRadius: '1.5rem', border: subscription === 'yearly' ? '3px solid var(--primary)' : '1px solid var(--border)', backgroundColor: subscription === 'yearly' ? '#f0f9ff' : 'white' }}>
                   <div style={{ position: 'absolute', top: '-1rem', left: '50%', transform: 'translateX(-50%)', backgroundColor: 'var(--primary)', color: 'white', padding: '0.25rem 1rem', borderRadius: '2rem', fontSize: '0.75rem', fontWeight: 800 }}>POPULAR</div>
                  <div style={{ fontSize: '2rem', fontWeight: 900 }}>P9,999<span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>/yr</span></div>
                  <div style={{ fontWeight: 700, margin: '1rem 0' }}>Pro Operator</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.875rem', alignItems: 'flex-start' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle size={16} color="var(--primary)" /> Unlimited Fleet</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle size={16} color="var(--primary)" /> Prime Dashboard</div>
                  </div>
                </div>
              </div>
              <button className="btn-primary" style={{ width: '100%', padding: '1.25rem', fontSize: '1.125rem' }}>Start Hosting Now</button>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default HostPortal;
