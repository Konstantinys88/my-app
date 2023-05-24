import AppHeader from "../app-info-header/app-header";
import AppTitle from "../app-title/app-title";
import WhoAmI from "../app-who-ami/who-ami";

import "./app.css";



function App() {
    return(
        <div className="app">
            <AppHeader></AppHeader>
            <AppTitle></AppTitle>
            <WhoAmI name={() =>{return "John"}} surname="Smith" link="facebook.com"></WhoAmI>
            <WhoAmI name={() =>{return "John"}} surname="Jonson" link="instagram.com"></WhoAmI>
            
        </div>
    );
}

export default App;