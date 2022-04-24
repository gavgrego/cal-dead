import {
  useMantineTheme,
  Grid,
  Text,
  Anchor,
  createStyles,
} from "@mantine/core";
import Weather from "../../weather";

const useStyles = createStyles((theme) => ({
  footer: {
    padding: `${theme.spacing.xs}rem`,
    width: "100%",
    position: "absolute",
    background:
      "linear-gradient(45deg,#F17C58, #E94584, #24AADB , #27DBB1,#FFDC18, #FF3706)",
    backgroundSize: " 600% 100%",
    animation: "gradient 4.5s linear infinite",
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
    display: "flex",
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
        <Grid.Col className={classes.content} span={12}>
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
          <Text className={classes.copy}>
            Made in Marin. Built with&nbsp;
            <Anchor
              color={"white"}
              href="https://nextjs.org/"
              className="underline"
              target="_blank"
              rel="noreferrer"
            >
              NextJS
            </Anchor>
            &nbsp;and&nbsp;
            <Anchor
              color={"white"}
              href="https://strapi.io/"
              className="underline"
              target="_blank"
              rel="noreferrer"
            >
              Strapi
            </Anchor>
          </Text>
        </Grid.Col>
      </Grid>
    </footer>
  );
};

export default Footer;
