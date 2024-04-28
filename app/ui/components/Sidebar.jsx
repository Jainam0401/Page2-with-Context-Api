import { AiOutlineUnorderedList } from "react-icons/ai";
import { FaBook } from "react-icons/fa";
import { CiCalculator1 } from "react-icons/ci";
import Link from 'next/link';

export default function Sidebar() {
  const SidebarList = [
    {
      link: "/orderList",
      icon: AiOutlineUnorderedList,
      title: "Orders Dashboard",
    },
    {
      link: "/CreateOrders",
      icon: FaBook,
      title: "Create Orders",
    },
    {
      link: "/RateCalculator",
      icon: CiCalculator1,
      title: "Rate Calculator",
    },
  ];
  // className="focus:outline-none text-white bg-[#eb4b67] hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium text-sm px-5 py-2.5 me-2 mb-2"

  function renderItems(SidebarList) {
    return (
      <Link href={SidebarList.link} key={SidebarList.title}>
        <div className="hover:bg-sky-500 text-center mx-auto mt-[0px] z-10 py-4">
          <SidebarList.icon className="text-white text-center m-auto" />
          <h3 className="text-white m-3 text-center px-5  me-2 mb-2">{SidebarList.title}</h3>
        </div>
      </Link>
    );
  }

  return (
    <nav className="hidden md:flex z-20  flex-col w-40 bg-[#2b7aa5] text-gray-900">
      <div className="mt-10">{SidebarList.map(renderItems)}</div>
    </nav>
  );
}
