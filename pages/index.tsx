import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
import Calendar from "../components/calendar";
import UseFetchApi from "../hooks/useFetchApi";
import { Grid, createStyles, Text, Loader, Stack } from "@mantine/core";
import OtherSites from "../components/other-sites";
import { useMemo } from "react";
import Weather from "../components/weather";
import weatherLocations from "../data/weather-locations";
import { useQuery } from "@tanstack/react-query";
import { useMobileCalToast } from "../hooks/useMobileCalToast";
import qs from "qs";
import MailForm from "../components/mail-form";

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

const Home: NextPage = (
  props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  const { classes } = useStyles();
  const weatherCities = useMemo(() => {
    return weatherLocations;
  }, [Weather]);

  const { data: events } = useQuery([`events`], { initialData: props.events });

  useMobileCalToast();

  return (
    <>
      <Grid px={0} mb={16}>
        <Grid.Col px={0} pb={16} className={classes.calendar} xs={12} sm={9}>
          {/* add a prop to calendar that allows us to set state in this component containing the range to query */}
          {events ? <Calendar events={events} /> : <Loader />}
        </Grid.Col>
        <Grid.Col xs={12} sm={3} className={classes.subCalendar}>
          {/* <Callout background={StickersBG} text="STICKERS!" link="/shop" /> */}
          {/* <MailForm /> */}
          <Text component="h3" size="lg">
            Weather Report Suite:
          </Text>
          <Stack sx={{ marginBottom: "1rem" }}>
            {weatherCities.map((city, index) => {
              return <Weather key={index} {...city} />;
            })}
          </Stack>

          <OtherSites />
        </Grid.Col>
      </Grid>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
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
