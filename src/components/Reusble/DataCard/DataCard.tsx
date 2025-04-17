import { FC } from 'react';
import styles from './DataCard.module.css'; // still using same CSS file
import Icon from '../../../assets/Icons/PlusIcon.svg';

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

  return (
    <div className={styles.empty_card}>
      <div className={styles.card_wrapper}>
        {/* Header */}
        <div className={styles.header}>
          <img src={Icon} className={styles.icon} />
          <span className={styles.card_wrapper_label}>Your Products</span>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {products.map((product) => (
            <div key={product.id} className={styles.grid_item}>
              <h4 className={styles.emptycard_grid_item_passenger}>{product.name}</h4>
              <div className={styles.emptycard_grid_item_value}>
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
