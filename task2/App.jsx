import React, { useState, useEffect } from 'react';
import axios from 'axios';

//api from unsplash
const ACCESS_KEY = 'A1157F.............YzzGQU76Q';
const queries = ['Cars', 'Flowers', 'Boats'];

export default function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState(queries[0]);
  const [error, setError] = useState('');

  const fetchPhotos = async (searchTerm) => {
    setLoading(true);
    setError('');
    try {
      const url = searchTerm
        ? `https://api.unsplash.com/search/photos`
        : `https://api.unsplash.com/photos/random`;
      const params = searchTerm
        ? { query: searchTerm, per_page: 10, client_id: ACCESS_KEY }
        : { count: 10, client_id: ACCESS_KEY };
      const res = await axios.get(url, { params });
      setPhotos(searchTerm ? res.data.results : res.data);
    } catch (err) {
      setError('Failed to load photos. Please check your API key and network.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPhotos(query);
  }, [query]);

  // Responsive grid
  const getGridColumns = () => {
    if (window.innerWidth < 700) return '1fr';
    return '1fr 1fr 1fr 1fr';
  };
  const [gridColumns, setGridColumns] = useState(getGridColumns());

  useEffect(() => {
    const handleResize = () => setGridColumns(getGridColumns());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#181829',
        color: '#e0e0e0',
        overflowX: 'hidden',
        fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <header
        style={{
          backgroundColor: '#23233b',
          padding: '32px 0 24px 0',
          textAlign: 'center',
          boxShadow: '0 2px 8px rgba(40,0,60,0.25)',
          userSelect: 'none',
        }}
      >
        <h1 style={{ fontSize: '2.7rem', fontWeight: 900, margin: 0, color: '#bb86fc', letterSpacing: -.5 }}>
          Photo Gallery
        </h1>
        <p style={{ color: '#adaabc', marginTop: 10, fontSize: 18 }}>Powered by Unsplash API</p>
      </header>

      <main
        style={{
          width: '100%',
          padding: '2rem 2rem 4rem 2rem',
	  boxSizing: 'border-box',        
	  minHeight: 600,
	  display: 'flex',
	  flexDirection: 'column',
	  alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', gap: 20, marginBottom: 30 }}>
          {queries.map((q) => (
            <button
              key={q}
              onClick={() => setQuery(q)}
              disabled={loading}
              style={{
                padding: '10px 36px',
                fontSize: 18,
                borderRadius: 20,
                border: query === q ? 'none' : '2px solid #343463',
                backgroundColor: query === q ? '#bb86fc' : '#23233b',
                color: query === q ? '#23233b' : '#e0e0e0',
                fontWeight: 700,
                cursor: loading ? 'not-allowed' : 'pointer',
                boxShadow: query === q ? '0 2px 8px #bb86fc44' : 'none',
                transition: 'all 0.22s',
                outline: 'none',
                userSelect: 'none'
              }}
              aria-pressed={query === q}
              aria-label={`Show ${q} photos`}
            >
              {q}
            </button>
          ))}
        </div>

	<div style={{ minHeight: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
	  {loading && <p style={{ color: '#888', fontSize: 20 }}>Loading photos...</p>}
	  {error && <p style={{ color: '#f44336', fontWeight: 500, fontSize: 18 }}>{error}</p>}
	</div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: gridColumns,
            gap: 32,
            width: '100%',
          }}
        >
          {!loading &&
            !error &&
            photos.map((photo) => (
              <div
                key={photo.id}
                style={{
                  borderRadius: 14,
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px 0 #bb86fc44',
                  cursor: 'pointer',
                  backgroundColor: '#222238',
                  transition: 'box-shadow 0.25s, transform 0.2s',
                  position: 'relative',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow = '0 8px 24px #bb86fc99, 0 1.5px 6px #fffb')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.boxShadow = '0 4px 20px 0 #bb86fc44')
                }
              >
                <img
                  src={photo.urls.small}
                  alt={photo.alt_description || 'Unsplash Photo'}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: 270,
                    objectFit: 'cover',
                    display: 'block',
                    userSelect: 'none',
                    transition: 'transform 0.18s',
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://placehold.co/400x300/333333/aaaaaa?text=Image+Unavailable';
                  }}
                  onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                  onMouseOut={e => (e.currentTarget.style.transform = 'scale(1.0)')}
                />
                <div
                  style={{
                    padding: '16px 14px',
                    fontSize: 15,
                    color: '#e6dfff',
                    fontWeight: 600,
                    backgroundColor: '#2d2d44',
                    borderTop: '1px solid #27272f',
                  }}
                >
                  Photo by{' '}
                  <a
                    href={`${photo.user.links.html}?utm_source=react-photo-gallery&utm_medium=referral`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#bb86fc', textDecoration: 'underline', fontWeight: 700 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {photo.user.name}
                  </a>
                </div>
              </div>
            ))}
        </div>
      </main>
      <footer
        style={{
          textAlign: 'center',
          padding: '1.5rem 0',
          color: '#9191ae',
          fontSize: 13,
          fontWeight: 500,
          letterSpacing: 1,
          userSelect: 'none',
          marginTop: 'auto',
        }}
      >
        <p>© 2025 Gallery — Built with React and Unsplash API</p>
      </footer>
    </div>
  );
}
