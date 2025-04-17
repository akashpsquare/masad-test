import React from 'react';
import styles from './DataCardBody.module.css';
import { CardBodyProp } from '../../ComponentsInterface/CardsInterface';






const CardBody: React.FC<CardBodyProp> = ( {data} ) => {
  console.log(data)
  return (
    <div className={styles.datacard_grid}>
      {data.map((data:any) => (
        <div key={data.id} className={styles.datacard_grid_item}>
          <h4>{data.name}</h4>
          <p className={styles.datacard_grid_item_value}>{data.price}</p>
        </div>
      ))}
    </div>
  );
};

export default CardBody;
