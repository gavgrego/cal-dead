import {
  useMantineTheme,
  Grid,
  Text,
  Anchor,
  createStyles,
} from "@mantine/core";
import Link from "next/link";
import Image from "next/image";
import InstagramIcon from "../../../assets/icons/instagram.svg";

const useStyles = createStyles((theme) => ({
  footer: {
    padding: `${theme.spacing.xs}rem`,
    width: "100%",
    background:
      "linear-gradient(45deg,#F17C58, #E94584, #24AADB , #27DBB1,#FFDC18, #FF3706)",
    backgroundSize: " 600% 100%",
    animation: "gradient 6.5s linear infinite",
    animationDirection: "alternate",
    "@keyframes gradient": {
      "0%": {
        backgroundPosition: "0%",
      },
      "100%": {
        backgroundPosition: "100%",
      },
    },
  },
  content: {
    color: "white",
    display: "flex",
    flexDirection: "column",
    fontSize: "0.875rem",
  },

  copy: {
    alignItems: "center",
    fontSize: "0.75rem",
    fontWeight: "bold",

    a: {
      fontSize: "0.75rem",
      textDecoration: "underline",
    },

    span: {
      fontSize: "1.5rem",
    },
  },
  copyLarge: {
    color: "white",
    display: "flex",
    fontSize: "1rem",
    fontWeight: "bold",

    a: {
      fontSize: "1rem",
      transition: "opacity .3s ease",
      textDecoration: "none",

      "&:hover": {
        opacity: ".7",
      },
    },
  },
}));

const Footer: React.FC = () => {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  return (
    <footer
      className={classes.footer}
      style={{ backgroundColor: theme.colors.orange[0] }}
    >
      <Grid mx={0}>
        <Grid.Col span={12}>
          <Text className={classes.copyLarge}>
            {/* <Link href="/about" passHref>
              <Anchor color={"white"}>About</Anchor>
            </Link>
            &nbsp; &nbsp; &nbsp; */}
            <Anchor
              color={"white"}
              href="https://discord.gg/FswagXhdZy"
              target="_blank"
            >
              Discord
            </Anchor>
            &nbsp; &nbsp; &nbsp;
            <Anchor
              href="https://instagram.com/goldenstatedead"
              target="_blank"
            >
              <Image src={InstagramIcon} height="24" width="24" />
            </Anchor>
          </Text>
        </Grid.Col>
        <Grid.Col mt={32} className={classes.content} span={12}>
          <Text className={classes.copy}>
            📧&nbsp;
            <Anchor
              color={"white"}
              href="mailto:gavgrego@gmail.com"
              className="underline"
              target="_blank"
              rel="noreferrer"
            >
              Get ahold of me
            </Anchor>
          </Text>
          <Text component="p" mb={0} className={classes.copy}>
            Made in Marin County, CA.
            <br />
            Built with&nbsp;
            <Anchor
              color={"white"}
              href="https://nextjs.org/"
              target="_blank"
              rel="noreferrer"
            >
              NextJS
            </Anchor>
            &nbsp;and&nbsp;
            <Anchor
              color={"white"}
              href="https://strapi.io/"
              target="_blank"
              rel="noreferrer"
            >
              Strapi
            </Anchor>
          </Text>
          <Text component="p" mb={0} className={classes.copy}>
            v 0.9.0
          </Text>
        </Grid.Col>
      </Grid>
    </footer>
  );
};

export default Footer;
