import React from 'react';
import './Dashboard.css';
import {
  IoPaperPlaneOutline, IoCompassOutline, IoStorefrontOutline,
  IoChatbubblesOutline, IoSparklesOutline, IoMegaphoneOutline, IoTrendingUp
} from 'react-icons/io5';

//data for dashboard cards
const cardData = [
  //my trips: create,view,edit upcoming trips [cite: 36]
  { icon: <IoPaperPlaneOutline />, title: 'My Trips', desc: 'Create, view, and edit your upcoming trips' },
  // explore trips: browse trip by other travelers [cite: 37]
  { icon: <IoCompassOutline />, title: 'Explore Trips', desc: 'Browse inspiring trips from other travelers.' },
  //nearby esentials: local hotels and restros balha blah blah
  { icon: <IoStorefrontOutline />, title: 'Nearby Essentials', desc: 'Find hotels, restaurants, ATMs, and more.' },
  // cmmunity:travel stories,discussions like qna and replies
  { icon: <IoChatbubblesOutline />, title: 'Community', desc: 'Join discussions, forums, and local meetups.' },
];

// "Ai enhancements"
const aiCardData = [
    // personalized trip recoms
    { icon: <IoSparklesOutline />, title: 'Personalized Suggestions', desc: 'AI-powered trip ideas, just for you.' },
    // top picks or some trending trip based on user choices and 
    { icon: <IoTrendingUp />, title: 'Trending Trips', desc: 'See what’s popular in the community right now.' },
];

const sponsoredCardData = [
    //sponsor and faeturings
    { icon: <IoMegaphoneOutline />, title: 'Local Experiences', desc: 'Discover top-rated local hotels, restaurants, and adventure spots.' },
]

const Dashboard = () => {
  return (
    <main className="dashboard-container">
      <h1 className="dashboard-welcome">Welcome Back, Tenzin!</h1>
      
      <section className="dashboard-section">
        <div className="card-grid">
          {cardData.map((card, index) => (
            <div className="feature-card" key={`card-${index}`}>
              <div className="card-icon">{card.icon}</div>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="dashboard-section">
        <h2 className="section-title">AI Powered For You</h2>
        <div className="card-grid ai-grid">
          {aiCardData.map((card, index) => (
            <div className="feature-card" key={`ai-card-${index}`}>
              <div className="card-icon">{card.icon}</div>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="dashboard-section">
        <h2 className="section-title">Sponsored & Featured</h2>
         <div className="card-grid sponsored-grid">
          {sponsoredCardData.map((card, index) => (
            <div className="feature-card wide-card" key={`sponsored-card-${index}`}>
              <div className="card-icon">{card.icon}</div>
              <div>
                <h3 className="card-title">{card.title}</h3>
                <p className="card-description">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
