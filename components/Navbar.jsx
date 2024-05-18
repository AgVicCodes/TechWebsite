import Link from "next/link"

const Navbar = () => {
    return (
        <nav className="container">
            <div className = "grid">
                <h1 className = "font-bold mx-auto">ACUMEN</h1>
                {/* <img src = "" alt = "Logo"/> */}
                <Link href = "/" className = "m-4">Home</Link>
                <Link href = "/" className = "m-4">Blog</Link>
                <Link href = "/about" className = "m-4">About</Link>
                <Link href = "/" className = "m-4">Contact</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;