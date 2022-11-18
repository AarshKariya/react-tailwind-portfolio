import React from "react";

const HeaderData = [
  { title: "Projects" },
  { title: "About" },
  { title: "Workflow" },
  { title: "Contacts" },
];

const Header = () => {
  return (
    <div className="mt-4 pl-[120px] cursor-pointer flex font-body border-b-2 border-style-border text-base">
      <h1 className="mb-3">Alesia Vainilovich</h1>
      <div className="flex pl-[710px]">
        {HeaderData.map((call) => (
          <h1 className="ml-8">{call?.title}</h1>
        ))}
      </div>
    </div>
  );
};

export default Header;

//hover:bg-style-yellow hover:opacity-75
