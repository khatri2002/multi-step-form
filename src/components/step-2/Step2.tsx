import styles from "./Step2.module.scss";
import classNames from "classnames";
import { UseDataContext } from "../../context/DataProvider";
import { data } from "./data";
import { useForm, SubmitHandler } from "react-hook-form";
import { Inputs } from "./types";
import StepsLayout from "../steps-layout/StepsLayout";

const Step2 = () => {
  const { activeStep, handleSetActiveStep } = UseDataContext();
  const { register, handleSubmit, watch } = useForm<Inputs>({
    defaultValues: {
      plan: data.plans[0].key,
      duration: false, //checkbox -> data.duration.option1~false & data.duration.option2~true
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) =>
    handleSetActiveStep(activeStep + 1);

  return (
    <StepsLayout
      title={data.title}
      desc={data.desc}
      hide={activeStep !== 2}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <div className={styles.radioContainer}>
          {data.plans.map((plan, index) => {
            return (
              <label key={index} htmlFor={plan.key} className={styles.radio}>
                <input
                  id={plan.key}
                  type="radio"
                  {...register("plan")}
                  value={plan.key}
                />
                <div className={styles.item}>
                  <img src={plan.icon.img} alt={plan.icon.alt} />
                  <div className={styles.bottom}>
                    <span className={styles.radioTitle}>{plan.title}</span>
                    <span className={styles.radioDesc}>{plan.desc}</span>
                  </div>
                </div>
              </label>
            );
          })}
        </div>
        <div className={styles.toggleContainer}>
          <span
            className={classNames({
              [styles.label]: true,
              [styles.active]: !watch("duration"),
            })}
          >
            {data.duration.option1.label}
          </span>
          <label htmlFor="duration" className={styles.toggle}>
            <input id="duration" type="checkbox" {...register("duration")} />
          </label>
          <span
            className={classNames({
              [styles.label]: true,
              [styles.active]: watch("duration"),
            })}
          >
            {data.duration.option2.label}
          </span>
        </div>
      </div>
    </StepsLayout>
  );
};

export default Step2;
