import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header/Header";
import Navmenu from "./Components/Navmenu/Navmenu";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";

function App() {
    return (
        <div className="App">
            <Header />
            <div className="base">
                <Navmenu />
              <div className="content">
                  <Dialogs />
              </div>


            </div>
        </div>
    );
}




export default App;
