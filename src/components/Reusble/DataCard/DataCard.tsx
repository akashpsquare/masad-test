import { FC } from 'react';
import styles from './DataCard.module.css'; // still using same CSS file
// import PlugIcon from './PlugIcon.svg'
import PlugIcon from './PlugIcon.svg'; // using ES6 import syntax
import DataCardHeader from '../DataCardHeader/DataCardHeader'; // importing the component
import DataCardBody from '../DataCardBody/DataCardBody'; // importing the component
interface Product {
  id: number;
  name: string;
  price: number;
  
}

const DataCard: FC = ({

}) => {
  const products: Product[] = [
    { id: 1, name: 'Cool Sneakers', price: 59.99 },
    { id: 2, name: 'Cool Watch', price: 129.99 },
    { id: 3, name: 'Nothing', price: 59.99 },
    { id: 4, name: 'Something', price: 129.99 },
    { id: 5, name: 'Another Item', price: 39.99 },
    { id: 6, name: 'New Stuff', price: 89.99 },
  ];

 const title = 'Freight';
const count = products.length;
const label = 'Hydrolic lift'
  return (
    <div className={styles.datacard}>
      <div className={styles.datacard_wrapper}>
      <DataCardHeader  count={count} icon={PlugIcon} labelTag={title} label={label}  />
         <DataCardBody data={products}/>
      </div>
    </div>
  );
};

export default DataCard;
