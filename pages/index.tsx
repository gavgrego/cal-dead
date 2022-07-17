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
import { useEffect, useMemo, useState } from "react";
import Weather from "../components/weather";
import weatherLocations from "../data/weather-locations";
import { useQuery } from "react-query";
import { DateContext } from "../data/context/DateContext";
import { showNotification } from "@mantine/notifications";
import useLocalStorage from "../hooks/useLocalStorage";
import { useViewportSize } from "@mantine/hooks";

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

  const theme = useMantineTheme();

  const { value, setValue } = useLocalStorage({
    key: "mobile-cal",
  });

  const { width: viewPortWidth } = useViewportSize();

  if (viewPortWidth <= theme.breakpoints.sm) {
    useEffect(() => {
      if (!value) {
        setTimeout(() => {
          showNotification({
            title: "📱 Scroll horizontally to view the entire calendar!",
            message: "",
            autoClose: 4000,
            disallowClose: true,
            styles: (theme) => ({
              root: {
                border: "1px solid white",
                background:
                  "linear-gradient(45deg,#F17C58, #E94584, #24AADB , #27DBB1,#FFDC18, #FF3706)",
                animation: "gradient 7.5s linear infinite",
                fontWeight: "bold",
                whiteSpace: "nowrap",
                animationDirection: "alternate",
                backgroundSize: " 600% 100%",
                "@keyframes gradient": {
                  "0%": {
                    backgroundPosition: "0%",
                  },
                  "100%": {
                    backgroundPosition: "100%",
                  },
                },
                bottom: ".5rem",
                padding: ".5rem",
                margin: "0 .5rem",
              },
              title: {
                color: "white",
                fontWeight: 700,
              },
            }),
          });
          setValue(true);
        }, 1000);
      }
    }, []);
  }

  const [monthAndYear, setMonthAndYear] = useState(new Date());

  const { data: events } = useQuery("events", { initialData: props.events });
  return (
    <>
      <Grid px={0} mb={16} sx={{ overflowX: "hidden" }}>
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
