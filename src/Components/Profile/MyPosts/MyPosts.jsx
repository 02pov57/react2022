import App from "../../../App";
import stl from './MyPosts.module.css';
import Post from "./Post/Post";

function MyPosts(){
    return(
        <div className={stl.content}>
           <div className={stl.newPost}>
               new post <br/>
           </div>
            <Post message="Artem is topchik" likes="8"/>
            <Post message = "FSB ruliit" likes="2"/>
            <Post message="Staropol best city" likes="7"/>
        </div>
    );
}

export default MyPosts;