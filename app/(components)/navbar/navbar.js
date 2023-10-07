import Link from "next/link";

var home = "Home"
let styleObj = {
    backgroundColor:'black',
    color: 'white'
}
export default function Navbar() {
    return (
        <nav>
            <Link href="/" className="logo">XPlores
                <i className="fab fa-staylinked"></i>Kill
            </Link>
         
            <div className="nav-links" id="navLinks">
                
                <i className="fa fa-times" onclick="hideMenu()"></i>
                <ul>
                    <li><Link href="/">{home}</Link></li>
                    <li><Link href="/courses">Course</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </div>
            <i className="fa fa-bars" onclick="showMenu()"></i>

        </nav>
    )
}
