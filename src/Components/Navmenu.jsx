import App from "../App";
import stl from './Navmenu.module.css';

function Navmenu() {
    return (
        <div className={stl.navmenu}>
            <div className="">
                <a href="" className={stl.item}>Profile</a>
            </div>
            <div className="">
                <a href="" className={stl.item}>Messages</a>
            </div>
            <div className="">
                <a href="" className={stl.item}>News</a>
            </div>
            <div className="">
                <a href="" className={stl.item}>Music</a>
            </div>
            <div className="">
                <a href="" className={stl.item}>Settings</a>
            </div>
        </div>
    );
}

export default Navmenu;