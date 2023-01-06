import App from "../../App";
import stl from './Navmenu.module.css';
import {NavLink} from "react-router-dom";

function Navmenu() {
    return (
        <div className={stl.navmenu}>
            <div className="">
                <NavLink  to="/profile" className={({ isActive }) => isActive ? stl.active : stl.item}>Profile</NavLink>
            </div>
            <div className="">
                <NavLink to="/dialogs" className={({ isActive }) => isActive ? stl.active : stl.item}>Messages</NavLink>
            </div>
            <div className="">
                <NavLink to="/news" className={({ isActive }) => isActive ? stl.active : stl.item}>News</NavLink>
            </div>
            <div className="">
                <NavLink to="/music" className={({ isActive }) => isActive ? stl.active : stl.item}>Music</NavLink>
            </div>
            <div className="">
                <NavLink to="/settings" className={({ isActive }) => isActive ? stl.active : stl.item}>Settings</NavLink>
            </div>
        </div>
    );
}

export default Navmenu;