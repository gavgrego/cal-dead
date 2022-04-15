import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/global/header";
import styles from "../styles/Home.module.css";
import Calendar from "../components/calendar";
import Footer from "../components/global/footer";
import Weather from "../components/weather";

const Blog: NextPage = () => {
  return (
    <section className={styles.content}>
      <div className="grid grid-cols-4 grid-flow-col gap-4">
        <div className="col-span-3">
          {/* for each post in blog */}

          {/*  */}
        </div>
      </div>
    </section>
  );
};

export default Blog;
