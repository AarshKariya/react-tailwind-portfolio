import React from "react";

const Contacts = () => {
  return (
    <div className="font-body h-[50vh]">
      <div className="pt-[4px] pl-[120px] pr-[120px] text-[3rem] uppercase cursor-pointer underline decoration-style-yellow decoration-4 animate-pulse">
        Contacts
      </div>
      <div className="pl-[120px] mt-[60px] text-[2rem]">
        <span>AL.VAINILOVICH@GMAIL.COM</span>
      </div>
      <div className="pl-[120px] mt-[60px] text-[2rem] flex flex-row cursor-pointer">
        LinkedIn
        <span className="ml-[2rem]">|</span>
        <span className="ml-[2rem]">Behance</span>
        <span className="ml-[2rem]">|</span>
        <span className="ml-[2rem]">Dribble</span>
        <span className="ml-[2rem]">|</span>
        <span className="ml-[2rem]">Telegram</span>
        <span className="ml-[2rem]">|</span>
        <span className="ml-[24rem] animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            class="bi bi-arrow-up"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default Contacts;
