import Image from "next/image";
import Homepage from "@/components/Home";
import Search from "@/components/Searchinput";
import CarsFilters from "@/components/CarsFilter";

export default function Home() {
  return (
   <div className='p-5 sm:px-10 md:px-20'> 
    <Homepage/>
    <Search/>
    <CarsFilters/>
   </div>
  );
}
