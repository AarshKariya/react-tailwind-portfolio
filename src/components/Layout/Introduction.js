import React from "react";

const Introduction = () => {
  return (
    //hover:-translate-y-1
    <div className="pt-[4px] pl-[120px] pr-[120px] font-body relative transition ease-in-out delay-150">
      <p className="text-[14rem] uppercase font-bold leading-none text-ellipses tracking-tight">
        Hey! I'm Alesia
      </p>
      <img
        src="https://images.unsplash.com/photo-1589156280159-27698a70f29e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80"
        className="w-[400px] h-[600px] translate-x-[48rem] -translate-y-[26rem] object-cover absolute hover:shadow-xl duration-150"
        // mix-blend-screen
        alt="Pic of Designer."
      />
      <p className="text-[4rem] underline decoration-style-yellow decoration-4 animate-pulse">
        UI/UX Designer
      </p>
      <p className="text-sm box-content w-[13rem] p-5 translate-x-[20rem] -translate-y-[2rem]">
        I'm a UI/UX designer, available for work, new projects, collaborations,
        and freelance opportunities. I also have 5 years of experience as a
        graphic designer, creating digital and print design.
      </p>
    </div>
  );
};

export default Introduction;

//-translate-x-[26rem] -translate-y-32
//className="relative" I'm Alesia
//bg-clip-text text-transparent bg-gradient-to-r from-style-black to-style-yellow
