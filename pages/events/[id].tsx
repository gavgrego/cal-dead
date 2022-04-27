import UseFetchApi from "../../hooks/useFetchApi";
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import { Grid } from "@mantine/core";
import Image from "next/image";
const Event: NextPage = ({
  event,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Grid mx={16} mt={32}>
      {event.attributes.Image.data && (
        <Grid.Col mb={16} xs={12} sm={3}>
          {event.attributes.Image.data && (
            <Image
              alt={`${process.env.NEXT_PUBLIC_BASE_URL}${event.attributes.Image.data.attributes.name}`}
              layout="responsive"
              width={event.attributes.Image.data.attributes.width}
              height={event.attributes.Image.data.attributes.height}
              objectPosition="relative"
              src={event.attributes.Image.data.attributes.url}
            />
          )}
        </Grid.Col>
      )}
      <Grid.Col mb={16} xs={12} sm={9}>
        {event.attributes.Content}
        {/* tickets link */}
        {/* start time */}

        <br />
        <br />

        <iframe
          width="600"
          height="350"
          loading="eager"
          style={{ border: 0 }}
          src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&zoom=10&q=/${event.attributes.Address}`}
        ></iframe>
      </Grid.Col>
    </Grid>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await UseFetchApi("api/events");

  const paths = data.map((event: any) => ({
    params: { id: event.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await UseFetchApi(`api/events/${params?.id}?populate=Image`);

  return {
    props: {
      event: data,
    },
  };
};

export default Event;
