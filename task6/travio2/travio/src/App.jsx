import React, { useState, useEffect } from 'react';
import AuthPage from './components/AuthPage';
import './App.css';

// --- Mock Data for Carousel ---
// Make sure you have these images in your `src/assets/` folder
const destinations = [
    { id: 1, name: 'Santorini, Greece', image: '/src/assets/santorini.jpeg' },
    { id: 2, name: 'Kyoto, Japan', image: '/src/assets/kyoto.jpeg' },
    { id: 3, name: 'Hallstatt, Austria', image: '/src/assets/halsatt.jpeg' },
    { id: 4, name: 'Bora Bora, French Polynesia', image: '/src/assets/borabora.jpeg' },
    { id: 5, name: 'Amalfi Coast, Italy', image: '/src/assets/amalfi.jpeg' }
];

// --- Header Component ---
const Header = ({ onLoginClick }) => (
    <header className="header">
        <div className="logo">Travio</div>
        <button className="auth-button" onClick={onLoginClick}>
            LOGIN · SIGNUP
        </button>
    </header>
);

// --- Carousel Component ---
const Carousel = ({ activeIndex, onNext, onPrev }) => {
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
            <div className="carousel-nav">
                <button onClick={onPrev}>‹</button>
                <button onClick={onNext}>›</button>
            </div>
        </div>
    );
};


// --- main component ---
function App() {
    const [isAuthVisible, setAuthVisible] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % destinations.length);
    };

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + destinations.length) % destinations.length);
    };

    //auto-slide functionality
    useEffect(() => {
        if (!isAuthVisible) {
            const interval = setInterval(() => {
                handleNext();
            }, 4000);
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
                    <div className="landing-view">
                        <div className="landing-content">
                            <h1>Around the world with Travio</h1>
                            <p>Discover new adventures, connect with people, and explore the globe with us.</p>
                        </div>
                        <div className="carousel-wrapper">
                            <Carousel
                                activeIndex={activeIndex}
                                onNext={handleNext}
                                onPrev={handlePrev}
                            />
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}

export default App;
