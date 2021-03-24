export default async (event: FetchEvent) => {
  return new Response(JSON.stringify(event, null, 2));
};
