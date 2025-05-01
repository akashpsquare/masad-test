import styles from './BenefitContainer.module.css'
import { FC, useState } from 'react'
import { BenefitContainerProps } from '../../ComponentsInterface/CardsInterface'
import DeleButtonIcon from '../../../assetS/Icons/DeleteButtonIcon.svg'

const BenefitContainer: FC<BenefitContainerProps> = ({ benefit, count, label}) => {
  const [visible, setVisible] = useState<number | null>(null);

  const handleVisibility = (index: number) => {
    setVisible(visible === index ? null : index);
  };
 
  return (
    <div className={styles.benefit_container}>
      <div className={styles.benefit_container_header}>
        <h4 className={styles.benefit_container_header_title}>{label}</h4>
        <div className={styles.benefit_container_benefit_count}>
          <p>{count}</p>
        </div>
      </div>

      <div className={styles.benefit_container_body_wrapper}>
        {benefit?.map((item, index) => (
          <div
            key={index}
            className={styles.benefit_container_body}
            onClick={() => handleVisibility(index)}
          >
            <p>{item}</p>
            {visible=== index && (
              <span className={styles.benefit_container_delete_icon}>
                <img
                  src={DeleButtonIcon}
                  alt="icon"
                  className={styles.benefit_container_body_icon}
                />
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitContainer;