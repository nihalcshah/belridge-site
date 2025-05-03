import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#111111] flex items-center justify-between px-8 py-3" style={{minHeight:'48px'}}>
      <div className="flex items-center">
        <img src="/assets/brlogo.png" alt="br logo" className="h-7 w-auto" />
      </div>
      <div className="text-white text-lg font-light opacity-90">
        Incorporated 2025.
      </div>
    </footer>
  );
};

export default Footer;