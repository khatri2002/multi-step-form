import classNames from "classnames";
import styles from "./StepsLayout.module.scss";
import { StepsLayoutProps } from "./types";
import { UseDataContext } from "../../context/DataProvider";

const StepsLayout = ({
  title,
  desc,
  hide,
  hideBackBtn,
  showConfirmBtn,
  loading,
  onSubmit,
  children,
}: StepsLayoutProps) => {
  const { activeStep, handleSetActiveStep } = UseDataContext();
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
          <div
            className={classNames({
              [styles.btnContainer]: true,
              [styles.desktop]: true,
            })}
          >
            <button
              className={classNames({
                [styles.back]: true,
                [styles.hide]: hideBackBtn,
              })}
              onClick={(e) => {
                e.preventDefault();
                handleSetActiveStep(activeStep - 1);
              }}
            >
              Go Back
            </button>
            {showConfirmBtn ? (
              <button
                disabled={loading}
                type="submit"
                className={styles.confirm}
              >
                Confirm
              </button>
            ) : (
              <button type="submit" className={styles.next}>
                Next Step
              </button>
            )}
          </div>
        </form>
      </div>
      <div
        className={classNames({
          [styles.btnContainer]: true,
          [styles.mobile]: true,
          [styles.hide]: hide,
        })}
      >
        <button
          className={classNames({
            [styles.back]: true,
            [styles.hide]: hideBackBtn,
          })}
          onClick={(e) => {
            e.preventDefault();
            handleSetActiveStep(activeStep - 1);
          }}
        >
          Go Back
        </button>
        {showConfirmBtn ? (
          <button
            disabled={loading}
            onClick={onSubmit}
            type="submit"
            className={styles.confirm}
          >
            Confirm
          </button>
        ) : (
          <button type="submit" onClick={onSubmit} className={styles.next}>
            Next Step
          </button>
        )}
      </div>
    </>
  );
};

export default StepsLayout;
