import  { useState } from 'react';
import styles from './Card.module.css';
import DataCard from '../DataCard/DataCard';

const Card = () => {
  interface Product {
    id: number;
    name: string;
    price: number;
  }

  const [isActive, setIsActive] = useState(false);

  const products: Product[] = [
    { id: 1, name: 'Cool Sneakadders', price: 59.99 },
    { id: 2, name: 'Cool Watch', price: 129.99 },
    { id: 3, name: 'Nothing', price: 59.99 },
    { id: 4, name: 'Something', price: 129.99 },
    { id: 5, name: 'Another Item', price: 39.99 },
    { id: 6, name: 'New Stuff', price: 89.99 },
  ];

  const labeltag = 'Freight';
  const count = products.length;
  const label = 'Deep Cleaning';

  return (
    <div
      className={`${styles.card_class} ${styles.card_customclass} ${
        isActive ? styles.active : ''
      }`}
      onClick={() => setIsActive(!isActive)} // toggle active on click
    >
      <DataCard data={products} headerlabeltag={labeltag} headercount={count} headerlabel={label} />
      
      {isActive && <span className={styles.icon}>✔</span>}
    </div>
  );
};

export default Card;
