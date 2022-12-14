import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header/Header";
import Navmenu from "./Components/Navmenu/Navmenu";
import Profile from "./Components/Profile/Profile";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className="base">
                <Navmenu/>
                <Profile/>

            </div>
        </div>
    );
}




export default App;
