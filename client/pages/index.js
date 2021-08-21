import { fetchAPI } from "@/lib/strapi/api";
import Layuot from "@/components/ui/Layout";
import Seo from "@/components/Seo";
import AboutMe from "@/components/AboutMe";
import NewsList from "@/components/NewsList";
import PriceList from "@/components/PriceList";
import ReviewList from "@/components/ReviewList";
import Faqs from "@/components/Faqs";
import SyllabusList from "@/components/SyllabusList";
import ContactMe from "@/components/ContactMe";
import { DetailPrice } from "@/components/PriceList/DetailPrice";

export default function Home({
  Global,
  News,
  Price,
  PriceNew,
  Faq,
  About,
  Review,
  Syllabus,
}) {
  return (
    <Layuot globalInfo={Global}>
      <Seo seo={Global} />
      <AboutMe data={About} />
      <NewsList data={News} />
      <SyllabusList data={Syllabus} />
      {/* <PriceList data={Price} /> */}
      <DetailPrice data={PriceNew} />
      <ReviewList data={Review} />
      <Faqs data={Faq} />
      <ContactMe data={Global} />
    </Layuot>
  );
}

export async function getStaticProps() {
  const [Global, News, Price, PriceNew, Faq, About, Review, Syllabus] =
    await Promise.all([
      fetchAPI("/global"),
      fetchAPI("/news-lists?status=publisher"),
      fetchAPI("/price-lists?status=draft"),
      fetchAPI("/price-lists?status=publisher"),
      fetchAPI("/faqs-lists"),
      fetchAPI("/about-me"),
      fetchAPI("/review-lists"),
      fetchAPI("/syllabus-lists"),
    ]);

  return {
    props: {
      Global,
      News,
      Price,
      PriceNew,
      Faq,
      About,
      Review,
      Syllabus,
    },
    revalidate: 1,
  };
}
