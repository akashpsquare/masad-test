import { FC,useState } from 'react';
import styles from './DataCard.module.css';
// still using same CSS file
// import PlugIcon from './PlugIcon.svg'
import PlugIcon from './PlugIcon.svg'; // using ES6 import syntax
import DataCardHeader from '../DataCardHeader/DataCardHeader'; // importing the component
import DataCardBody from '../DataCardBody/DataCardBody'; // importing the component
import Card from '../Card/Card'

const DataCard: FC= () => {

  interface Product {
    id: number;
    name: string;
    price: number;
  }

  

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
  const label = 'Deep Cleaning';

  return (


     <Card className='reminder_card'>
  <div className={styles.datacard}>
      <div className={styles.datacard_wrapper}>
         <DataCardHeader variant='service' headercount={products.length} headertitle='Add' headerlabel={label} headericon={PlugIcon} headerlabeltag={labeltag}   />
         <DataCardBody variant="reminder" data={products} reminderdate={5}  benefitdata={benefits} />
      </div>
  </div>
  </Card>
  );
};

export default DataCard;
