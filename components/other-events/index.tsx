import { Grid, Text, Card, createStyles } from "@mantine/core";
import Link from "next/link";
import { format } from "date-fns";

const useStyles = createStyles((theme) => ({
  cardContain: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    lineHeight: "1.5",
    justifyContent: "space-between",
    width: "100%",

    "& > *:nth-child(2)": {
      margin: "1.25rem 0",
    },

    [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
      flexDirection: "row",

      "& > *:nth-child(2)": {
        margin: "0 1.25rem",
      },
    },
  },
  card: {
    border: `2px solid ${theme.colors.dark[3]}`,
    cursor: "pointer",
    padding: ".75rem",
    textAlign: "center",
    transition: "opacity .2s ease",
    width: "100%",

    "&:hover": {
      opacity: "0.7",
    },
  },
}));

type Props = {
  events: any[];
};

const OtherEvents: React.FC<Props> = ({ events }) => {
  const { classes } = useStyles();
  return (
    <Grid>
      <Text component="h2" size="xl">
        Other upcoming shows close to this venue:
      </Text>
      <Grid className={classes.cardContain}>
        {events.map((event) => {
          return (
            <Link key={event.attributes.slug} href={event.attributes.slug}>
              <Card className={classes.card} shadow="sm" p={12}>
                <Text component="h3" size="md" pt={2} px={4}>
                  {event.attributes.name}
                </Text>
                <Text component="h3" size="sm" px={4} mb={0}>
                  {format(new Date(event.attributes?.start), "LLLL d, yyyy")}
                </Text>

                <Text component="h3" size="sm" px={4} mb={0}>
                  {event.location}
                </Text>
              </Card>
            </Link>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default OtherEvents;
