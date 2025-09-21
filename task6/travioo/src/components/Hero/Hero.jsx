import React, { useState } from 'react';
import styles from './Hero.module.css';
import DestinationsPanel from '../DestinationsPanel/DestinationsPanel';

const Hero = () => {
  //state for managging destination panel
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  return (
    <>
      <section className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Travel, Enjoy, and Live a New Life</h1>
          <p className={styles.heroSubtitle}>
            Find your next great adventure with our curated travel guides.
          </p>
          <div className={styles.searchBar}>
            <input 
              type="text" 
              placeholder="Search for a city or destination..." 
              className={styles.searchInput} 
            />
            <button className={styles.searchButton}>Search</button>
          </div>
          <button 
            className={styles.exploreButton} 
            onClick={() => setIsPanelOpen(true)}
          >
            Explore Destinations
          </button>
        </div>
      </section>
      
      {/*destination panel controlled by state */}
      <DestinationsPanel isOpen={isPanelOpen} onClose={() => setIsPanelOpen(false)} />
    </>
  );
};

export default Hero;
