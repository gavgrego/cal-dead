import React from "react";
import styles from "./styles.module.scss";
import Header from "../components/global/header";
import Head from "next/head";
import Footer from "../components/global/footer";

const Layout: React.FC = ({ children }): JSX.Element => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Cal Dead</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <section className={styles.content}>{children}</section>
      <Footer />
    </div>
  );
};

export default Layout;
