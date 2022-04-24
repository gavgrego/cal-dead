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
  console.log(
    process.env.NEXT_PUBLIC_BASE_URL +
      event.attributes.Image.data.attributes.width
  );
  return (
    <Grid gutter={32}>
      <Grid.Col xs={12} sm={3}>
        {event.attributes.Image.data && (
          <div style={{ width: "100%", height: "100vh" }}>
            <Image
              alt={`${process.env.NEXT_PUBLIC_BASE_URL}${event.attributes.Image.data.attributes.name}`}
              layout="responsive"
              width={event.attributes.Image.data.attributes.width}
              height={event.attributes.Image.data.attributes.height}
              objectPosition="relative"
              src={event.attributes.Image.data.attributes.url}
            />
          </div>
        )}
      </Grid.Col>
      <Grid.Col xs={12} sm={9}>
        {event.attributes.Content}
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
