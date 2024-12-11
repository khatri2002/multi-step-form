import classNames from "classnames";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <main className={styles.main}>
      <div className={styles.box}>
        <div className={styles.sidebarContainer}>
          <ul className={styles.list}>
            <li
              className={classNames({
                [styles.item]: true,
                [styles.active]: true,
              })}
            >
              <div className={styles.number}>
                <span>1</span>
              </div>
              <div className={styles.info}>
                <span className={styles.step}>Step 1</span>
                <span className={styles.title}>Your info</span>
              </div>
            </li>
            <li
              className={classNames({
                [styles.item]: true,
                [styles.active]: false,
              })}
            >
              <div className={styles.number}>
                <span>2</span>
              </div>
              <div className={styles.info}>
                <span className={styles.step}>Step 2</span>
                <span className={styles.title}>Select plan</span>
              </div>
            </li>
            <li
              className={classNames({
                [styles.item]: true,
                [styles.active]: false,
              })}
            >
              <div className={styles.number}>
                <span>3</span>
              </div>
              <div className={styles.info}>
                <span className={styles.step}>Step 3</span>
                <span className={styles.title}>Add-ons</span>
              </div>
            </li>
            <li
              className={classNames({
                [styles.item]: true,
                [styles.active]: false,
              })}
            >
              <div className={styles.number}>
                <span>4</span>
              </div>
              <div className={styles.info}>
                <span className={styles.step}>Step 4</span>
                <span className={styles.title}>Summary</span>
              </div>
            </li>
          </ul>
        </div>
        <div className={styles.formContainer}>
          <h2 className={styles.title}>Personal info</h2>
          <span className={styles.desc}>
            Please provide your name, email address, and phone number.
          </span>
          <form className={styles.form}>
            <div className={styles.fieldsContainer}>
              <div
                className={classNames({
                  [styles.field]: true,
                  [styles.error]: false,
                })}
              >
                <div className={styles.label}>
                  <label htmlFor="">Name</label>
                  <span className={styles.errorText}>
                    This field is required
                  </span>
                </div>
                <input type="text" placeholder="e.g. Stephen King" />
              </div>
              <div
                className={classNames({
                  [styles.field]: true,
                  [styles.error]: false,
                })}
              >
                <div className={styles.label}>
                  <label htmlFor="">Email Address</label>
                  <span className={styles.errorText}>
                    This field is required
                  </span>
                </div>
                <input type="text" placeholder="e.g. stephenking@lorem.com" />
              </div>
              <div
                className={classNames({
                  [styles.field]: true,
                  [styles.error]: false,
                })}
              >
                <div className={styles.label}>
                  <label htmlFor="">Phone Number</label>
                  <span className={styles.errorText}>
                    This field is required
                  </span>
                </div>
                <input type="text" placeholder="e.g. +1 234 567 890" />
              </div>
            </div>
            <div className={styles.btnContainer}>
              <button
                className={classNames({
                  [styles.back]: true,
                  [styles.hide]: false,
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
      </div>
    </main>
  );
};

export default Home;
