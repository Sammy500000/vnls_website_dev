'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (data.success) {
        window.location.href = '/';
      } else {
        setError('Invalid credentials');
      }
    } catch {
      setError('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 99999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#FAF8F5',
      fontFamily: 'var(--font-sans), system-ui, sans-serif',
    }}>
      <form onSubmit={handleSubmit} style={{
        background: '#fff',
        padding: '48px 40px',
        borderRadius: '16px',
        boxShadow: '0 4px 24px rgba(74, 64, 54, 0.08)',
        width: '100%',
        maxWidth: '380px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}>
        <div style={{ textAlign: 'center', marginBottom: '8px' }}>
          <h1 style={{
            fontSize: '22px',
            fontWeight: 600,
            color: '#4A4036',
            margin: 0,
            letterSpacing: '-0.01em',
          }}>
            Valencia Nutracare
          </h1>
          <p style={{
            fontSize: '14px',
            color: '#8C7E72',
            margin: '8px 0 0',
          }}>
            Enter credentials to continue
          </p>
        </div>

        {error && (
          <div style={{
            background: '#FEF2F2',
            color: '#B91C1C',
            padding: '10px 14px',
            borderRadius: '8px',
            fontSize: '13px',
            textAlign: 'center',
          }}>
            {error}
          </div>
        )}

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          autoFocus
          style={{
            padding: '12px 16px',
            borderRadius: '10px',
            border: '1px solid #E5DDD5',
            fontSize: '15px',
            outline: 'none',
            transition: 'border-color 0.2s',
            color: '#4A4036',
            background: '#FDFCFB',
          }}
          onFocus={(e) => e.target.style.borderColor = '#B8A89A'}
          onBlur={(e) => e.target.style.borderColor = '#E5DDD5'}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            padding: '12px 16px',
            borderRadius: '10px',
            border: '1px solid #E5DDD5',
            fontSize: '15px',
            outline: 'none',
            transition: 'border-color 0.2s',
            color: '#4A4036',
            background: '#FDFCFB',
          }}
          onFocus={(e) => e.target.style.borderColor = '#B8A89A'}
          onBlur={(e) => e.target.style.borderColor = '#E5DDD5'}
        />

        <button
          type="submit"
          disabled={loading}
          style={{
            padding: '13px',
            borderRadius: '10px',
            border: 'none',
            background: '#4A4036',
            color: '#FAF8F5',
            fontSize: '15px',
            fontWeight: 500,
            cursor: loading ? 'wait' : 'pointer',
            opacity: loading ? 0.7 : 1,
            transition: 'opacity 0.2s',
            marginTop: '4px',
          }}
        >
          {loading ? 'Signing in...' : 'Sign In'}
        </button>
      </form>
    </div>
  );
}
