export async function getAllEvents() {
  const response = await fetch(
    "https://all-my-events-default-rtdb.firebaseio.com/events.json"
  );
  const data = await response.json();

  const events = [];

  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }

  return events;
}

export async function getFeaturedEvents() {
  const allEvnets = await getAllEvents();
  return allEvnets.filter((event) => event.isFeatured);
}
