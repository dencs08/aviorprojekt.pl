import React from "react";
import {
  Header,
  OurWorks,
  // WhyUs,
  OurAcomplishments,
  OwnConfiguration,
  Offer,
} from "../../containers";

const Start = () => {
  return (
    <div>
      <Header />
      <OurWorks />
      {/* <WhyUs /> */}
      <OurAcomplishments />
      <OwnConfiguration />
      <Offer />
    </div>
  );
};

export default Start;
