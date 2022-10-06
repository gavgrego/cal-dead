import { Card, Grid, Paper, Text } from "@mantine/core";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { createStyles } from "@mantine/core";

const useStyles = createStyles({
  contain: {
    borderRadius: "6px",
    cursor: "pointer",
    height: "100px",
    marginBottom: "1rem",
    position: "relative",
    overflow: "hidden",
    transition: "opacity ease .2s",
    width: "100%",

    "&:hover": {
      opacity: ".7",
    },
  },
  text: {
    color: "black",
    fontSize: "2rem",
    left: ".5rem",
    letterSpacing: "1px",
    textShadow:
      "-4px -4px 0 white,-4px -1px 0 white,-4px 0px 0 white,-4px 1px 0 white,-4px 4px 0 white,-1px -4px 0 white,-1px -1px 0 white,-1px 0px 0 white,-1px 1px 0 white,-1px 4px 0 white,0px -4px 0 white,0px -1px 0 white,0px 0px 0 white,0px 1px 0 white,0px 4px 0 white,1px -4px 0 white,1px -1px 0 white,1px 0px 0 white,1px 1px 0 white,1px 4px 0 white,4px -4px 0 white,4px -1px 0 white,4px 0px 0 white,4px 1px 0 white,4px 4px 0 white",
    position: "absolute",
    top: 0,
  },
});

type Props = {
  background: string | StaticImageData;
  text: string;
  link: string;
};

export const Callout = ({ background, text, link }: Props) => {
  const { classes } = useStyles();
  return (
    <Link href={link}>
      <Paper className={classes.contain} shadow="sm" color="gray">
        <Image src={background} layout="intrinsic" />
        <Text weight="bolder" className={classes.text}>
          {text}
        </Text>
      </Paper>
    </Link>
  );
};
