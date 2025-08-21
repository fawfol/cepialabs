import React from 'react';
import Card from './Card';
import './Home.css';

const Home = () => {
  const features = [
    { title: 'My Trips', description: 'Create, view, and edit your upcoming trips.' },
    { title: 'Explore Trips', description: 'Browse inspiring trips from other travelers.' },
    { title: 'Nearby Essentials', description: 'Find local hotels, restaurants, and ATMs.' },
    { title: 'Community', description: 'Join discussions, forums, and local meetups.' },
    { title: 'AI Trip Suggestions', description: 'Get personalized trip ideas and itineraries.' },
    { title: 'AI Chatbot', description: 'Ask for FAQs, travel tips, or emergency help.' },
  ];

  return (
    <main className="home-container">
      <div className="header-section">
        <h2>Home Dashboard</h2>
      </div>
      <div className="card-grid">
        {features.map((feature, index) => (
          <Card key={index} title={feature.title} description={feature.description} />
        ))}
      </div>
    </main>
  );
};

export default Home;
