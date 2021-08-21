import base from "../../styles/base.module.scss";
export const PriceList = ({ data }) => {
  return (
    <section className="bg-gray-50 w-full" id="price">
      <div className="container mx-auto py-32 px-5 ">
        <div className="mb-12 ">
          <h1 className={base.section__title}>
            ТАРИФЫ НА ПОДГОТОВКУ К ЕГЭ 2022
          </h1>
        </div>
        <div className="grid lg:grid-cols-3 gap-10">
          {data.map((item) => {
            const { id, title, price, pricePeriod, fearute, isRecommended } =
              item;
            return (
              <div
                className={
                  isRecommended
                    ? "bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-blue-200"
                    : "bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden border-2 border-blue-50"
                }
              >
                <div
                  className="text-3xl font-semibold bg-blue-50 px-10 py-10 text-center"
                  key={id}
                >
                  {title}
                </div>
                <div className="px-10 py-7 text-xl text-center ">
                  {fearute.map((fearutes) => {
                    const { name } = fearutes;
                    return (
                      <div className="border-b-2 border-blue-50 pb-2 mb-2">
                        {name}
                      </div>
                    );
                  })}
                </div>
                <div className="bg-blue-50 px-10 py-7 text-center">
                  <div className="text-4xl font-semibold mb-4">
                    {price} {pricePeriod}
                  </div>
                  <button className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 py-4 w-4/5 text-white text-xl uppercase font-semibold outline-none shadow-md hover:shadow-xl rounded-md transition-all">
                    Выбрать
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
