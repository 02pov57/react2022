import App from "../../App";
import stl from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(){
    return(
        <div className={stl.content}>

            <ProfileInfo/>
            <MyPosts/>

        </div>
    );
}

export default Profile;