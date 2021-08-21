import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { UilArrowRight, UilArrowLeft } from "@iconscout/react-unicons";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import base from "../../styles/base.module.scss";

SwiperCore.use([Navigation]);

export const NewsList = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <section className="" id="news">
      <div className="container mx-auto py-32 px-5">
        <div className="mb-12">
          <h1 className={base.section__title}>
            Новости группы
          </h1>
        </div>
        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 1,
            },
          }}
          spaceBetween={20}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
        >
          {data.map((news) => {
            const {
              title,
              slag,
              previewDescription,
              img: { name },
              dataCreated,
            } = news;
            return (
              <SwiperSlide key={slag}>
                <div className="grid md:grid-cols-2 md:gap-10  ">
                  <div className="sm:w-96 lg:w-full rounded-xl overflow-hidden mb-6">
                    <img src={name} alt={title} />
                  </div>
                  <div className="flex flex-col justify-evenly">
                    <div>
                      <h3 className="text-secondary-100 font-semibold text-xl mb-3">
                        {title}
                      </h3>
                      <div className="text-gray-300 font-medium text-md mb-6">
                        {dataCreated}
                      </div>
                      <div className="text-secondary-100 font-normal mb-5 max-h-36 overflow-hidden">
                        {previewDescription}
                      </div>
                    </div>

                    <button
                      className="font-bold flex text-secondary-100 justify-start items-center hover:text-secondary-200"
                      onClick={() => {
                        router.push({
                          pathname: "/news/[id]",
                          query: {
                            id: slag,
                          },
                        });
                      }}
                    >
                      Читать далее{" "}
                      <UilArrowRight className="text-secondary-200" />
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="hidden md:flex">
          <div ref={navigationPrevRef}>
            <UilArrowLeft className="w-10 h-10" />
          </div>
          <div ref={navigationNextRef}>
            <UilArrowRight className="w-10 h-10" />
          </div>
        </div>
      </div>
    </section>
  );
};
