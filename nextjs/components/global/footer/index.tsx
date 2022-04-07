import styles from "./styles.module.scss";
import { useMantineTheme, Grid, Text, Anchor } from "@mantine/core";
import Weather from "../../weather";

const Footer: React.FC = () => {
  const theme = useMantineTheme();

  return (
    <footer
      className={`${styles.footer}  p-8 border-t-4 border-gray-dark`}
      style={{ backgroundColor: theme.colors.orange[0] }}
    >
      <Grid>
        <Grid.Col span={12}>
          <div className="text-5xl">🌁</div>
        </Grid.Col>
        <Grid.Col className={styles.content} span={12}>
          <Text>Made with &#x1F90D; in Marin County, CA. Built with&nbsp;</Text>
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
        </Grid.Col>
      </Grid>
    </footer>
  );
};

export default Footer;
