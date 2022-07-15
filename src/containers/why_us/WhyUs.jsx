import React from "react";
import "./why_us.scss";

import photo from "../../assets/whyUs_photo.png";
const WhyUs = () => {
  return (
    <section id="whyUs" className="section-mt section-mb">
      <div className="content-wrapper">
        <div>
          <h3 className="font-serif mb-6 sm:mb-10 xl:mb-20">
            <div>Dlaczego warto</div>
            <div>
              postawić na <b>aviorprojekt</b>
            </div>
          </h3>
        </div>
        <div className="block lg:grid grid-cols-2 relative">
          <div className="hidden md:block">
            <img
              className="w-3/6 pr-20 absolute right:[-190%] sm:right-[-50%] md:right-[-50%] lg:right-[50%] bottom-5"
              src={photo}
              alt=""
            />
          </div>
          <div className="[&>div]:my-8">
            <div>
              <h4 className="font-sans">Elastyczność</h4>
              <p>
                Projekt mebli możemy wykonać dla osób bez projektu natomiast
                jeśli posiadasz już swój projekt bez problemu możemy zająć się
                zamówieniem ich i montażem w wybranym przez Ciebie terminie.
              </p>
            </div>
            <div>
              <h4 className="font-sans">Oszczędność</h4>
              <p>
                Zajmujemy się nie tylko projektem ale również dostawą mebli oraz
                ich montażem z wcześniej wykonanymi przez nas pomiarami. Dzięki
                takim rozwiązaniom nie będziesz musiał dodatkowo tracić czasu i
                pieniędzy na własne pomiary czy organizowanie dostaw poprzez
                innych usługodawców.
              </p>
            </div>
            <div>
              <h4 className="font-sans">Innowacyjne rozwiązania</h4>
              <p>
                Doskonale znamy potrzeby klientów z naszej branży, wiele osób
                zmaga się z problematycznymi i czasochłonnymi usługami. My
                rozwiązujemy Twój problem kompleksowo dzięki czemu Twoje
                marzenia o nowych meblach spełniają się w mgnieniu oka.
              </p>
            </div>
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
