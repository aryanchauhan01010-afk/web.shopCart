import React from 'react'
import freshFood from "./assets/freshcart-logo.svg";
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { LuShoppingBag } from "react-icons/lu";
function Header() {
  return (
    <>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-3 pt-4 py-2">

        <div className="flex items-center gap-2 cursor-pointer">
          <h1><img src={freshFood} /></h1>
        </div>

        <div className="flex items-center gap-4 flex-1 max-w-3xl mx-10">

          <div className="flex items-center flex-1 border border-gray-300 rounded-xl px-4 py-3 bg-white focus-within:border-green-500">
            <input
              type="text"
              placeholder="Search for products"
              className="flex-1 outline-none text-gray-600 placeholder-gray-400"
            />
            <CiSearch className="text-gray-500 text-xl cursor-pointer" />
          </div>

          <div className="hidden md:inline-flex items-center gap-2 border border-gray-300 rounded-xl px-4 py-3 text-gray-600 cursor-pointer hover:bg-gray-50 transition">
            <CiLocationOn className="text-lg" />
            <span className="text-sm font-medium">Location</span>
          </div>

        </div>

        <div className="flex items-center gap-6 text-gray-700">

          <div className="relative cursor-pointer">
            <CiHeart className="text-2xl" />
          
          </div>

          <FiUser className="text-2xl cursor-pointer" />

          <div className="relative cursor-pointer">
            <LuShoppingBag className="text-2xl" />
    
        
          </div>

        </div>

      </div>
    </>
  )
}

export default Header
