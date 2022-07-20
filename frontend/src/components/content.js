import "./content.css"
import AdaImg from "../assets/heroes/AdaMini.png"
import Chart from "./chart"
import DataBase from "../database"
import graphWhite from "../assets/icons/graphWhite.png"

export default function content() {
    return (
        <div className="content p-container-md p-container-lg">
            <div className="title">
                <img src={graphWhite} alt="Paris" className="img" />
                <h1>Statistics</h1>
            </div>
            <div className="ranking">
                <Chart name={"Ada"} image={AdaImg} values={DataBase()} />
                <Chart name={"Ada"} image={AdaImg} values={DataBase()} />
                <Chart name={"Ada"} image={AdaImg} values={DataBase()} />
                <Chart name={"Ada"} image={AdaImg} values={DataBase()} />
                <Chart name={"Ada"} image={AdaImg} values={DataBase()} />
                <Chart name={"Ada"} image={AdaImg} values={DataBase()} />
            </div>
        </div>
    )
}
