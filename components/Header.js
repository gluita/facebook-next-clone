import Image from "next/image";
import {
  SearchIcon,
  HomeIcon,
  MenuIcon,
  ChatIcon,
  BellIcon,
  ChevronDownIcon,
} from "@heroicons/react/solid";
function Header() {
  return (
    <div className="px-[10px] py-[10px] flex justify-between sticky top-0 border rounded-md shadow-md">
      {/* left */}
      <div className="flex items-center gap-3">
        <Image
          src={"http://links.papareact.com/5me"}
          width={40}
          height={40}
          layout="fixed"
        ></Image>
        <div className="flex items-center border-[1px] rounded-lg shadow-sm border-solid outline-none border-black-100 bg-[#f2f2f2] py-[4px] px-[2px] border-[#CDD9ED] gap-2 ">
          <SearchIcon className="h-[17px]" />
          <input
            type="text"
            placeholder="Search Facebook"
            className=" outline-none border-none bg-transparent
            text-[14px] "
          />
        </div>
      </div>
      {/* middle */}
      <div className="flex items-center gap-10 ">
        <HomeIcon className="h-[25px] text-[#3d3d3d70]" />
        <HomeIcon className="h-[25px] text-[#3d3d3d70]" />
        <HomeIcon className="h-[25px] text-[#3d3d3d70]" />
        <HomeIcon className="h-[25px] text-[#3d3d3d70]" />
        <HomeIcon className="h-[25px] text-[#3d3d3d70]" />
      </div>
      {/* right */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <div className=" rounded-full bg-blue-500 w-[35px] h-[35px]"></div>
          <p className="mr-[16px]">Gluita</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="rounded-full p-2 bg-[#3d3d3d70]">
            <MenuIcon className="h-[21px] " />
          </div>
          <div className="rounded-full p-2 bg-[#3d3d3d70]">
            <ChatIcon className="h-[21px] " />
          </div>
          <div className="rounded-full p-2 bg-[#3d3d3d70]">
            <BellIcon className="h-[21px] " />
          </div>
          <div className="rounded-full p-2 bg-[#3d3d3d70]">
            <ChevronDownIcon className="h-[21px] " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
