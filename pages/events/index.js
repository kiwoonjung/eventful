import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";
import EventSearch from "../../components/events/events-search";
import { Fragment } from "react";

function AllEventsPage() {
  const events = getAllEvents();

  return (
    <div>
      <Fragment>
        <EventSearch />
        <EventList items={events} />
      </Fragment>
    </div>
  );
}

export default AllEventsPage;
