import React from "react";
import "./services.css";
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/service-2.svg";
import Image3 from "../../assets/service-3.svg";

const data = [
  {
    id: 1,
    image: Image1,
    title: "UI/UX design",
    description:
      "A good design attracts every eyes. I believe a clean and user-friendly design are the keys to the customer first impression.",
  },
  {
    id: 2,
    image: Image2,
    title: "Web Development",
    description:
      "In this era of Web, everything are marching towards the internet, say it be your business, entertainment, influences and much more. With my keen knowledge, let me build it for you.",
  },
  {
    id: 3,
    image: Image3,
    title: "Guidance",
    description:
      "Free Service! I can help you with my knowledge. Feel free to contact me.",
  },
];

const Services = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section__title">Services</h2>
      <div className="services__container grid">
        {data.map(({ id, image, title, description }) => {
          return (
            <div className="services__card" key={id}>
              <img src={image} alt="" className="services__img" />

              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
