import React from "react";
import { RiHandCoinFill } from "react-icons/ri";
import { HiAdjustments } from "react-icons/hi";
import { FaLightbulb } from "react-icons/fa";
import "./why_us.scss";

import WhyUsFeature from "../../components/why_us/WhyUsFeature";
// import photo from "../../assets/whyUs_photo.png";

import { flower1 } from "../../assets/flower_images";

const blocks = [
  {
    title: "Elastyczność",
    icon: <HiAdjustments size={40} color="#7482FF" />,
    text: "Projekt mebli możemy wykonać dla osób bez projektu natomiast jeśli posiadasz już swój projekt bez problemu możemy zająć się zamówieniem ich i montażem w wybranym przez Ciebie terminie",
  },
  {
    title: "Oszczędność",
    icon: <RiHandCoinFill size={40} color="#7482FF" />,
    text: "Zajmujemy się nie tylko projektem ale również dostawą mebli oraz ich montażem z wcześniej wykonanymi przez nas pomiarami. Dzięki takim rozwiązaniom nie będziesz musiał dodatkowo tracić czasu i pieniędzy na własne pomiary czy organizowanie dostaw poprzez innych usługodawców.",
  },
  {
    title: "Innowacyjne rozwiązania",
    icon: <FaLightbulb size={40} color="#7482FF" />,
    text: "Doskonale znamy potrzeby klientów z naszej branży, wiele osób zmaga się z problematycznymi i czasochłonnymi usługami. My rozwiązujemy Twój problem kompleksowo dzięki czemu Twoje marzenia o nowych meblach spełniają się w mgnieniu oka.",
  },
];

const WhyUs = () => {
  return (
    <section data-scroll-section id="whyUs" className="section-mt section-mb">
      <div className="content-wrapper relative">
        <div className="hidden lg:block absolute top-[-70%] lg:top-[-10%] xl:top-[-20%] left-[60%] lg:left-[-20%] xl:left-[-5%]  z-[-1] w-[100px]">
          <img
            src={flower1}
            className="hidden lg:block opacity-10 lg:opacity-10 rotate-[-35deg] lg:h-[700px] xl:h-[1000px] crop-down-lg"
            alt=""
          />
        </div>
        <div className="block lg:hidden absolute top-[-10%] left-[60%] z-[-1] w-[100px]">
          <img
            src={flower1}
            className="block lg:hidden opacity-5 rotate-[-35deg] h-[800px]"
            alt=""
          />
        </div>
        <div className="absolute top-[-60%] lg:top-[-10%] xl:top-[-20%] left-[-5%] lg:left-[30%] xl:left-[30%] z-[-1] w-[100px]">
          <img
            src={flower1}
            className="hidden lg:block opacity-10 lg:opacity-10 rotate-[30deg] lg:h-[700px] xl:h-[1000px] crop-down-lg"
            alt=""
          />
        </div>

        <div>
          <h3 className="font-serif mb-6 sm:mb-10 xl:mb-20">
            <div>Dlaczego warto</div>
            <div>
              postawić na <b>aviorprojekt</b>
            </div>
          </h3>
        </div>
        <div className="block lg:grid grid-cols-2 relative">
          <div className="hidden lg:block">
            {/* <img
              className="w-3/6 pr-20 absolute right:[-190%] sm:right-[-50%] md:right-[-50%] lg:right-[50%] bottom-5"
              src={photo}
              alt=""
            /> */}
          </div>
          <div className="[&>div]:my-8">
            {blocks.map((item, index) => (
              <WhyUsFeature
                title={item.title}
                text={item.text}
                icon={item.icon}
                key={item.title + index}
              />
            ))}
          </div>
        </div>
        <p className="mt-8 md:mt-12 lg:mt-20">
          Umów się na{" "}
          <a href="#modal" className="link-primary underline font-bold">
            spotakanie online
          </a>{" "}
          i{" "}
          <a href="#modal" className="link-primary underline font-bold">
            uzyskaj wstępna wycenę
          </a>{" "}
          nawet za 15 minut!
        </p>
      </div>
    </section>
  );
};

export default WhyUs;
