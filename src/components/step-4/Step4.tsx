import { UseDataContext } from "../../context/DataProvider";
import StepsLayout from "../steps-layout/StepsLayout";
import { data } from "./data";
import styles from "./Step4.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { Inputs } from "./type";
import { useState } from "react";
import FinalScreen from "../final-screen/FinalScreen";

const Step4 = () => {
  const { activeStep, handleSetActiveStep, formData } = UseDataContext();
  const { handleSubmit } = useForm<Inputs>();
  const [loading, setLoading] = useState<boolean>(false);
  const [confirmed, setConfirmed] = useState<boolean>(false);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // dummy form submission

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setConfirmed(true);
    }, 2000);
  };

  const getTotalPrice = () => {
    const basePrice = formData.step2.plan.price;
    const totalAddOnPrice = formData.step3.addOns.reduce(
      (total, addOn) => total + addOn.price,
      0,
    );
    const totalPrice = basePrice + totalAddOnPrice;
    return formData.step2.duration === "Monthly"
      ? `$${totalPrice}/mo`
      : `$${totalPrice}/yr`;
  };

  return confirmed ? (
    <FinalScreen />
  ) : (
    <StepsLayout
      title={data.title}
      desc={data.desc}
      onSubmit={handleSubmit(onSubmit)}
      hide={activeStep !== 4}
      showConfirmBtn={true}
      loading={loading}
    >
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.planContainer}>
            <div className={styles.label}>
              <span className={styles.title}>
                {formData.step2.plan.label} ({formData.step2.duration})
              </span>
              <span
                className={styles.desc}
                onClick={() => handleSetActiveStep(2)}
              >
                Change
              </span>
            </div>
            <div className={styles.value}>
              {formData.step2.duration === "Monthly"
                ? `$${formData.step2.plan.price}/mo`
                : `$${formData.step2.plan.price}/yr`}
            </div>
          </div>
          {formData.step3.addOns.length > 0 && (
            <div className={styles.addOnsContainer}>
              {formData.step3.addOns.map((addOn, index) => {
                return (
                  <div key={index} className={styles.item}>
                    <span className={styles.label}>{addOn.label}</span>
                    <span className={styles.value}>
                      {formData.step2.duration === "Monthly"
                        ? `+$${addOn.price}/mo`
                        : `+$${addOn.price}/yr`}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className={styles.total}>
          <span className={styles.label}>
            Total (per{" "}
            {formData.step2.duration === "Monthly" ? "month" : "year"})
          </span>
          <span className={styles.value}>{getTotalPrice()}</span>
        </div>
      </div>
    </StepsLayout>
  );
};

export default Step4;
