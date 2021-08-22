import { fetchAPI } from "@/lib/strapi/api";
import base from "../styles/base.module.scss";
import Layuot from "@/components/ui/Layout";
export default function privacy({ Global, Privacy }) {
  return (
    <Layuot globalInfo={Global}>
      <section className="">
        <div className="container mx-auto py-32 px-5">
          <div className="row mb-4">
            <div className="col">
              <h1 className={base.section__title}>{Privacy.privacyTitle}</h1>
            </div>
          </div>
          <div>{Privacy.privacyDescription}</div>
        </div>
      </section>
    </Layuot>
  );
}

export async function getStaticProps() {
  const [Global, Privacy] = await Promise.all([
    fetchAPI("/global"),
    fetchAPI("/privacy"),
  ]);

  return {
    props: {
      Global,
      Privacy,
    },
    revalidate: 1,
  };
}
