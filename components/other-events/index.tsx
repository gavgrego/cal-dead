import { Grid, Text, Card, createStyles } from "@mantine/core";
import Link from "next/link";
import { format } from "date-fns";

const useStyles = createStyles((theme) => ({
  cardContain: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    width: "100%",

    "& > *:nth-child(2)": {
      margin: "0 1.25rem",
    },
  },
  card: {
    cursor: "pointer",
    maxWidth: 300,
    padding: ".75rem",
    textAlign: "center",
    transition: "opacity .2s ease",

    "&:hover": {
      opacity: "0.8",
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
              <Card className={classes.card} shadow="sm" p="lg">
                <Card.Section></Card.Section>

                <Text component="h3" size="md" pt={2} px={4}>
                  {event.attributes.name}
                </Text>
                <Text component="h3" size="sm" px={4}>
                  {format(new Date(event.attributes?.start), "LLLL d, yyyy")}
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
