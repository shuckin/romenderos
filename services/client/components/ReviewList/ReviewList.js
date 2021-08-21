import base from "../../styles/base.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import StarRating from "../ui/StarRating";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export const ReviewList = ({ data }) => {
  return (
    <section className="bg-gray-50" id="review">
      <div className="container mx-auto py-32 px-5">
        <div className="mb-12">
          <h1 className={base.section__title}>Что говорят про меня</h1>
        </div>
        <div className="">
          <Swiper
            navigation
            spaceBetween={30}
            scrollbar={{ draggable: true }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 3,
              },
            }}
          >
            {data.map((review) => {
              const {
                fullname,
                description,
                dataUse,
                rating,
                imgAvatar,
                imgSource,
                urlSource,
              } = review;

              return (
                <SwiperSlide>
                  <div className="bg-white rounded-3xl px-10 py-10 ">
                    <div className="flex items-start">
                      <div className="">
                        <div className="w-18 h-18 rounded-full overflow-hidden mr-5 bg-purple-light">
                          <img
                            src={`${
                              process.env.NEXTJS_PUBLIC_URL ||
                              "http://localhost:1337"
                            }${imgAvatar.url}`}
                            alt={fullname}
                          />
                        </div>
                        <div className="bg-white rounded-full w-7 h-7 relative bottom-8 left-14 overflow-hidden hover:shadow">
                          <a href={urlSource} target="_blank">
                            <img
                              src={`http://localhost:1337${imgSource.url}`}
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                      <div className="flex flex-col items-start">
                        <div className="text-xl font-semibold">{fullname}</div>
                        <div className="-mt-1">{dataUse}</div>
                        <div className="grid grid-cols-5 gap-0 w-4/5">
                          <StarRating data={rating} />
                        </div>
                      </div>
                    </div>
                    <div className="text-md mb-2 text-gray-300">
                      {description}
                    </div>
                    <div className="text-sm text-gray-300 underline">
                      Подробнее
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
