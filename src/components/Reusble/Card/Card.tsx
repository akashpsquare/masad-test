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

  const benefits =['Benefit from thorough safety inspections and regulatory compliance checks to uphold industry standards.','Enjoy comprehensive safety evaluations and compliance assessments to ensure top-notch standards.','Receive expedited scheduling for service requests and maintenance appointments']
  

  const labeltag = 'Freight';
  const count = products.length;
  const label = 'Deep Cleaning';

  const benefitcount = benefits.length;

  return (

    <div
      className={`${styles.card_class} ${styles.card_customclass} ${
        isActive ? styles.active : ''
      }`}
      onClick={() => setIsActive(!isActive)} 
    >
      <DataCard  benefitdata={benefits} data={products} headerlabeltag={labeltag} headercount={benefitcount} headerlabel={label} />
      {isActive && <span className={styles.icon}>✔</span>}
    </div>
  );
};

export default Card;
