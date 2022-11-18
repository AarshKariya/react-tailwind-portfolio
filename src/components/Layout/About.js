import React from "react";

const About = () => {
  return (
    <div className="font-body h-[100vh]">
      <div className="pt-[4px] pl-[120px] pr-[120px] text-[3rem] uppercase cursor-pointer underline decoration-style-yellow decoration-4 animate-pulse">
        About
      </div>
      <p className="uppercase pt-[1rem] pl-[120px] pr-[120px] text-[2rem] box-content w-[30rem]">
        I am a fan of minimalistic design. I am working hard to stay up to date
        with the most relevant and trendy design
      </p>
      <img
        className="pl-[120px] h-[30rem] translate-x-[20rem] -translate-y-[8rem] mix-blend-overlay hover:mix-blend-normal"
        src="https://images.unsplash.com/photo-1658294600218-d5b74d734928?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
        alt="Pic of designer"
      ></img>
      <div className="pl-[120px] pr-[120px] text-[1rem] box-content w-[30rem] translate-x-[42rem] -translate-y-[31rem]">
        <p>
          I graduated from Belarusian National Technical University with a
          Bachelor's Degree in Design of Packaging. I have 5 years of experience
          in graphic design which helps me to understand colors, typography,
          composition and visual components better.
        </p>
        <p className="mt-[1rem]">
          I have a specialized education in the program "UX/UI Design:
          Websites." I have also completed an internship in UPROCK School under
          the mentoring of art director Evgeny Kuzmin.
        </p>
        <p className="mt-[1rem]">
          My main aim is to improve my skills by reading articles, professional
          literature, watching tutorials, and then apply the knowledge to my
          work.
        </p>
        <button className="uppercase text-[1rem] py-[8px] px-[8rem] mt-[4.8rem] bg-style-bg border-style-header border-2">
          Download CV
        </button>
      </div>
    </div>
  );
};

export default About;
