import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiOutlineUser, AiFillHome, AiTwotoneShop, AiFillBook } from "react-icons/ai";

const Sidebar = () => {

    //routing de next
    const router = useRouter();

    // Enlaces a los que se redirecionan
    const LinksSidebar =[
        {name:"HOME",link:"/", icon: <AiFillHome/>},
        {name:"Restaurante",link:"/Restaurante", icon: <AiTwotoneShop/>},
        {name:"Menu",link:"/", icon: <AiFillBook/>},
      ];

      const [open,setOpen]=useState(false);

    return ( 
            // <aside >
            <nav className="bg-gray-800 fixed z-30 w-full bg-white">
                <div className="px-6 py-3">
                    <div className="flex items-center justify-between">
                        
                        {/* Boton del navbar desplegar menu */}
                        <div className="flex items-center justify-start">
                            <button className="p-1 text-gray-500 rounded cursor-pointer lg:hidden hover:bg-gray-900 md:hidden" 
                                onClick={()=>setOpen(!open)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                                <span className="text-white flex items-center text-xl font-bold">Bienvenido</span>
                        </div>
                        
                        <div className="flex items-center text-center">

                            {/* un menu aqui podemos agregar mas opciiones */}
                            <div className="bg-gray-800 w-full block flex-grow lg:flex lg:items-center lg:w-auto" /* {`w-full block flex-grow lg:flex lg:items-center lg:w-auto`} */>
                                <ul className={`${ !open ? 'hidden' : 'mt-8 w-3/5'} bg-gray-800 md:flex absolute md:static bg-white left-0 text-left`}>
                                    
                                    <li className={router.pathname === "/Dasboard" ? "bg-blue-800 p-2" : "p-2 hover:bg-gray-900 rounded"}>
                                        <Link href="/Dasboard">
                                            <a className="text-white block flex space-x-2 md:space-x-8 mx-4">
                                                <span className="text-2xl mx-1"> <AiFillHome/> </span>
                                                Home
                                            </a>     
                                        </Link>
                                    </li>

                                    <li className={router.pathname === "/Restaurante" ? "bg-blue-800 p-2" : "p-2 hover:bg-gray-900 rounded"}>
                                        <Link href="/Restaurante">
                                            <a className="text-white block flex space-x-2 md:space-x-8 mx-4">
                                                <span className="text-2xl mx-1"> <AiTwotoneShop/> </span>
                                                Restaurante
                                            </a>     
                                        </Link>
                                    </li>

                                    <li className={router.pathname === "/Menu" ? "bg-blue-800 p-2" : "p-2 hover:bg-gray-900 rounded"}>
                                        <Link href="/Menu">
                                            <a className="text-white block flex space-x-2 md:space-x-8 mx-4">
                                                <span className="text-2xl mx-1"> <AiFillBook/> </span>
                                                Menu
                                            </a>     
                                        </Link>
                                    </li>
                                </ul> 
                            </div>

                            {/* Icono de notificacion */}
                            {/* <div className="cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>
                            </div> */}

                            {/* <!-- Dropdown toggle button --> */}
                            <div className="relative inline-block ">
                                <button
                                    className="bg-gray-800 relative flex items-center p-2 text-sm text-white bg-white border border-transparent rounded-md focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:text-white dark:bg-gray-800 focus:outline-none hover:bg-gray-900">
                                    <span className="text-2xl"> <AiOutlineUser/> </span>
                                    <span className="mx-1">Jose</span>
                                    {/* <svg className="w-5 h-5 mx-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z"
                                        fill="currentColor"></path>
                                    </svg> */}
                                </button>

                                {/* <!-- Dropdown menu --> */}
                                {/* <div className="absolute right-0 z-20 w-56 mt-2 overflow-hidden bg-white rounded-md ">
                                    <ul className="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none">
                                        <li>
                                            <a href="#" className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100">Dashboard</a>
                                        </li>
                                        <li>
                                            <a href="#" className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100">Settings</a>
                                        </li>
                                    </ul>
                                </div>
                                */}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            // </aside>
     );
}
 
export default Sidebar;