import { fetchAPI } from "@/lib/strapi/api";
import Layuot from "@/components/ui/Layout";
export default function newsItem({ News }) {
  return <Layuot></Layuot>;
}

export async function getStaticProps() {
  const [News] = await Promise.all([fetchAPI("/news-lists?status=publisher")]);

  return {
    props: {
      News,
    },
    revalidate: 1,
  };
}
