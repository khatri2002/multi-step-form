import styles from "./Step2.module.scss";
import classNames from "classnames";
import { UseDataContext } from "../../context/DataProvider";
import { data } from "./data";
import { useForm, SubmitHandler } from "react-hook-form";
import { Inputs } from "./types";

const Step2 = () => {
  const { activeStep, incrementStep, decrementStep } = UseDataContext();
  const { register, handleSubmit, watch } = useForm<Inputs>({
    defaultValues: {
      plan: data.plans[0].key,
      duration: false, //checkbox -> data.duration.option1~false & data.duration.option2~true
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => incrementStep();

  return (
    <div
      className={classNames({
        [styles.container]: true,
        [styles.hide]: activeStep !== 2,
      })}
    >
      <h2 className={styles.title}>{data.title}</h2>
      <span className={styles.desc}>{data.desc}</span>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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
                      <span className={styles.radioDesc}>&#36;{plan.desc}</span>
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
        <div className={styles.btnContainer}>
          <button
            className={classNames({
              [styles.back]: true,
              [styles.hide]: false,
            })}
            onClick={(e) => {
              e.preventDefault();
              decrementStep();
            }}
          >
            Go Back
          </button>
          <button type="submit" className={styles.next}>
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step2;
