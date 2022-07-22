import "./style.css"
import heros from "../../assets/heroes/Heros.png"
import logo from "../../assets/icons/logoLogin.png"
import seta from "../../assets/icons/seta.png"
import sign from "../../assets/icons/@.png"
import padlock from "../../assets/icons/padlock.png"

export default function login() {
    return (
        <div class="container-fluid h-100">
            <div class="row login h-100">
                <div class="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5 p-0 h-100 backForm">
                    <a href="http://localhost:3000/">
                        <img src={seta} alt="logo" className="arrow" />
                    </a>
                    <div class="row h-100">
                        <div class="col-12 p-0 form align-self-center">
                            <div className="w-50">
                                <img src={logo} alt="logo" />
                                <div class="input-container">
                                    <img src={sign} alt="logo" className="icon" />
                                    <input type="text" name="firstname" placeholder="Email" className="email" />
                                </div>
                                <div class="input-container">
                                    <img src={padlock} alt="logo" className="icon" />
                                    <input type="password" name="firstname" placeholder="Password" className="pass" />
                                </div>
                                <button className="w-100">Login</button>
                                <div style={{ textAlign: "left", marginBottom: "40px" }}>
                                    <a href="http://localhost:3000/">Forgot Password?</a>
                                    <a href="http://localhost:3000/" style={{ float: "right" }}>
                                        Sing Up!
                                    </a>
                                </div>
                                <p className="text-start">
                                    By signing up, you agree to our <a href="http://localhost:3000/">Terms of Service</a>
                                </p>
                                <p className="text-start">
                                    and have read the <a href="http://localhost:3000/">Privacy Policy</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 col-xxl-7 p-0 align-self-end heros">
                    <img src={heros} alt="Heros" />
                </div>
            </div>
        </div>
    )
}
