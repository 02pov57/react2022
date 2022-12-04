import App from "../App";
import stl from './Profile.module.css';

function Profile(){
    return(
        <div className={stl.content}>
            <div className={stl.contentImg}>
                <img src="https://sevkavportal.ru/media/k2/items/cache/aa81247000afe4324d3024dec01a2db4_XL.jpg" alt=""/>
            </div>
            ava+ description <br/>
            my post <br/>
            new post <br/>`
            post1 <br/>
            post 2 <br/>

        </div>
    );
}

export default Profile;