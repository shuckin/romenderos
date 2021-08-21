import base from "../../styles/base.module.scss";

export const Faqs = ({ data }) => {
  return (
    <section className={base.section}>
      <div className="mb-12">
        <h1 className={base.section__title}>ВОПРОСЫ И ОТВЕТЫ</h1>
        <div className={base.section__subtitle}>
          <span className="underline">Напишите нам</span>, если остались вопросы
          без ответа
        </div>
      </div>
      <div className="grid gtid-rows-5 gap-5 lg:grid-cols-2 lg:grid-rows-3 lg:gap-x-16 lg:gap-y-10 ">
        {data.map((faq) => {
          const { question, description, slag } = faq;
          return (
            <div className="" key={slag}>
              <h2 className="lg:text-xl md:text-md text-md font-semibold">
                {question}
              </h2>
              <span className="lg:text-md md:text-md text-md font-light">
                {description}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};
