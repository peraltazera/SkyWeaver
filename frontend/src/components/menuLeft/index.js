import "./style.css"
import cards from "../../assets/icons/cards.png"
import gear from "../../assets/icons/gear.png"
import logo from "../../assets/icons/logo.png"
import home from "../../assets/icons/home.png"
import trophy from "../../assets/icons/trophy.png"
import graphPurple from "../../assets/icons/graphPurple.png"

export default function menuLeft() {
    return (
        <nav className="leftnav">
            <form className="menuTop">
                <a href="http://localhost:3000/">
                    <img src={logo} alt="logo" className="logo" />
                </a>
                <hr />
                <a href="http://localhost:3000/">
                    <img src={home} alt="home" className="icon" />
                </a>
                <a href="http://localhost:3000/">
                    <img src={graphPurple} alt="graph" className="icon" />
                </a>
                <a href="http://localhost:3000/">
                    <img src={cards} alt="cards" className="icon" />
                </a>
                <a href="http://localhost:3000/">
                    <img src={trophy} alt="trophy" className="icon" />
                </a>
            </form>
            <form className="menuBack">
                <button className="button">Pro</button>
                <a href="http://localhost:3000/">
                    <img src={gear} alt="gear" className="icon" />
                </a>
            </form>
        </nav>
    )
}
