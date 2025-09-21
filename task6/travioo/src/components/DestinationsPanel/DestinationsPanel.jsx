import React from 'react';
import styles from './DestinationsPanel.module.css';

//some madeup data for our destinationsn later maybe use api to fetch
const destinationData = [
  { id: 1, name: 'Kyoto, Japan', description: 'Ancient temples and serene gardens.', imageUrl: 'https://picsum.photos/id/1041/400/400' },
  { id: 2, name: 'Santorini, Greece', description: 'Iconic blue domes and stunning sunsets.', imageUrl: 'https://picsum.photos/id/106/400/400' },
  { id: 3, name: 'Rome, Italy', description: 'A timeless city of history and art.', imageUrl: 'https://picsum.photos/id/1043/400/400' },
  { id: 4, name: 'Bali, Indonesia', description: 'Lush rice paddies and vibrant culture.', imageUrl: 'https://picsum.photos/id/1015/400/400' },
  { id: 5, name: 'Paris, France', description: 'The romantic capital of the world.', imageUrl: 'https://picsum.photos/id/1011/400/400' },
  { id: 6, name: 'Cairo, Egypt', description: 'Gateway to the pyramids of Giza.', imageUrl: 'https://picsum.photos/id/1048/400/400' },
  { id: 7, name: 'Maui, Hawaii', description: 'Pristine beaches and volcanic landscapes.', imageUrl: 'https://picsum.photos/id/1016/400/400' },
];

const DestinationsPanel = ({ isOpen, onClose }) => {
  return (
    //open class based on the isOpen" prop to trigger animation
    <div className={`${styles.panelContainer} ${isOpen ? styles.open : ''}`}>
      <div className={styles.panelHeader}>
        <h2>Explore Destinations</h2>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
      </div>
      <div className={styles.destinationsWrapper}>
        {destinationData.map(dest => (
          <div key={dest.id} className={styles.destinationCard}>
            <img src={dest.imageUrl} alt={dest.name} className={styles.cardImage} />
            <div className={styles.cardContent}>
              <h3 className={styles.cardName}>{dest.name}</h3>
              <p className={styles.cardDescription}>{dest.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationsPanel;
