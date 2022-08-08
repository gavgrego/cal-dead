import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
import Calendar from "../components/calendar";
import UseFetchApi from "../hooks/useFetchApi";
import { Grid, createStyles, Text, Loader } from "@mantine/core";
import OtherSites from "../components/other-sites";
import { useMemo, useState } from "react";
import Weather from "../components/weather";
import weatherLocations from "../data/weather-locations";
import { useQuery } from "react-query";
import { DateContext } from "../data/context/DateContext";
import { useMobileCalToast } from "../hooks/useMobileCalToast";
import qs from "qs";

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

  // change key to be unique based on month and year
  // need to get current month and year when changing months
  const { data: events } = useQuery(`events`, { initialData: props.events });

  // use onRangeChange prop in calendar to get range of dates that need queried,
  // then refer back to previous queries if possible when navigating months
  // this will prevent multiple queries and make app faster

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
          <Text component="h3">Weather Report Suite:</Text>
          {weatherCities.map((city, index) => {
            return <Weather key={index} {...city} />;
          })}
          <br />
          {/* <MailForm />
          <br /> */}
          <OtherSites />
        </Grid.Col>
      </Grid>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const rangeQuery = qs.stringify(
    {
      filters: {
        start: {
          $gt: new Date(),
        },
        end: {
          $gt: new Date(),
        },
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  // load initial events in the current month
  const eventsRes = await UseFetchApi("api/events");
  // const eventsRes = await UseFetchApi(`api/events?${rangeQuery}`);

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
