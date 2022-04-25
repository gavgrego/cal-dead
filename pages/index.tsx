import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
import Calendar from "../components/calendar";
import UseFetchApi from "../hooks/useFetchApi";
import {
  Grid,
  createStyles,
  Text,
  Button,
  Loader,
  useMantineTheme,
} from "@mantine/core";
import OtherSites from "../components/other-sites";
import { useState } from "react";
import Weather from "../components/weather";

const useStyles = createStyles((theme) => ({
  calendar: {
    marginBottom: `${theme.spacing.xs}rem`,
  },
}));

const Home: NextPage = ({
  events,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const theme = useMantineTheme();
  const { classes } = useStyles();

  return (
    <>
      <Grid mb={16} gutter={32}>
        <Grid.Col p={0} className={classes.calendar} xs={12} sm={9}>
          {events ? <Calendar events={events} /> : <Loader />}
        </Grid.Col>
        <Grid.Col xs={12} sm={3}>
          <div>
            <Text component="h3">Weather Report Suite:</Text>
            <Weather
              sr={true}
              city="San Rafael"
              location="lat=37.9735346&lon=-122.5310874"
            />
            <Weather
              city="Mt. Tamalpais"
              location="lat=37.9235&lon=-122.5965"
            />
            <Weather
              city="San Francisco"
              location="lat=37.7749&lon=-122.4194"
            />
            <Weather city="Oakland" location="lat=37.8044&lon=-122.2712" />
            <Weather city="Santa Cruz" location="lat=36.9741&lon=-122.0308" />
            <Weather
              city="San Luis Obispo"
              location="lat=35.2828&lon=-120.6596"
            />
            <Weather city="Los Angeles" location="lat=34.0522&lon=-118.2437" />
            <Weather city="San Diego" location="lat=32.7157&lon=-117.1611" />
            <Weather city="Lake Tahoe" location="lat=39.0968&lon=-120.0324" />
            <Weather
              city="Humboldt County"
              location="lat=40.7450&lon=-123.8695"
            />
          </div>
          <br />
          <OtherSites />
        </Grid.Col>
      </Grid>
    </>
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
