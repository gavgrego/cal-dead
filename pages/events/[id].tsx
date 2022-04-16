import UseFetchApi from "../../hooks/useFetchApi";
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import styles from "./styles.module.scss";
import { Grid } from "@mantine/core";
import Image from "next/image";
const Event: NextPage = ({
  event,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Grid>
      <Grid.Col xs={12} sm={3} className={styles.sidebar}>
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
          {event.attributes.Image.data && (
            <Image
              alt={`${process.env.NEXT_PUBLIC_BASE_URL}${event.attributes.Image.data.attributes.name}`}
              layout="responsive"
              width={100}
              height={100}
              objectFit="contain"
              objectPosition="relative"
              src={`${process.env.NEXT_PUBLIC_BASE_URL}${event.attributes.Image.data.attributes.url}`}
            />
          )}
        </div>
        <br />
        <iframe
          width="600"
          height="350"
          loading="eager"
          style={{ border: 0 }}
          src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&zoom=10&q=/${event.attributes.Address}`}
        ></iframe>
      </Grid.Col>
      <Grid.Col xs={12} sm={9}>
        {event.attributes.Content}
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
