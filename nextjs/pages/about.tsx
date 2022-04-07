import Footer from "../components/global/footer";
import Header from "../components/global/header";
import Weather from "../components/weather";
import styles from "../styles/Home.module.css";
import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      {/* <Calendar /> */}
      <section>
        <div className="grid grid-col-4 grid-flow-col gap-4">
          <div className="col-span-1">
            <Weather />
            <div>This week in the Bay Area:</div>
            <div>This week in the Bay Area:</div>
          </div>
        </div>
      </section>

      <main className={styles.main}></main>

      <Footer />
    </div>
  );
};

export default About;
