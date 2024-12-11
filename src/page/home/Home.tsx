import classNames from "classnames";
import styles from "./Home.module.scss";
import IconArcade from "../../assets/images/icon-arcade.svg";
import IconAdvanced from "../../assets/images/icon-advanced.svg";
import IconPro from "../../assets/images/icon-pro.svg";

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
        {/* step-1 starts */}
        {/* <div className={styles.contentContainer}>
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
        </div> */}
        {/* step-1 ends */}

        {/* step-2 starts */}
        <div className={styles.contentContainer}>
          <h2 className={styles.title}>Select your plan</h2>
          <span className={styles.desc}>
            You have the option of monthly or yearly billing.
          </span>
          <form className={styles.form}>
            <div>
              <div className={styles.radioContainer}>
                <label htmlFor="arcade" className={styles.radio}>
                  <input id="arcade" type="radio" name="plan" />
                  <div className={styles.item}>
                    <img src={IconArcade} alt="icon-arcade" />
                    <div className={styles.bottom}>
                      <span className={styles.radioTitle}>Arcade</span>
                      <span className={styles.radioDesc}>&#36;9/mo</span>
                    </div>
                  </div>
                </label>
                <label htmlFor="advanced" className={styles.radio}>
                  <input id="advanced" type="radio" name="plan" />
                  <div className={styles.item}>
                    <img src={IconAdvanced} alt="icon-advanced" />
                    <div className={styles.bottom}>
                      <span className={styles.radioTitle}>Advanced</span>
                      <span className={styles.radioDesc}>&#36;12/mo</span>
                    </div>
                  </div>
                </label>
                <label htmlFor="pro" className={styles.radio}>
                  <input id="pro" type="radio" name="plan" />
                  <div className={styles.item}>
                    <img src={IconPro} alt="icon-pro" />
                    <div className={styles.bottom}>
                      <span className={styles.radioTitle}>Pro</span>
                      <span className={styles.radioDesc}>&#36;15/mo</span>
                    </div>
                  </div>
                </label>
              </div>
              <div className={styles.toggleContainer}>
                <span className={classNames({ [styles.active]: true })}>
                  Monthly
                </span>
                <label htmlFor="duration" className={styles.toggle}>
                  <input id="duration" type="checkbox" />
                </label>
                <span className={classNames({ [styles.active]: false })}>
                  Yearly
                </span>
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
        {/* step-2 ends */}
      </div>
    </main>
  );
};

export default Home;
