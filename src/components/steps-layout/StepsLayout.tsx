import classNames from "classnames";
import styles from "./StepsLayout.module.scss";
import { StepsLayoutProps } from "./types";
import { UseDataContext } from "../../context/DataProvider";

const StepsLayout = ({
  title,
  desc,
  hide,
  hideBackBtn,
  onSubmit,
  children,
}: StepsLayoutProps) => {
  const { decrementStep } = UseDataContext();
  return (
    <>
      <div
        className={classNames({
          [styles.container]: true,
          [styles.hide]: hide,
        })}
      >
        <h2 className={styles.title}>{title}</h2>
        <span className={styles.desc}>{desc}</span>
        <form className={styles.form} onSubmit={onSubmit}>
          {children}
          <div className={styles.btnContainer}>
            <button
              className={classNames({
                [styles.back]: true,
                [styles.hide]: hideBackBtn,
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
    </>
  );
};

export default StepsLayout;
