import React from "react";
import Header from "../components/global/header";
import Head from "next/head";
import Footer from "../components/global/footer";
import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  content: {
    backgroundColor: theme.colors.gray[0],
    minHeight: "100%",
    padding: "1rem 3rem",
    marginTop: "75px",
  },
}));

const Layout: React.FC = ({ children }): JSX.Element => {
  const { classes } = useStyles();
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Cal Dead</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <section className={classes.content}>{children}</section>
      <Footer />
    </div>
  );
};

export default Layout;
