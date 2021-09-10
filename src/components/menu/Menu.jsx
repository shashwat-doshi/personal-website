import "./menu.scss"
import React from "react";
import { Link, withRouter } from "react-router-dom";

function Menu(props) {
    return (
        // <div className={"menu " + (isOpen && "active")}>
        <div className="menu">
            <ul>
                <li
                    class={`${props.location.pathname === "/" ? "active" : ""}`}
                    // onClick={() => setOpen(false)}
                >
                {/* <a href="#intro">Home</a> */}
                    <Link class="nav-link" to="/">
                        Home
                        {/* <span class="sr-only">(current)</span> */}
                        {/* <span>(current)</span> */}
                    </Link>
                </li>
                <li 
                class={`${props.location.pathname === "/portfolio" ? "active" : ""}`}
                // onClick={() => setOpen(false)}
                >
                    {/* <a href="#portfolio">Portfolio</a> */}
                    <Link class="nav-link" to="/portfolio">
                        Portfolio
                        {/* <span class="sr-only">(current)</span> */}
                    </Link>
                </li>
                <li 
                class={`${props.location.pathname === "/works" ? "active" : ""}`}
                // onClick={() => setOpen(false)}
                >
                    {/* <a href="#portfolio">Portfolio</a> */}
                    <Link class="nav-link" to="/works">
                        Works
                    </Link>
                </li>
                <li 
                class={`${props.location.pathname === "/testimonials" ? "active" : ""}`}
                // onClick={() => setOpen(false)}
                >
                    {/* <a href="#portfolio">Portfolio</a> */}
                    <Link class="nav-link" to="/testimonials">
                        Testimonials
                    </Link>
                </li>

                {/* <li onClick={() => setOpen(false)}>
                    <a href="#testimonials">Testimonials</a>
                </li> */}

                <li 
                class={`${props.location.pathname === "/contact" ? "active" : ""}`}
                // onClick={() => setOpen(false)}
                >
                    {/* <a href="#portfolio">Portfolio</a> */}
                    <Link class="nav-link" to="/contact">
                        Contact
                    </Link>
                </li>
                {/* <li onClick={() => setOpen(false)}>
                    <a href="#contact">Contact</a>
                </li> */}
            </ul>

        </div>
    )
}

export default withRouter(Menu);
