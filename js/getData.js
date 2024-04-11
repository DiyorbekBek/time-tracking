export default async function getData(url) {
  const req = await axios.get(url);
  const { data } = await req;
  return data;
}
