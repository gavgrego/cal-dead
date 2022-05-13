import Link from "next/link";
import { createStyles, Text, useMantineTheme } from "@mantine/core";
import Anchor from "../anchor";

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
    fontSize: "5rem",
    lineHeight: 1,
    position: "absolute",
    top: "2.5rem",
    left: "50%",
    transform: "translateX(-50%)",

    [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
      left: "3rem",
      top: "3rem",
      transform: "none",
    },
  },
  scrollingText: {
    animation: "scroll-left 9s linear infinite",
    fontWeight: "bold",
    color: "white",
    backgroundClip: "text",
    backgroundSize: "200% auto",
    transform: "translateX(-100%)",
    lineHeight: 1,
    letterSpacing: ".5px",
    width: "133%",

    "@keyframes scroll-left": {
      "0%": {
        transform: "translateX(100%)",
      },
    },

    [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
      animation: "scroll-left 20s linear infinite",
      width: "100%",
    },
  },
  scrollingTextContain: {
    background:
      "linear-gradient(45deg,#F17C58, #E94584, #24AADB , #27DBB1,#FFDC18, #FF3706)",
    animation: "gradient 7.5s linear infinite",
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
    padding: ".5rem",
  },
}));

const Header: React.FC = () => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  return (
    <>
      <div className={classes.header}>
        <div className={classes.scrollingTextContain}>
          <Text className={classes.scrollingText}>
            🌹 GOLDEN STATE DEAD – Find Local Dead shows in California 💀
          </Text>
        </div>
        <Link href="/" passHref>
          <Anchor className={classes.logo}>
            <span>🌁</span>
          </Anchor>
        </Link>
      </div>
    </>
  );
};

export default Header;
