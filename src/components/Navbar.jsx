"use client"

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


const Navber = () => {
    const {
        data: session,
        isPending, //loading state
        error, //error object
        refetch //refetch the session
    } = authClient.useSession()
    // console.log(session);
    const user = session?.user
    const pathname = usePathname()
    // console.log(pathname);
    const getLinkClass = (path) =>
        pathname === path
            ? "text-blue-600 font-semibold border border-blue-600"
            : "text-gray-700 hover:text-blue-500";


    const handleLogout = () => {
        authClient.signOut()
    }

    const navberItems = (
        <>
            <li>
                <Link
                    href="/"
                    className={`${getLinkClass("/")} px-4 py-2 rounded-lg transition-all duration-200 hover:bg-gray-100 hover:text-blue-600`}
                >
                    Home
                </Link>
            </li>

            <li>
                <Link
                    href="/allanimals"
                    className={`${getLinkClass("/allanimals")} px-4 py-2 rounded-lg transition-all duration-200 hover:bg-gray-100 hover:text-blue-600`}
                >
                    All Animals
                </Link>
            </li>

            <li>
                <Link
                    href="/profile"
                    className={`${getLinkClass("/profile")} px-4 py-2 rounded-lg transition-all duration-200 hover:bg-gray-100 hover:text-blue-600`}
                >
                    Profile
                </Link>
            </li>
        </>
    );
    return (
        <div className="bg-slate-300">
            <div className="container mx-auto flex items-center justify-between m-3">
                <div className="flex gap-2 items-center ml-2">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="md:hidden cursor-pointer
    rounded-xl
    hover:scale-105 active:scale-95
    transition-all duration-300
    group
  "
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className=" h-6 w-6 text-blue-600 group-hover:text-blue-700
      transition-colors duration-300 
    "
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 6h18M3 12h18M3 18h18"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                        >
                            {navberItems}
                        </ul>
                    </div>
                    <div className="flex items-center gap-1">
                        <div className="">
                            <Image
                                src="https://i.ibb.co.com/DHd0JY9L/Screenshot-2026-04-30-111117-removebg-preview.png"
                                alt="Qurbani Logo"
                                width={36}
                                height={36}
                                className="rounded-full"
                            />
                        </div>
                        <h1 className="text-2xl font-extrabold text-green-700">
                            Qurbani
                        </h1>
                    </div>
                </div>
                <div className="navbar-center hidden md:flex ">
                    <ul className="menu menu-horizontal px-1 gap-4">
                        {navberItems}
                    </ul>
                </div>
                {
                    user ? <div className="flex gap-2 items-center">
                        <h2><span className="font-bold text-xl ">Hello</span> {user?.name?.split(" ")[0]}</h2>
                        <div className="avatar">
                            <div className="w-10 rounded-full ring ring-green-500 ring-offset-base-100 ring-offset-2 overflow-hidden">
                                <Image
                                    src={user?.image || "/default-avatar.png"}
                                    alt="User Avatar"
                                    width={40}
                                    height={40}
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <Link href={'/login'}
                            onClick={handleLogout}
                            className="btn px-5 py-2 rounded-lg bg-red-500 text-white font-medium 
             hover:bg-red-600 active:scale-95 transition-all duration-200
             shadow-md hover:shadow-lg"
                        >
                            Logout
                        </Link>
                    </div> : <div className="flex gap-3 mr-2">
                        <div className="flex items-center gap-3">
                            <Link
                                href="/login"
                                className="px-5 py-2 rounded-lg bg-blue-600 text-white font-medium
                   hover:bg-blue-700 transition duration-200 shadow-sm"
                            >
                                Login
                            </Link>

                            <Link
                                href="/register"
                                className="px-5 py-2 rounded-lg bg-blue-600 text-white font-medium
                   hover:bg-blue-700 transition duration-200 shadow-sm"
                            >
                                Register
                            </Link>
                        </div>
                    </div>
                }



            </div>
        </div>


    );
};

export default Navber;