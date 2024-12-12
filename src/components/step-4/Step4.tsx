import { UseDataContext } from "../../context/DataProvider";
import StepsLayout from "../steps-layout/StepsLayout";
import styles from "./Step4.module.scss";

const Step4 = () => {
  const { activeStep } = UseDataContext();
  return (
    <StepsLayout
      title="Finishing up"
      desc="Double-check everything looks OK before confirming."
      onSubmit={() => {}}
      hide={activeStep !== 4}
    >
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.planContainer}>
            <div className={styles.label}>
              <span className={styles.title}>Arcade (Monthly)</span>
              <span className={styles.desc}>Change</span>
            </div>
            <div className={styles.value}>$9/mo</div>
          </div>
          <div className={styles.addOnsContainer}>
            <div className={styles.item}>
              <span className={styles.label}>Online service</span>
              <span className={styles.value}>+$1/mo</span>
            </div>
            <div className={styles.item}>
              <span className={styles.label}>Larger storage</span>
              <span className={styles.value}>+$2/mo</span>
            </div>
          </div>
        </div>
        <div className={styles.total}>
          <span className={styles.label}>Total (per month)</span>
          <span className={styles.value}>$12/mo</span>
        </div>
      </div>
    </StepsLayout>
  );
};

export default Step4;
