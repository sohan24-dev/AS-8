import Link from "next/link";


const Navber = () => {
    return (
        <div className="container mx-auto flex items-center justify-between">
            <div>
                <h2>Logo</h2>
            </div>
            <div className="flex gap-3">
                <Link href={'/'}>Home</Link>
                <Link href={'/allanimals'}>All Animals</Link>
                <Link href={'/profile'}>Profile</Link>
            </div>
            <div className="flex gap-3">
                <Link href={'/login'}>Login</Link>
                <Link href={'/register'}>Register</Link>
            </div>
        </div>
    );
};

export default Navber;