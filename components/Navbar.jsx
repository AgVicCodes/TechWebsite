import Link from "next/link"

const Navbar = () => {
    return (
        <nav>
            <div className = "logo">
                <h1 className = "font-bold">ACUMEN</h1>
                {/* <img src = "" alt = "Logo"/> */}
            </div>
            <Link href = "/" className = "m-4">Home</Link>
            <Link href = "/" className = "m-4">Blog</Link>
            <Link href = "/about" className = "m-4">About</Link>
            <Link href = "/" className = "m-4">Contact</Link>
        </nav>
    );
}
 
export default Navbar;