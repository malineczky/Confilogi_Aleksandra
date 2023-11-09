import "./App.scss";
import HomeNav from "./components/HomeNav";
import HomeFooter from "./components/HomeFooter";
import HomeFeatures from "./components/HomeFeatures";
import HomeDownload from "./components/HomeDownload";
import HomeOpening from "./components/HomeOpening";
import HomeFAQ from "./components/HomeFAQ";
import HomeForm from "./components/HomeForm";
import HomeDowlonadExtension from "./components/HomeDownloadExtension";
import HomeFeaturesSlide from "./components/HomeFeaturesSlide";
import PopUp from "./components/PopUp";
import { useEffect, useState } from "react";

function App() {
    const [showPopup, setShowPopup] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowPopup(true);
        }, 20000);
    }, []);

    return (
        <>
            <div
                className="popup__br"
                onMouseEnter={() => {
                    setShowPopup(true);
                }}
            ></div>
            <HomeNav showMenu={showMenu} setShowMenu={setShowMenu}/>
            <HomeOpening showMenu={showMenu}/>
            <HomeFeatures />
            <HomeFeaturesSlide />
            <HomeDownload />
            <HomeDowlonadExtension />
            <HomeFAQ />
            <HomeForm />
            <HomeFooter />
            <PopUp show={showPopup} setShowPopup={setShowPopup} />
        </>
    );
}

export default App;
