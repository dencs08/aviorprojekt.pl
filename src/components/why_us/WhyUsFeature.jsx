import React from "react";

const WhyUsFeature = ({ title, text, icon }) => {
  return (
    <div>
      <h4 className="font-sans flex mb-2">
        <span className="mr-3">{icon}</span>
        <span className="mt-1">{title}</span>
      </h4>
      <p>{text}</p>
    </div>
  );
};

export default WhyUsFeature;
