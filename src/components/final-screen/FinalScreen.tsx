import styles from "./FinalScreen.module.scss";
import IconThankYou from "../../assets/images/icon-thank-you.svg";

const FinalScreen = () => {
  return (
    <div className={styles.container}>
      <img src={IconThankYou} alt="thank-you" />
      <h2>Thank you!</h2>
      <span>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </span>
    </div>
  );
};

export default FinalScreen;
