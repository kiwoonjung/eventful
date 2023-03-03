const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "New York Trip",
    description: "First time New York trip!",
    location: "New York, USA",
    date: "2023-03-25",
    image: "images/new-york.jpg",
    isFeatured: false,
  },
  {
    id: "e2",
    title: "Visiting My Family",
    description:
      "I really want this time to meet my family and friends and have a good time.",
    location: "Seoul, South Korea",
    date: "2023-05-12",
    image: "images/seoul.jpg",
    isFeatured: true,
  },
  {
    id: "e3",
    title: "Short Seattle Trip",
    description:
      "Just one day trip! Make sure to come back with some good stuff :)",
    location: "Seattle, USA",
    date: "2023-08-10",
    image: "images/seattle.jpg",
    isFeatured: true,
  },
];

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export function getEventById(id) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}
