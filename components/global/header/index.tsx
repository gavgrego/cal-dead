import Link from "next/link";
import { createStyles, Text, useMantineTheme } from "@mantine/core";
import Anchor from "../anchor";

const useStyles = createStyles((theme) => ({
  header: {
    alignItems: "center",
    // background: theme.colors.gray[1],
    borderBottom: 0,
    borderLeft: 0,
    borderRight: 0,
    borderTop: "solid .5rem",
    borderImageSource:
      "linear-gradient(to right, #731ec2, #0074D9, #008000, yellow, red)",
    borderImageSlice: 1,
    display: "flex",
    flexDirection: "row",
    height: "3rem",
    justifyContent: "space-between",
    padding: `${theme.spacing.xs}rem`,
    position: "fixed",
    textTransform: "uppercase",
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
    top: ".5rem",
    left: "50%",
    transform: "translateX(-50%)",

    [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
      left: "1rem",
      top: "1rem",
      transform: "none",
    },
  },
}));

const Header: React.FC = () => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  return (
    <>
      <div className={classes.header}>
        <Link href="/" passHref>
          <Anchor className={classes.logo}>
            <span>🌁</span>
          </Anchor>
        </Link>
        {/* <Text className={classes.name}>Golden State Dead</Text> */}
      </div>
    </>
  );
};

export default Header;
