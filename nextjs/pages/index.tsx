import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
import Calendar from "../components/calendar";
import UseFetchApi from "../hooks/useFetchApi";

const Home: NextPage = ({
  events,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="grid grid-cols-4 grid-flow-col gap-4">
      <div className="col-span-3">
        <Calendar events={events} />
      </div>
      <div className="col-span-1">
        {/* <CaDailyShow /> */}
        {/* <OtherSites /> */}
      </div>
    </div>
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
  });

  return {
    props: {
      events: eventsRes.data,
    },
  };
};

export default Home;
