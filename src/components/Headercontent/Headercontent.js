import React from "react";
import img from "../../image/hero-img.svg";
import Button from "../Button/Button";
const Headercontent = () => {
  return (
    <section className="grid md:grid-cols-2 pt-28  gap-4">
      <div className="md:p-20 p-4">
        <h2 className="md:text-5xl text-3xl font-mono font-bold">
          Best Crowd-Funding Website for your Startup.
        </h2>
        <p className="text-lg my-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo impedit
          eligendi totam aliquid voluptatibus aperiam soluta harum, quo sint
          autem, ducimus deserunt iusto blanditiis dolorum minus error
          reprehenderit id possimus.
        </p>
        <Button btn="Start A Campaign">
          <a href="/home"></a>{" "}
        </Button>
      </div>
      <div className="right">
        <img src={img} alt="" className="w-full" />
      </div>
    </section>
  );
};

export default Headercontent;
