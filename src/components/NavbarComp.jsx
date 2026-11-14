import { Link } from "react-router-dom"

const NavbarComp = ()=>{


    return (
        <nav>
            <div className="logo">
                <img src="" alt="" />
            </div>

            <ul>

                <li> <a href="/">Home</a></li>

                <li><Link to="/about">About Us</Link></li>

                <li><Link to="/contact">Contact Us</Link></li>
                
            </ul>


            <div>

                <button>dosomethijg</button>
                <button>dosomethijg</button>
            </div>
        </nav>
    )
}

export default NavbarComp