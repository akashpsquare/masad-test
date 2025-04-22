import { FC } from 'react';
import styles from './DataCard.module.css'; // still using same CSS file
// import PlugIcon from './PlugIcon.svg'
import PlugIcon from './PlugIcon.svg'; // using ES6 import syntax
import DataCardHeader from '../DataCardHeader/DataCardHeader'; // importing the component
import DataCardBody from '../DataCardBody/DataCardBody'; // importing the component
import { CardProp } from '../../ComponentsInterface/CardsInterface';

const DataCard: FC<CardProp> = ({
data,
headerlabeltag,
headercount,
headerlabel,



}) => {
  return (
    <div className={styles.datacard}>
      <div className={styles.datacard_wrapper}>
         <DataCardHeader variant='product' headercount={headercount} headertitle='Add' headericon={PlugIcon} headerlabeltag={headerlabeltag} headerlabel={headerlabel}  />
         <DataCardBody variant="product" data={data}/>
      </div>
    </div>
  );
};

export default DataCard;
