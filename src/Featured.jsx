import React from "react";
import Instant from "./assets/instant-food.jpg";
import BabyFood from "./assets/baby-care.jpg";
import  Cleaner from "./assets/cleaning.jpg";
import   Flour from "./assets/atta-rice.jpg";
import PetFood from "./assets/pet-care.jpg";
import Tea from "./assets/tea-coffee.jpg";

function Featured() {
  return (
  <>
     <h1 className="text-2xl font-bold mb-6 px-16">Featured Categories</h1>



    <div className="h-44 flex flex-col sm:flex-row flex-wrap gap-4">

<div className="flex flex-col items-center gap-2 border border-gray-300 ">
        <img src={Instant}  className="w-24 h-24 object-contain" />
        <p className="text-sm font-medium text-center">Instant Food</p>
      </div>

        <div className="flex flex-col items-center gap-2 border border-gray-300">
        <img src={BabyFood}  className="w-24 h-24 object-contain" />
        <p className="text-sm font-medium text-center">Baby Care</p>
        
      </div>


        <div className="flex flex-col items-center gap-2 border border-gray-300">
        <img src={Cleaner}  className="w-24 h-24 object-contain"/>
        <p className="text-sm font-medium text-center">Cleaning Essential</p>

         </div>

        <div className="flex flex-col items-center gap-2 border border-gray-300">
        <img src={Flour}  className="w-24 h-24 object-contain"/>
              <p className="text-sm font-medium text-center">Atta, Rice & Dal</p>

         </div>

        <div className="flex flex-col items-center gap-2 border border-gray-300">
        <img src={PetFood}  className="w-24 h-24 object-contain"/>
         <p className="text-sm font-medium text-center">Pet Care </p>

        
         </div>

        <div className="flex flex-col items-center gap-2 border border-gray-300">
        <img src={Tea}  className="w-24 h-24 object-contain" />
           <p className="text-sm font-medium text-center">Tea, Coffee & Drinks </p>
         </div>



    </div>

    </>
  );
}

export default Featured;
