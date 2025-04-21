import React from 'react';
import styles from './DataCardBody.module.css';
import { CardProp } from '../../ComponentsInterface/CardsInterface';

const DataCardBody: React.FC<CardProp> = ({ data, variant }) => {
  console.log(data);

  return (
    <>
      {variant === 'service' && (
        <div className={styles.datacard_service_heading}>
         <p className={styles.datacard_description}>
             Get periority Scheduling for service requists and maintainance visits 
        </p>

        </div>
     
      )}

      <div className={styles.datacard_grid}>
        {data?.map((data: any) => (
          <div key={data.id} className={styles.datacard_grid_item}>
            <h4>{data.name}</h4>
            <p className={styles.datacard_grid_item_value}>{data.price}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default DataCardBody;
