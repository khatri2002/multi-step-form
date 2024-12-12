import classNames from "classnames";
import styles from "./Step1.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { Inputs } from "./types";
import { data } from "./data";
import { UseDataContext } from "../../context/DataProvider";

const Step1 = () => {
  const { activeStep, incrementStep } = UseDataContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => incrementStep();

  return (
    <div
      className={classNames({
        [styles.container]: true,
        [styles.hide]: activeStep !== 1,
      })}
    >
      <h2 className={styles.title}>{data.title}</h2>
      <span className={styles.desc}>{data.desc}</span>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.fieldsContainer}>
          {data.fields.map((field, index) => {
            return (
              <div
                key={index}
                className={classNames({
                  [styles.field]: true,
                  [styles.error]: errors[field.key],
                })}
              >
                <div className={styles.label}>
                  <label htmlFor={field.key}>{field.label}</label>
                  <span role="alert" className={styles.errorText}>
                    {errors[field.key]?.message}
                  </span>
                </div>
                <input
                  id={field.key}
                  type={field.type}
                  placeholder={field.placeholder}
                  {...register(field.key, field.rules)}
                  aria-invalid={errors[field.key] ? "true" : "false"}
                />
              </div>
            );
          })}
        </div>
        <div className={styles.btnContainer}>
          <button
            className={classNames({
              [styles.back]: true,
              [styles.hide]: true,
            })}
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

export default Step1;
