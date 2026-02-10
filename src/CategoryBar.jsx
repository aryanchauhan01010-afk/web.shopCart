import { FiGrid } from "react-icons/fi";
import { IoChevronDown } from "react-icons/io5";

function CategoryBar(){
  return (
    <div className="w-full bg-white border-b">
      <div className="max-w-7xl mx-auto flex items-center gap-8 px-2 pt-5 py-1">

        <button className="flex items-center gap-2 bg-green-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
          <FiGrid className="text-lg" />
          All Departments
        </button>

        <nav className="flex items-center gap-6 text-gray-800 font-medium">

          <div className="flex items-center gap-1 cursor-pointer hover:text-green-600">
            Home <IoChevronDown className="text-sm" />
          </div>

          <div className="flex items-center gap-1 cursor-pointer hover:text-green-600">
            Shop <IoChevronDown className="text-sm" />
          </div>

          <div className="cursor-pointer hover:text-green-600">
            Stores
          </div>

          <div className="flex items-center gap-1 cursor-pointer hover:text-green-600">
            Mega menu <IoChevronDown className="text-sm" />
          </div>

          <div className="flex items-center gap-1 cursor-pointer hover:text-green-600">
            Pages <IoChevronDown className="text-sm" />
          </div>

          <div className="flex items-center gap-1 cursor-pointer hover:text-green-600">
            Account <IoChevronDown className="text-sm" />
          </div>

          <div className="cursor-pointer hover:text-green-600">
            Dashboard
          </div>

          <div className="cursor-pointer hover:text-green-600">
            Docs
          </div>

        </nav>
      </div>
    </div>
  );
};

export default CategoryBar;
