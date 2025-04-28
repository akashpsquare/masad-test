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


  type EventData = {
    eventName: string;
    message: string;
    startTime: string;
    endTime: string;
    startDate: string;
    endDate: string;
    currency: string;
    offerExpiry: string;
    expiryMessage: string;
  };
  

  const events: EventData[] = [
    {
      eventName: "Spring Sale",
      message: "Up to 50% off on all items!",
      startTime: "09:00 AM",
      endTime: "09:00 PM",
      startDate: "2025-04-28",
      endDate: "2025-05-05",
      currency: "USD",
      offerExpiry: "2440",
      expiryMessage: "Hurry! Sale ends May 5th at 9 PM!"
    },
    {
      eventName: "Flash Deal Friday",
      message: "One-day flash deals on electronics!",
      startTime: "12:00 AM",
      endTime: "11:59 PM",
      startDate: "2025-05-02",
      endDate: "2025-05-02",
      currency: "USD",
      offerExpiry: "000",
      expiryMessage: "Flash Deal Friday ends tonight"
    },
    {
      eventName: "Summer Kickoff",
      message: "Save big on summer essentials",
      startTime: "10:00 AM",
      endTime: "10:00 PM",
      startDate: "2025-06-01",
      endDate: "2025-06-10",
      currency: "EUR",
      offerExpiry: "900",
      expiryMessage: "Last chance to enjoy summer discounts!"
    }
  ];

  return (


     <Card className='product_card'>
  <div className={styles.datacard}>
      <div className={styles.datacard_wrapper}>
         <DataCardHeader variant='product' headercount={products.length} headertitle='Add' headerlabel={label} headericon={PlugIcon} headerlabeltag={labeltag} />
         <DataCardBody variant="product" data={products}  />
      </div>
  </div>
  </Card>
  );
};

export default DataCard;
