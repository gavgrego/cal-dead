import UseFetchApi from "../../hooks/useFetchApi";
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import { Grid, Text, createStyles, Anchor, Button, Paper } from "@mantine/core";
import Image from "next/image";
import { format } from "date-fns";
import ReactMarkdown from "react-markdown";
import qs from "qs";
import OtherEvents from "../../components/other-events";

const useStyles = createStyles((theme) => ({
  container: {
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      margin: "0 1rem",
    },
  },
  title: {
    lineHeight: 1.25,
    fontSize: "1.5rem",
  },
  image: {
    marginTop: "2.75rem",
  },
  infoColumn: {
    [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
      paddingLeft: "2rem",
    },
  },
  mdContent: {
    img: {
      width: "100%",
    },
  },
}));

const Event: NextPage = ({
  event,
  events,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { classes } = useStyles();
  const startDate = format(new Date(event.attributes?.start), "LLLL d");
  const startTime = format(new Date(event.attributes?.start), "p");

  return (
    <Grid className={classes.container}>
      <Grid.Col mb={16} xs={12} sm={4}>
        <Paper shadow="md" p={"1.5rem"} radius={4}>
          <Text mt={0} component="h1" className={classes.title}>
            {event.attributes.name}
          </Text>

          <Text mt={0} mb={8} component="p" size="lg">
            🗓️&nbsp;{startDate} @ {startTime}
          </Text>

          <Text mt={0} mb={8} component="p" size="lg">
            📍&nbsp;{event.attributes.venue}
          </Text>

          {event.attributes.Tickets && (
            <Anchor target={"_blank"} href={event.attributes.Tickets}>
              <Button
                sx={(theme) => ({
                  backgroundColor: theme.colors.orange[0],
                  "&:hover": {
                    opacity: ".7",
                  },
                })}
              >
                TICKETS
              </Button>
            </Anchor>
          )}

          {event.attributes.Image.data && (
            <div className={classes.image}>
              <Image
                alt={`Poster or promotional event art for ${event.attributes.name}`}
                layout="responsive"
                width={event.attributes.Image.data.attributes.width}
                height={event.attributes.Image.data.attributes.height}
                objectPosition="relative"
                src={event.attributes.Image.data.attributes.url}
                priority
              />
            </div>
          )}
        </Paper>
      </Grid.Col>

      <Grid.Col mb={16} xs={12} sm={8} className={classes.infoColumn}>
        <ReactMarkdown className={classes.mdContent}>
          {event.attributes.Content}
        </ReactMarkdown>

        <iframe
          width="600"
          height="350"
          loading="eager"
          style={{ border: 0 }}
          src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&zoom=10&q=/${event.attributes.Address}`}
        ></iframe>

        <Grid>
          <OtherEvents events={events} />
        </Grid>
      </Grid.Col>
    </Grid>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await UseFetchApi("api/events");

  const paths = data.map((event: any) => ({
    params: {
      slug: event.attributes?.slug,
    },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = qs.stringify(
    {
      filters: {
        slug: {
          $eq: params?.slug,
        },
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  const { data } = await UseFetchApi(`api/events?${query}&populate=Image`);

  const categoryQuery = qs.stringify(
    {
      filters: {
        location: {
          $eq: data[0].attributes.location,
        },
        start: {
          $gt: new Date(),
        },
        slug: {
          $ne: data[0].attributes.slug,
        },
      },
      sort: ["start"],
    },
    {
      encodeValuesOnly: true,
    }
  );

  const res = await fetch(
    `https://cal-dead-strapi.herokuapp.com/api/events?${categoryQuery}&populate=Image`
  );
  const events = await res.json();

  return {
    props: {
      event: data[0],
      events: events.data.splice(0, 3),
    },
  };
};

export default Event;
