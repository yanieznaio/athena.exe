import React from "react";

const Hero = () => {
  return (
    <div
      className="min-h-screen w-full flex flex-col justify-start pt-0 items-center bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url(/herobg.png)",
      }}
    >
      {/* Hero Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-6xl  mt-40 md:mt-0 md:text-[13vw] font-extrabold yellow tracking-tighter uppercase">
          Vous etes la ?
        </h1>
        <div className="w-ful text-xl md:text-[4.4rem] justify-between flex font-extrabold yellow uppercase md:-mt-30 tracking-tight">
          <h2> IA check </h2>
          <h2>tes contacts</h2>
        </div>
      </div>
      <p className="mt-auto yellow font-extrabold text-xl md:text-3xl max-w-md text-center mb-4">
        Importe tes contacts et laisses Athena vérifier ton repertoire.
      </p>
    </div>
  );
};

export default Hero;
