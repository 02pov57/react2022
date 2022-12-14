import App from "../../../../App";
import stl from './Post.module.css';

function Post(props) {
    return (
        <div className={stl.post}>
            <div className={stl.postImg}>
                <img
                    src="https://drasler.ru/wp-content/uploads/2019/05/Прикольные-картинки-ВДВ-на-заставку-скачать-бесплатно-11.jpg"
                    alt=""/>
            </div>
            <div className={stl.postText}>
                <p>{props.message}</p>
            </div>
            <div className={stl.countlike}><h3>{props.likes}</h3></div>
            <div className={stl.like}>

                <img src="https://sun9-77.userapi.com/impg/5sbdA6As0N0s0TN95jG_4KUnovBVu_jsDtBGiA/J68ruXjC8g0.jpg?size=127x130&quality=96&sign=4d1d074d3af702a270e55d604a8403e9&c_uniq_tag=_hdvf2Y9OQTxiu2jeJHxkapSJ11K1DLtFIGAWAifGic&type=album" alt=""/>
            </div>
        </div>
    );
}

export default Post;