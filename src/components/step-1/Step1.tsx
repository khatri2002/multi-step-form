import classNames from "classnames";
import styles from "./Step1.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { Inputs } from "./types";
import { data } from "./data";
import { UseDataContext } from "../../context/DataProvider";
import StepsLayout from "../steps-layout/StepsLayout";

const Step1 = () => {
  const { activeStep, incrementStep } = UseDataContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => incrementStep();

  return (
    <StepsLayout
      title={data.title}
      desc={data.desc}
      hide={activeStep !== 1}
      hideBackBtn={true}
      onSubmit={handleSubmit(onSubmit)}
    >
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
    </StepsLayout>
  );
};

export default Step1;
