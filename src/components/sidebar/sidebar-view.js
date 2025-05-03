"use client"

import Image from "next/image";
import { useState } from "react";
import { BsArrowRightShort, BsChevronDown, BsFillImageFill, BsPerson, BsReverseLayoutSidebarInsetReverse, BsSearch } from "react-icons/bs";
import { AiFillEnvironment, AiOutlineBarChart, AiOutlineFileText, AiOutlineLogout, AiOutlineMail, AiOutlineSetting } from "react-icons/ai";
import { RiDashboardFill } from "react-icons/ri";
import Link from "next/link";
import { logout } from "@/modules/users/actions/logout";

export default function SidebarView() {
  const [open, setOpen] = useState(true)
  const [submenuOpen, setSubmenuOpen] = useState(false)
  const MenuItems = [
    { title: "داشبورد", link: "/" },
    { title: "پست ها", icon: <AiOutlineFileText />, link: "/posts" },
    { title: "کامنت ها", icon: <AiOutlineFileText />, link: "/comments" },
    { title: "رسانه ها", spacing: true, icon: <BsFillImageFill /> },
    {
      title: "پروژه ها",
      icon: <BsReverseLayoutSidebarInsetReverse />,
      submenu: true,
      submenuItems: [
        { title: "Submenu 1" },
        { title: "Submenu 2" },
        { title: "Submenu 3" },
      ],
    },
    { title: "تحلیل ها", icon: <AiOutlineBarChart /> },
    { title: "پیام ها", icon: <AiOutlineMail /> },
    { title: "پروفایل", spacing: true, icon: <BsPerson /> },
    { title: "تنظیمات", icon: <AiOutlineSetting /> },
    { title: "خروج", icon: <AiOutlineLogout />, logout: true },
  ]
  return (
    <div className={`h-full p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300 ease-in-out relative border-1 rounded-md shadow bg-white dark:bg-dark-card hidden lg:block`}>

      <BsArrowRightShort className={`text-3xl bg-primary text-white dark:bg-green-700 rounded-full absolute left-0 top-9 -translate-x-[50%] border cursor-pointer ${!open && "rotate-180"} `}
        onClick={() => setOpen(!open)} />

      <div className="bg-blue-500 mx-auto w-[70%] rounded-md p-1">
        <Link href="/">
          <Image src="/images/Flynet white logo.png" alt="logo" width={200} height={20} className={`text-4xl w-30 h-auto mx-auto rounded cursor-pointer ${open && "rotate-[360deg]"} duration-500`} />
        </Link>
        {/* <AiFillEnvironment className={`text-4xl rounded cursor-pointer block float-right ml-2 ${open && "rotate-[360deg]"} duration-500`} /> */}
        {/* <h1 className={`origin-right font-medium text-2xl duration-300 ${!open && "scale-0"}`}>Flynet</h1> */}
      </div>

      <div className={`flex bg-black/10 dark:bg-white/10 items-center rounded-md mt-6 ${open ? "px-4" : "px-2.5"} py-2`}>
        <BsSearch className={`text-lg block float-right cursor-pointer ${open && "ml-2"}`} onClick={() => setOpen(true)} />
        <input type={"search"} placeholder="جست و جو" className={`text-sm bg-transparent w-full focus:outline-none ${!open && "hidden"}`} />
      </div>

      <ul className="pt-2">
        {MenuItems.map((menu, index) => (
          <div key={index}>
            {menu.link ?
              <Link href={menu.link} key={index} className={`text-sm dark:text-white flex items-center gap-x-4 cursor-pointer p-2 hover:bg-white/10 rounded-md border-b
              ${menu.spacing ? "mt-9" : "mt-2"}`}
                onClick={() => {
                  menu.submenu && setSubmenuOpen(!submenuOpen)
                }}>
                <span className="text-2xl text-primary dark:text-primary block float-right">{menu.icon ? menu.icon : <RiDashboardFill />}</span>
                <span className={`text-base font-bold flex-1 ${!open && "hidden"} duration-200`}>{menu.title}</span>
                {menu.submenu && open && (
                  <BsChevronDown className={`size-5 ${submenuOpen && "rotate-180"} duration-300`} />
                )}
              </Link> :
              <li key={index} className={`text-sm dark:text-white flex items-center gap-x-4 cursor-pointer p-2 hover:bg-white/10 rounded-md border-b
              ${menu.spacing ? "mt-9" : "mt-2"}`}
                onClick={() => {
                  menu.submenu && setSubmenuOpen(!submenuOpen)
                  menu.logout && logout()
                }}>
                <span className="text-2xl text-primary dark:text-primary block float-right">{menu.icon ? menu.icon : <RiDashboardFill />}</span>
                <span className={`text-base font-bold flex-1 ${!open && "hidden"} duration-200`}>{menu.title}</span>
                {menu.submenu && open && (
                  <BsChevronDown className={`size-5 ${submenuOpen && "rotate-180"} duration-300`} />
                )}
              </li>
            }
            {menu.submenu && submenuOpen && open && (
              <ul>
                {menu.submenuItems.map((subItem, index) => (
                  <li key={index} className="text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-foreground/20 rounded-md">
                    {subItem.title}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </ul>
    </div>
  )
}