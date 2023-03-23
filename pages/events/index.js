import { getAllEvents } from "../../helpers/api-util";
import EventList from "../../components/events/EventList";
import EventSearch from "../../components/events/events-search";
import { Fragment } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

function AllEventsPage(props) {
  const router = useRouter();
  const { events } = props;
  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month} `;
    router.push(fullPath);
  }

  return (
    <div>
      <Fragment>
        <Head>
          <title>Eventful</title>
          <meta
            name="description"
            content="Find a lot of great events that allow you to evolve..."
          />
        </Head>
        <EventSearch onSearch={findEventsHandler} />
        <EventList items={events} />
      </Fragment>
    </div>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events: events,
    },
    revalidate: 60,
  };
}

export default AllEventsPage;
