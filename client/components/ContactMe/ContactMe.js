import base from "../../styles/base.module.scss";
import {
  UilMobileAndroid,
  UilEnvelope,
  UilMapMarker,
  UilMessage,
} from "@iconscout/react-unicons";
export const ContactMe = ({ data }) => {
  const {
    navbar: { email, phone },
  } = data;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        name,
        email,
        phone,
        messages,
      };

      const formData = new FormData();
      formData.append("data", JSON.stringify(data));

      const res = await fetch(`http://localhost:1337/feedback-forms`, {
        method: "POST",
        body: formData,
      });
      const result = await res.json();
      if (res.status === 200) {
        console.log(result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="bg-gray-50" id="contact">
      <div className="container mx-auto py-32 lg:px-32 px-5">
        <div className="mb-12">
          <h1 className={base.section__title}>
            Контакты
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 lg:gap-5 grid-rows-2 lg:grid-rows-1 gap-5 items-start">
          <div className="grid grid-rows-3 gap-10">
            <div className=" grid grid-cols-16 items-center">
              <UilMobileAndroid className="text-primary-light w-8 h-8" />
              <div>
                <div className="text-2xl font-semibold">Телефон</div>
                <span className="text-xl">{phone}</span>
              </div>
            </div>
            <div className="grid grid-cols-16 items-center">
              <UilEnvelope className="text-primary-light w-8 h-8" />
              <div>
                <div className="text-2xl font-semibold">Email</div>
                <a href={`mailto:${email}`}>
                  <span className="text-xl hover:underline">{email}</span>
                </a>
              </div>
            </div>
            <div className="grid grid-cols-16 items-center">
              <UilMapMarker className="text-primary-light w-8 h-8" />
              <div>
                <div className="text-2xl font-semibold">Location</div>
                <span className="text-xl">Russia - Moscow</span>
              </div>
            </div>
          </div>

          <form>
            <div className="grid grif-rows-4 gap-4">
              <div className="grid grid-rows-2 bg-blue-100 px-6 py-4 rounded-xl">
                <label htmlFor="#" className="text-primary-light">
                  Имя
                </label>
                <input
                  type="text"
                  name="name"
                  className="bg-transparent outline-none"
                />
              </div>
              <div className="grid grid-rows-2 bg-blue-100 px-6 py-4 rounded-xl">
                <label htmlFor="#" className="text-primary-light">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="bg-transparent outline-none"
                />
              </div>
              <div className="grid grid-rows-2 bg-blue-100 px-6 py-4 rounded-xl">
                <label htmlFor="#" className="text-primary-light">
                  Телефон
                </label>
                <input
                  type="telephone"
                  className="bg-transparent outline-none text-primary"
                  name="phone"
                />
              </div>
              <div className="grid bg-blue-100 px-6 py-4 rounded-xl">
                <label htmlFor="#" className=" text-primary-light">
                  Сообщение
                </label>
                <textarea
                  name="messages"
                  id=""
                  cols="30"
                  rows="7"
                  className="bg-transparent outline-none"
                ></textarea>
              </div>
              <div className="">
                <button
                  type="submit"
                  onClick={(e) => handleSubmit(e)}
                  className="flex items-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 px-7 py-3 text-white uppercase font-semibold outline-none shadow-md hover:shadow-xl rounded-md transition-all"
                >
                  Отправить <UilMessage className="ml-5" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
