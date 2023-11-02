export default function sitemap() {
  const routes = ["", "/register"].map((route) => ({
    url: `https://vriddhi.co${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes];
}
