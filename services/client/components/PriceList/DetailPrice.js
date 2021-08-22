import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { UisCheckCircle } from "@iconscout/react-unicons-solid";
import base from "../../styles/base.module.scss";

export const DetailPrice = ({ data }) => {
  return (
    <section id="price">
      <div className={base.section}>
        <div>
          <h1 className={base.section__title}>
            ТАРИФЫ НА ПОДГОТОВКУ К ЕГЭ 2022
          </h1>
        </div>
        {/* tab */}
        <div>
          <div>
            <Tabs className="">
              <TabList className="lg:flex gap-5 py-5 ">
                <Tab className="text-xl text-purple-light font-semibold bg-gray-100 py-3 px-10 rounded hover:bg-gray-200 transition-all shadow">
                  Биология ЕГЭ
                </Tab>
                <Tab className="text-xl text-purple-light font-semibold  bg-gray-100 py-3 px-10 rounded hover:bg-gray-200 transition-all shadow">
                  Биология ОГЭ
                </Tab>
                <Tab className="text-xl text-purple-light font-semibold bg-gray-100 py-3 px-10 rounded hover:bg-gray-200 transition-all shadow">
                  Поступление в ВУЗ
                </Tab>
              </TabList>

              <TabPanel className="grid lg:grid-cols-4 gap-5 mt-10">
                {data.map((price) => {
                  const {
                    id,
                    title,
                    description,
                    priceOne,
                    priceAll,
                    fearute,
                  } = price;
                  return (
                    <div
                      className="bg-blue-50 rounded-2xl px-10 py-10 grid justify-center"
                      key={id}
                    >
                      <div className="border-b-2">
                        <div>
                          <div className="text-3xl font-semibold text-primary">
                            {title}
                          </div>
                          <span className="text-base text-gray-300">
                            {description}
                          </span>
                        </div>
                        <button className="text-purple-light bg-white py-3 shadow rounded-xl font-semibold text-xl mt-4 w-full">
                          Выбрать тариф
                        </button>
                        <div className="mt-7">
                          <div className="text-3xl font-semibold mb-5">
                            {priceOne} руб
                            <span className="text-base font-normal text-gray-300">
                              {" "}
                              за урок
                            </span>
                          </div>
                          <span className="text-gray-300 text-xl mb-5 block">
                            {priceAll} руб за все
                          </span>
                        </div>
                      </div>
                      <div className="text-gray-300 text-base mt-7 grid grid-rows-5 gap-2">
                        {fearute.map((item) => {
                          return (
                            <div className="flex">
                              {item.isActive ? (
                                <UisCheckCircle className="text-green-500 mr-3" />
                              ) : (
                                <div className="bg-gray-200 rounded-full h-5 w-5 mr-3"></div>
                              )}
                              {item.name}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </TabPanel>
              <TabPanel>
                <h2>Any content 2</h2>
              </TabPanel>
              <TabPanel>
                <h2>Any content 3</h2>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};
