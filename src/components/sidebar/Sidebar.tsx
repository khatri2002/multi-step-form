import classNames from "classnames";
import styles from "./Sidebar.module.scss";
import { SidebarProps } from "./types";
import { items } from "./data";
import { UseDataContext } from "../../context/DataProvider";

const Sidebar = ({ children }: SidebarProps) => {
  const { activeStep } = UseDataContext();

  return (
    <div className={styles.box}>
      <div className={styles.sidebarContainer}>
        <ul className={styles.list}>
          {items.map((item, index) => {
            return (
              <li
                key={index}
                className={classNames({
                  [styles.item]: true,
                  [styles.active]: activeStep === index + 1,
                })}
              >
                <div className={styles.number}>
                  <span>{index + 1}</span>
                </div>
                <div className={styles.info}>
                  <span className={styles.step}>Step {index + 1}</span>
                  <span className={styles.title}>{item}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      {children}
    </div>
  );
};

export default Sidebar;
