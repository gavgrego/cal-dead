import Link from "next/link";
import { createStyles, Text, useMantineTheme } from "@mantine/core";
import Anchor from "../anchor";
import Marquee from "react-fast-marquee";
import { useMedia } from "react-use";
import Image from "next/image";
import Logo from "../../../assets/logo/golden-state-dead-logo-small.png";

const useStyles = createStyles((theme) => ({
  header: {
    alignItems: "center",
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 9,
  },
  name: {
    color: theme.colors.orange,
    fontWeight: 700,
    position: "absolute",
    left: "7rem",
  },
  logo: {
    animation: "rotation 45s infinite linear",

    "@keyframes rotation": {
      from: {
        transform: "rotate(0deg)",
      },
      to: {
        transform: "rotate(359deg)",
      },
    },
  },
  logoContain: {
    cursor: "pointer",
    lineHeight: 1,
    position: "absolute",
    top: "2.75rem",
    left: "50%",
    transform: "translateX(-50%)",

    [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
      left: "3rem",
      top: "3rem",
      transform: "none",
    },
  },
  scrollingTextContain: {
    background:
      "linear-gradient(45deg,#F17C58, #E94584, #24AADB , #27DBB1,#FFDC18, #FF3706)",
    animation: "gradient 7.5s linear infinite",
    fontWeight: "bold",
    color: "white",
    whiteSpace: "nowrap",
    animationDirection: "alternate",
    backgroundSize: " 600% 100%",
    "@keyframes gradient": {
      "0%": {
        backgroundPosition: "0%",
      },
      "100%": {
        backgroundPosition: "100%",
      },
    },
    padding: ".25rem",
  },
}));

const Header: React.FC = () => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const isMobile = useMedia("(max-width: 700px)");

  return (
    <>
      <div className={classes.header}>
        <Marquee
          speed={isMobile ? 60 : 120}
          gradient={false}
          className={classes.scrollingTextContain}
        >
          &nbsp;&nbsp;&nbsp;💀 GOLDEN STATE DEAD – Find local Dead shows around
          California 🌹&nbsp;&nbsp;&nbsp;
        </Marquee>
        <Link href="/">
          {/* <Anchor className={classes.logo}> */}
          <span className={classes.logoContain}>
            <Image
              className={classes.logo}
              src={Logo}
              height="110"
              width="110"
            />
          </span>
          {/* </Anchor> */}
        </Link>
      </div>
    </>
  );
};

export default Header;
