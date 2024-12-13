import styles from "./Step2.module.scss";
import classNames from "classnames";
import { UseDataContext } from "../../context/DataProvider";
import { data } from "./data";
import { useForm, SubmitHandler } from "react-hook-form";
import { Inputs } from "./types";
import StepsLayout from "../steps-layout/StepsLayout";

const Step2 = () => {
  const { activeStep, handleSetActiveStep, formData, handleSetFormData } =
    UseDataContext();
  const { register, handleSubmit, watch } = useForm<Inputs>({
    defaultValues: {
      plan: data.plans[0].key,
      duration: false,
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (userData) => {
    // include plan 'label' & 'price'
    const plan = data.plans.find((plan) => plan.key === userData.plan);
    const label = plan ? plan.label : "-";
    const price = plan
      ? userData.duration
        ? plan.price.yearly
        : plan.price.monthly
      : 0;

    // include duration 'label'
    // checkbox false & true values
    const duration = userData.duration
      ? data.duration.option2.label
      : data.duration.option1.label;

    handleSetFormData({
      ...formData,
      step2: {
        plan: {
          label: label,
          price: price,
        },
        duration: duration,
      },
    });
    handleSetActiveStep(activeStep + 1);
  };

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
                <span className={styles.item}>
                  <img src={plan.icon.img} alt={plan.icon.alt} />
                  <span className={styles.bottom}>
                    <span className={styles.radioTitle}>{plan.label}</span>
                    <span className={styles.radioDesc}>
                      {watch("duration") // checkbox true & false values
                        ? `$${plan.price.yearly}/yr`
                        : `$${plan.price.monthly}/mo`}
                    </span>
                    <span
                      className={classNames({
                        [styles.discount]: true,
                        [styles.show]: watch("duration"),
                      })}
                    >
                      {plan.yearlyDiscountText}
                    </span>
                  </span>
                </span>
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
