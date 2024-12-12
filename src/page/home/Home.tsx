import styles from "./Home.module.scss";
import Step1 from "../../components/step-1/Step1";
import Step2 from "../../components/step-2/Step2";
import Sidebar from "../../components/sidebar/Sidebar";
import DataProvider from "../../context/DataProvider";
import Step3 from "../../components/step-3/Step3";

const Home = () => {
  return (
    <DataProvider>
      <main className={styles.main}>
        <Sidebar>
          <Step1 />
          <Step2 />
          <Step3 />
        </Sidebar>
      </main>
    </DataProvider>
  );
};

export default Home;
