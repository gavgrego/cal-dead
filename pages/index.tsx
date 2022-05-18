import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
import Calendar from "../components/calendar";
import UseFetchApi from "../hooks/useFetchApi";
import {
  Grid,
  createStyles,
  Text,
  Loader,
  useMantineTheme,
} from "@mantine/core";
import OtherSites from "../components/other-sites";
import { useState, useMemo } from "react";
import Weather from "../components/weather";
import weatherLocations from "../data/weather-locations";

const useStyles = createStyles((theme) => ({
  calendar: {
    marginBottom: `${theme.spacing.xs}rem`,
    [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
      paddingRight: "2rem",
    },
  },
}));

type City = {
  name: string;
  coords: string;
};

const Home: NextPage = ({
  events,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  console.log(events);
  const weatherCities = useMemo(() => {
    return weatherLocations;
  }, [Weather]);

  return (
    <>
      <Grid px={0} mb={16}>
        <Grid.Col px={0} pb={16} className={classes.calendar} xs={12} sm={9}>
          {events ? <Calendar events={events} /> : <Loader />}
        </Grid.Col>
        <Grid.Col xs={12} sm={3}>
          {/* <CaWeeklyShow /> */}

          <Text component="h3">Weather Report Suite:</Text>
          {weatherCities.map((city, index) => {
            return <Weather key={index} {...city} />;
          })}
          <br />
          <OtherSites />
        </Grid.Col>
      </Grid>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const eventsRes = await UseFetchApi("api/events");

  eventsRes.data.forEach((event: any) => {
    event.id = event.id;
    event.start = new Date(event.attributes.start).toJSON();
    event.end = new Date(event.attributes.end).toJSON();
    event.title = event.attributes.name;
    event.location = event.attributes.location;
    event.slug = event.attributes.slug;
  });

  return {
    props: {
      events: eventsRes.data,
    },
  };
};

export default Home;
