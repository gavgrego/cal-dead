import React, { useEffect, useState } from "react";
import Header from "../components/global/header";
import Head from "next/head";
import Footer from "../components/global/footer";
import { createStyles, Grid } from "@mantine/core";
import { useMedia } from "react-use";
import { useRouter } from "next/router";

const useStyles = createStyles((theme) => ({
  content: {
    backgroundColor: theme.colors.gray[0],
    maxWidth: "1600px",
    minHeight: "100%",
    margin: "130px auto 2rem",
    width: "100%",

    [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
      padding: "1rem 3rem",
    },
  },
  contain: {
    backgroundColor: theme.colors.gray[0],
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  contentHome: {
    backgroundColor: theme.colors.gray[0],
    maxWidth: "1600px",
    minHeight: "100%",
    marginTop: "175px",
    width: "100%",

    [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
      padding: "1rem 3rem",
      margin: "90px auto 0",
    },
  },
}));

const Layout: React.FC = ({ children }): JSX.Element => {
  const { classes } = useStyles();
  const router = useRouter();
  const [isHome, setIsHome] = useState<string>(router.pathname);

  useEffect(() => {
    setIsHome(router.pathname);
  }, [router]);

  return (
    <div className={classes.contain}>
      <Head>
        <title>Golden State Dead</title>
        <meta
          name="description"
          content="Local show calendar and resource for everything Grateful Dead in California."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section
        className={isHome === "/" ? classes.contentHome : classes.content}
      >
        {children}
      </section>
      <Footer />
    </div>
  );
};

export default Layout;
