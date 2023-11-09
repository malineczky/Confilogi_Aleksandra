import Socials from "./Icons/Socials";
import Logo from "./Icons/Logo";

function App() {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer__logo">
                        <Logo />
                    </div>
                    <nav className="footer__nav">
                        <ul>
                            <li>
                                <a href="#">FEATURES</a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a href="#">PRICING</a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a href="#">CONTACT</a>
                            </li>
                        </ul>
                    </nav>
                    <Socials />
                </div>
            </footer>
        </>
    );
}

export default App;
