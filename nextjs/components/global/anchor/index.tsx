import { Anchor as ManAnchor, AnchorProps, createStyles } from "@mantine/core";

const usestyles = createStyles((theme) => ({
  link: {
    color: `${theme.colors.orange}`,
    fontWeight: 600,
    letterSpacing: "1.25px",
    transition: "opacity ease .3s",

    "&:hover": {
      opacity: 0.5,
      textDecoration: "none",
    },
  },
}));

type Props = {
  className?: any;
  href?: string;
  target?: string;
};

const Anchor: React.FC<Props> = ({ className, href, target, children }) => {
  const { classes } = usestyles();
  return (
    <ManAnchor
      className={className ? className : classes.link}
      href={href}
      target={target}
    >
      {children}
    </ManAnchor>
  );
};

export default Anchor;
