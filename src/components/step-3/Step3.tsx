import { UseDataContext } from "../../context/DataProvider";
import StepsLayout from "../steps-layout/StepsLayout";
import styles from "./Step3.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { Inputs } from "./types";
import { data } from "./data";

const Step3 = () => {
  const { activeStep, handleSetActiveStep, formData, handleSetFormData } =
    UseDataContext();
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (userData) => {
    const addOns = data.addOns
      .filter((addOn) => userData[addOn.key])
      .map((addOn) => ({
        label: addOn.label,
        price:
          formData.step2.duration === "Monthly"
            ? addOn.price.monthly
            : addOn.price.yearly,
      }));
    handleSetFormData({ ...formData, step3: { addOns } });
    handleSetActiveStep(activeStep + 1);
  };

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
              <span className={styles.customInput}>
                <span className={styles.checkmark}>
                  <span className={styles.stem}></span>
                  <span className={styles.kick}></span>
                </span>
              </span>
              <span className={styles.text}>
                <span className={styles.label}>{addOn.label}</span>
                <span className={styles.desc}>{addOn.desc}</span>
              </span>
              <span className={styles.price}>
                {formData.step2.duration === "Monthly"
                  ? `+$${addOn.price.monthly}/mo`
                  : `+$${addOn.price.yearly}/yr`}
              </span>
            </label>
          );
        })}
      </div>
    </StepsLayout>
  );
};

export default Step3;
