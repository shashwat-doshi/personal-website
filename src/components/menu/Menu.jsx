import "./menu.scss";
import { useHistory } from "react-router-dom";

export default function Menu({ isOpen, setOpen }) {

    const history = useHistory();

    const handleHomeClick = () => {
        history.push("/");
    };

    const handleProjectClick = () => {
        history.push("/projects");
    };


    return (
        <div className={"menu " + (isOpen && "active")}>
            <ul>
                <li onClick={() => setOpen(false)}>
                    <a onClick={handleHomeClick}>Home</a>
                </li>
                <li onClick={() => setOpen(false)}>
                    <a onClick={handleProjectClick}>Projects</a>
                </li>
                <li onClick={() => setOpen(false)}>
                    <a >Experience</a>
                </li>
                <li onClick={() => setOpen(false)}>
                    <a >Contact me</a>
                </li>
                {/* <li onClick={() => setOpen(false)}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={() => setOpen(false)}>
                    <a href="#works">Works</a>
                </li>
                <li onClick={() => setOpen(false)}>
                    <a href="#testimonials">Testimonials</a>
                </li>
                <li onClick={() => setOpen(false)}>
                    <a href="#contact">Contact</a>
                </li> */}
            </ul>
        </div>
    );
}
