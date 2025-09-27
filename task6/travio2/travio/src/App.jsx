import React, { useState, useEffect } from 'react';
import AuthPage from './components/AuthPage';
import './App.css';

// --- mock data for carousel ---
const destinations = [
    { id: 1, name: 'Santorini, Greece', image: '/photolib/santorini.jpeg' },
    { id: 2, name: 'Kyoto, Japan', image: '/photolib/kyoto.jpeg' },
    { id: 3, name: 'Hallstatt, Austria', image: '/photolib/halsatt.jpeg' },
    { id: 4, name: 'Bora Bora, French Polynesia', image: '/photolib/borabora.jpeg' },
    { id: 5, name: 'Amalfi Coast, Italy', image: '/photolib/amalfi.jpeg' }
];

// --- header component ---
const Header = ({ onLoginClick }) => (
    <header className="header">
        <div className="logo">Travio</div>
        <button className="auth-button" onClick={onLoginClick}>
            LOGIN · SIGNUP
        </button>
    </header>
);

// --- carousel component ---
const Carousel = ({ activeIndex }) => {
  return (
    <div className="carousel-container">
      {destinations.map((item, index) => {
        const offset = (index - activeIndex) * 100;
        const opacity = index === activeIndex ? 1 : 0.5;
        const zIndex = destinations.length - Math.abs(index - activeIndex);

        return (
          <div
            key={item.id}
            className="carousel-slide"
            style={{
              transform: `translateX(${offset}%) scale(0.9)`,
              opacity: opacity,
              zIndex: zIndex
            }}
          >
            <img src={item.image} alt={item.name} />
            <div className="slide-caption">{item.name}</div>
          </div>
        );
      })}
    </div>
  );
};


// --- main component ---
function App() {
    const [isAuthVisible, setAuthVisible] = useState(false);
    const [activeIndex, setActiveIndex] = useState(1); //start at second image on default to fill the gap on left of carousel

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % destinations.length);
    };

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + destinations.length) % destinations.length);
    };

    // auto-slide functionality
    useEffect(() => {
        if (!isAuthVisible) {
            const interval = setInterval(() => {
                handleNext();
            }, 4500);
            return () => clearInterval(interval);
        }
    }, [activeIndex, isAuthVisible]);

    return (
        <div className="app-container">
            <Header onLoginClick={() => setAuthVisible(true)} />
            <main className="main-content">
                {isAuthVisible ? (
                    <div className="auth-page-container">
                        <AuthPage onClose={() => setAuthVisible(false)} />
                    </div>
                ) : (
                    <div className="landing-hero">
						  {/* text + button on top */}
						  <div className="landing-text-section">
							  <h1>Around the world with Travio</h1>
							  <p>Discover new adventures, connect with people, and explore the globe with us.</p>
							  <button className="explore-button">EXPLORE MORE</button>
						  </div>

						  {/* carousel below */}
						  <div className="carousel-section">
							  <Carousel activeIndex={activeIndex} />

							  {/* Nav buttons below the image */}
							  <div className="carousel-nav">
								  <button class="carousel-button-prev" onClick={handlePrev}>❮</button>
								  <button class="carousel-button-next" onClick={handleNext}>❯</button>
								</div>

							</div>

						</div>

                )}
            </main>
        </div>
    );
}

export default App;
