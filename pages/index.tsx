import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
import Calendar from "../components/calendar";
import UseFetchApi from "../hooks/useFetchApi";
import { Grid, createStyles, Text, Loader } from "@mantine/core";
import OtherSites from "../components/other-sites";
import { useEffect, useMemo, useState } from "react";
import Weather from "../components/weather";
import weatherLocations from "../data/weather-locations";
import { useQuery } from "@tanstack/react-query";
import { DateContext } from "../data/context/DateContext";
import { useMobileCalToast } from "../hooks/useMobileCalToast";
import qs from "qs";
import { Callout } from "../components/callout";
import StickersBG from "../assets/stickers-bg.jpg";

const useStyles = createStyles((theme) => ({
  calendar: {
    marginBottom: `${theme.spacing.xs}rem`,
    [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
      paddingRight: "2rem",
    },
  },
  subCalendar: {
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      padding: "0 1rem",
    },
  },
}));

// create context to keep track of current month/year and pass to calendar and list view

const Home: NextPage = (
  props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  const { classes } = useStyles();
  const weatherCities = useMemo(() => {
    return weatherLocations;
  }, [Weather]);

  const [monthAndYear, setMonthAndYear] = useState(new Date());

  // this stores the initial load/range of events from getStaticProps
  //
  const { data: events } = useQuery([`events`], { initialData: props.events });

  // fetch

  useEffect(() => {}, []);
  useMobileCalToast();

  return (
    <>
      <Grid px={0} mb={16}>
        <Grid.Col px={0} pb={16} className={classes.calendar} xs={12} sm={9}>
          <DateContext.Provider value={{ monthAndYear, setMonthAndYear }}>
            {/* need to pass date here via date prop */}
            {events ? <Calendar events={events} /> : <Loader />}
            {/* {events ? <ListView events={events} /> : <Loader />} */}
          </DateContext.Provider>
        </Grid.Col>
        <Grid.Col xs={12} sm={3} className={classes.subCalendar}>
          <Callout background={StickersBG} text="STICKERS!" link="/shop" />
          <Text component="h3" size="lg">
            Weather Report Suite:
          </Text>
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
  // need to pass a dynamic value set when the month changes on the calendar and get new events accordingly
  const now = new Date();
  const currentMonth = new Date(now.getFullYear(), now.getMonth(), 1);

  const rangeQuery = qs.stringify(
    {
      filters: {
        start: {
          $gt: currentMonth,
        },
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  // load initial events in the current month
  const eventsRes = await UseFetchApi("api/events");
  // const rangeRes = await UseFetchApi(`api/events?${rangeQuery}`);
  // console.log(rangeRes);

  //will need to fetch again as calendar changes, store in react query

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
