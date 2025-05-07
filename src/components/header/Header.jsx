import React from "react";
import { Search } from "lucide-react";
import BookSearch from "../bookSearch/BookSearch";

const Header = () => {
  return (
    <header className="w-full bg-[#FFE600] px-4 py-3 flex items-center justify-around shadow-md">
      <div className="flex items-center">
        <img className="w-20 rounded-full" src="public\logo.png" alt="logo" />
        <h2 className="text-3xl font-extrabold text-[#282D77] tracking-tight">
          mercado libro
        </h2>
      </div>

      <div className="flex-1 max-w-xl mx-4">
        <BookSearch/>
      </div>

      <div className="flex items-center space-x-4  text-[#282D77] font-medium tracking-tight">
        <button className="hover:underline">Offers</button>
        <button className="hover:underline">Log in</button>
      </div>
    </header>
  );
};

export default Header;
