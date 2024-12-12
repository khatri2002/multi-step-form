import { UseDataContext } from "../../context/DataProvider";
import StepsLayout from "../steps-layout/StepsLayout";
import styles from "./Step3.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { Inputs } from "./types";
import { data } from "./data";

const Step3 = () => {
  const { activeStep, handleSetActiveStep } = UseDataContext();
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) =>
    handleSetActiveStep(activeStep + 1);

  return (
    <StepsLayout
      title={data.title}
      desc={data.desc}
      hide={activeStep !== 3}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={styles.container}>
        {data.addOns.map((addOn, index) => {
          return (
            <label key={index} htmlFor={addOn.key} className={styles.item}>
              <input id={addOn.key} type="checkbox" {...register(addOn.key)} />
              <div className={styles.customInput}>
                <span className={styles.checkmark}>
                  <div className={styles.stem}></div>
                  <div className={styles.kick}></div>
                </span>
              </div>
              <div className={styles.text}>
                <span className={styles.title}>{addOn.title}</span>
                <span className={styles.desc}>{addOn.desc}</span>
              </div>
              <span className={styles.price}>{addOn.price}</span>
            </label>
          );
        })}
      </div>
    </StepsLayout>
  );
};

export default Step3;
