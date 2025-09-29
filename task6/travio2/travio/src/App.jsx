import React, { useState, useEffect } from 'react';
import AuthPage from './components/AuthPage';
import './App.css';

// list of background images
const backgroundImages = [
  './photolib/back.jpg',
  './photolib/santorini.jpeg',
  './photolib/kyoto.jpeg',
  './photolib/halsatt.jpeg',
  './photolib/borabora.jpeg',
  './photolib/amalfi.jpeg'
];

function App() {
    const [isAuthVisible, setAuthVisible] = useState(true);
    const [backgroundImageIndex, setBackgroundImageIndex] = useState(0);

    // auto-slide functionality for the background
    useEffect(() => {
        const interval = setInterval(() => {
            setBackgroundImageIndex((prevIndex) => 
                (prevIndex + 1) % backgroundImages.length
            );
        }, 4000); // Change image every 4000ms (4 seconds)

        return () => clearInterval(interval);
    }, []);

    const currentImage = backgroundImages[backgroundImageIndex];

    return (
        <div className="app-container" style={{ backgroundImage: `url(${currentImage})` }}>
            <main className="main-content">
                <div className="auth-page-container">
                    <AuthPage onClose={() => setAuthVisible(false)} />
                </div>
            </main>
        </div>
    );
}

export default App;
