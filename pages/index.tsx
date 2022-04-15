import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
import Calendar from "../components/calendar";
import UseFetchApi from "../hooks/useFetchApi";
import { Grid, createStyles, Text, Button } from "@mantine/core";
import OtherSites from "../components/other-sites";
import { useState } from "react";
import Weather from "../components/weather";

const useStyles = createStyles((theme) => ({
  calendar: {
    marginBottom: `${theme.spacing.sm}rem`,
  },
}));

const Home: NextPage = ({
  events,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { classes } = useStyles();
  const [filteredEvents, setFilteredEvents] = useState(events);

  const filterEvents = (area: string) => {
    if (filteredEvents[0].location === area) {
      setFilteredEvents(events);
    } else {
      setFilteredEvents(
        events.filter((item: { location: string }) => item.location === area)
      );
    }
  };

  return (
    <Grid>
      <Grid.Col>
        <Text component="h3">Filter by metro area</Text>
        <Button
          variant="gradient"
          gradient={{ from: "#c0362c", to: "yellow" }}
          onClick={() => filterEvents("bay-area")}
        >
          Bay Area
        </Button>
        &nbsp;
        <Button
          variant="gradient"
          gradient={{ from: "#005A9C", to: "cyan" }}
          onClick={() => filterEvents("la")}
        >
          LA
        </Button>
        &nbsp;
        <Button
          variant="gradient"
          gradient={{ from: "green", to: "yellow" }}
          onClick={() => filterEvents("other")}
        >
          Other
        </Button>
      </Grid.Col>

      <Grid.Col className={classes.calendar} span={12}>
        <Calendar events={filteredEvents} />
      </Grid.Col>
      <Grid.Col span={12}>
        <Grid gutter={24}>
          <Grid.Col xs={12} sm={4}>
            <OtherSites />
          </Grid.Col>
          {/* <Grid.Col xs={12} sm={4}>
            <iframe
              src="https://archive.org/embed/gd73-03-31.sbd.yerys.2237.sbeok.shnf"
              width="500"
              height="140"
            ></iframe>
          </Grid.Col> */}
          <Grid.Col xs={12} sm={4}>
            <Text component="h3">Weather Report Suite:</Text>
            <Weather
              sr={true}
              city="San Rafael"
              location="lat=37.9735346&lon=-122.5310874"
            />
            <br />
            <Weather city="Los Angeles" location="lat=34.0522&lon=-118.2437" />
            <br />
            <Weather city="Lake Tahoe" location="lat=39.0968&lon=-120.0324" />
          </Grid.Col>
        </Grid>
      </Grid.Col>
    </Grid>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const eventsRes = await UseFetchApi("api/events");

  // implement graphql
  eventsRes.data.forEach((event: any) => {
    event.id = event.id;
    event.start = new Date(event.attributes.start).toJSON();
    event.end = new Date(event.attributes.end).toJSON();
    event.title = event.attributes.name;
    event.location = event.attributes.location;
  });

  return {
    props: {
      events: eventsRes.data,
    },
  };
};

export default Home;
