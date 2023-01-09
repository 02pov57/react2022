import logo from './logo.svg';
import stl from './App.module.css';
import Header from "./Components/Header/Header";
import Navmenu from "./Components/Navmenu/Navmenu";
import Profile from "./Components/Profile/Profile";
import News from "./Components/News/News";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";

function App() {
    return (
        <BrowserRouter>

            <div className={stl.App}>
                <Header/>
                <div className={stl.base}>
                    <Navmenu/>
                    <div className={stl.content}>
                        <Routes>
                            <Route path='/dialogs/*' element={<Dialogs />}/>
                            <Route path='/profile' element={<Profile />}/>
                            <Route path='/' element={<Profile />}/>
                            <Route path='/news' element={<News />}/>
                            <Route path='/music' element={<Music />}/>
                            <Route path='/settings' element={<Settings />}/>
                        </Routes>

                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
