import Link from "next/link"

const Navbar = () => {
    return (
        <nav className="">
            <div className="flex flex-row justify-between p-5 bg-red-100">
                <div className = "flex flex-row flex-wrap bg-red-300 justify_start">
                    <h1 className = "font-bold py-3 mx-24">ACUMEN</h1>
                </div>
                <div className="flex flex-row justify-end uppercase">
                    <Link href = "/" className = "m-4">Home</Link>
                    <Link href = "/blog" className = "m-4">Blog</Link>
                    <Link href = "/about" className = "m-4">About</Link>
                    <Link href = "/contact" className = "m-4">Contact</Link>
                    <Link href = "/login" className = "m-4">Login</Link>
                    <Link href = "/signup" className = "m-4">Sign up</Link>
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;