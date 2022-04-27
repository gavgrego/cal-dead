import React from "react";
import Header from "../components/global/header";
import Head from "next/head";
import Footer from "../components/global/footer";
import { createStyles } from "@mantine/core";
import { useMedia } from "react-use";

const useStyles = createStyles((theme) => ({
  content: {
    backgroundColor: theme.colors.gray[0],
    minHeight: "100%",
    marginTop: "100px",

    [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
      padding: "1rem 3rem",
      marginTop: "75px",
    },
  },
}));

const Layout: React.FC = ({ children }): JSX.Element => {
  const { classes } = useStyles();
  const isMobile = useMedia("(max-width: 700px)");

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Golden State Dead</title>
        <meta
          name="description"
          content="Local show calendar and resource for everything Grateful Dead in California."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <section className={classes.content}>{children}</section>
      <Footer />
    </div>
  );
};

export default Layout;
