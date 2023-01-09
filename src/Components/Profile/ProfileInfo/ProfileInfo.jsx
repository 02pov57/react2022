import App from "../../../App";
import stl from './ProfileInfo.module.css';


function ProfileInfo(props) {
    return (
        <div className={stl.content}>
            <div className={stl.contentImg}>
                <img src="https://sevkavportal.ru/media/k2/items/cache/aa81247000afe4324d3024dec01a2db4_XL.jpg" alt=""/>
            </div>
           <div className={stl.avaDescription}>
               ava+ description <br/>
           </div>
        </div>
    );
}

export default ProfileInfo;