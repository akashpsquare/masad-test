import { FC } from 'react';
import styles from './DataCard.module.css'; // still using same CSS file
import PlugIcon from './PlugIcon.svg'
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
const count = 11;
  return (
    <div className={styles.datacard}>
      <div className={styles.datacard_wrapper}>
        {/* Header */}
        <div className={styles.datacard_header}>
            <div className={styles.datacard_header_values}>
          <img src={PlugIcon} className={styles.datacard_icon} />
          <p className={styles.datacard_datahead}> Your Products</p>
          <p  className={styles.datacard_cout_value}>{count}</p>
          </div>
          <button className={styles.datacard_btn}> Click</button>
        </div>

            {/* Grid */}
            <div className={styles.datacard_grid}>
            {products.map((product) => (
            <div key={product.id} className={styles.datacard_grid_item}>
              <h4 className={styles.datacard_grid_item_passenger}>{product.name}</h4>
              <div className={styles.datacard_grid_item_value}>
                <p>${product.price}</p>
                </div>
                </div>
            ))}
            </div>
      </div>
    </div>
  );
};

export default DataCard;
