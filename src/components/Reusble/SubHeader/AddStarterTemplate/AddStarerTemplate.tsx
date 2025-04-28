import styles from './AddBenefit.module.css'
import PlusIcon from '../../../assets/Icons/PlusIcon.svg'
const AddStarerTemplate = () => {
  return (
    <div className={styles.add_benefit_stater}>
        <div className={styles.add_starter_template_wrapper}>
           

           <p>
           There is no membership available please add Membership (With Animation)
           </p>
           <div className={styles.add_benefit}>
            <p>Add Benefit</p>
           <img className={styles.add_benefit_icon} src={PlusIcon} alt="" />
           </div>
        </div>
      
    </div>
  )
}

export default AddStarerTemplate
