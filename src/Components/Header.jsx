import App from "../App";
import s from './Header.module.css';


function Header(){
    return(   <div className={s.head}>
        <img src="https://halal-kz.kz/storage/app/media/logocomp-big.jpg" />
    </div>
    );
}

export default Header;