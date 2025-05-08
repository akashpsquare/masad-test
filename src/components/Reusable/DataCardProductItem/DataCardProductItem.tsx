
import styles from './DataCardProductItem.module.css';

interface DataCardProductItemProps {
  id: number | string;
  name: string;
  price: string | number;
}

const DataCardProductItem: React.FC<DataCardProductItemProps> = ({ id, name, price }) => {
  return (
    <div key={id} className={styles.datacard_grid_item}>
      <h4 className={styles.datacard_grid_item_header}>{name}</h4>
      <p className={styles.datacard_grid_item_value}>{price}</p>
    </div>
  );
};

export default DataCardProductItem;