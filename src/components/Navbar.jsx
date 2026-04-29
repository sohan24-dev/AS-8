import Link from "next/link";


const Navber = () => {
    const navberItems = (
        <>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/allanimals">All Animals</Link></li>
            <li><Link href="/profile">Profile</Link></li>
        </>
    );
    return (
        <div className="container mx-auto flex items-center justify-between mt-5 bg-sky-200">
            <div className="flex gap-3 items-center">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                        {navberItems}
                    </ul>
                </div>
                <h2>Logo</h2>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal px-1">
                    {navberItems}
                </ul>
            </div>
            <div className="flex gap-3">
                <Link href={'/login'}>Login</Link>
                <Link href={'/register'}>Register</Link>
            </div>
        </div>
    );
};

export default Navber;