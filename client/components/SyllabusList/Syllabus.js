import base from "../../styles/base.module.scss";
import { UilArrowRight } from "@iconscout/react-unicons";
export const Syllabus = ({ data }) => {
  return (
    <section id="syllabus" className="">
      <div className="container mx-auto py-32 px-5">
        <div className="mb-12 ">
          <h1 className={base.section__title}>Программа обучения</h1>
        </div>
        <div className="grid lg:grid-cols-3 lg:grid-rows-2 lg:gap-5 grid-rows-5 gap-5">
          {data.map((elem) => {
            const {
              heading,
              category: { title },
              numbering,
              slag,
              isCols,
            } = elem;
            return (
              <div
                key={slag}
                className={
                  isCols
                    ? "flex justify-between bg-gradient-to-r from-blue-100 via-grin-200 to-green-300 rounded-xl items-center px-10 py-10 relative hover:shadow-lg lg:col-span-2"
                    : "flex justify-between bg-gradient-to-r from-blue-100 via-grin-200 to-green-300 rounded-xl items-center px-10 py-10 relative hover:shadow-lg"
                }
              >
                <div className="z-10">
                  <div className="text-xl text-white">{title}</div>
                  <div className="text-2xl font-semibold text-primary-light">
                    {heading}
                  </div>
                </div>
                <div className="h-12 w-12 shadow rounded-full flex items-center justify-center hover:shadow-md active:shadow-sm bg-white">
                  <UilArrowRight className="h-8 w-8 text-primary-light" />
                </div>
                <div className="absolute bottom-0 right-24 text-green-400 text-8xl font-semibold">
                  {numbering}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
