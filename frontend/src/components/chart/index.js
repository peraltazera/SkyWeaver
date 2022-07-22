import { Line } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js"
import "./style.css"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler)

export default function Chart(props) {
    const names = props.values.chart.map((e) => e.name)
    const winrates = props.values.chart.map((e) => e.winrate)
    const imagesUrl = props.values.chart.map((e) => e.imageUrl)

    const configChart = {
        imageSize: 32,
        grid: {
            color: `rgb(123, 132, 143, 0.2)`,
            borderDash: [2, 2],
            tickWidth: 0,
            lineWidth: 0.5,
            borderColor: "rgb(255, 255, 255, 0)",
        },
    }

    const prismImages = []

    for (let i = 0; i < imagesUrl.length; i++) {
        prismImages.push(new Image())
        prismImages[i].src = imagesUrl[i]
        prismImages[i].width = configChart.imageSize
        prismImages[i].height = configChart.imageSize
    }

    const data = {
        labels: winrates.map((e) => e + "%"),
        datasets: [
            {
                label: "",
                data: winrates,
                fill: {
                    target: {
                        value: 50,
                    },
                    above: (context) => setGradient(0.6, 0, "rgb(22, 229, 180, 0)", "rgb(22, 229, 180, 0.6)", context),
                    below: (context) => setGradient(0.5, 1, "rgb(255, 70, 85, 0)", "rgb(255, 70, 85, 0.6)", context),
                },
                borderColor: (context) => setGradient(0.54, 0.54, "rgb(22, 229, 180, 1)", "rgb(255, 70, 85,1)", context),
                tension: 0.4,
                pointBorderWidth: 1,
                pointHitRadius: 300,
                showLine: true,
            },
        ],
    }

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: {
                beginAtZero: true,
                suggestedMax: 100,
                ticks: {
                    stepSize: 10,
                    color: "rgb(123, 132, 143, 1)",
                },
                grid: {
                    ...configChart.grid,
                    tickLength: 20,
                },
            },
            xAxes: {
                ticks: {
                    stepSize: 10,
                    color: (context) => setColor(parseInt(context.tick.label)),
                    // color: "rgb(123, 132, 143, 1)",
                    display: true,
                },
                grid: {
                    ...configChart.grid,
                    tickLength: 15,
                },
            },
        },
        elements: {
            point: {
                pointStyle: prismImages,
                stepped: false,
                pointRadius: 15,
            },
        },
        plugins: {
            tooltip: {
                padding: 8,
                backgroundColor: "#181A20",
                titleColor: "rgb(255, 255, 255, 1)",
                bodyFont: {
                    weight: "bold",
                },
                displayColors: false,
                callbacks: {
                    title: (context) => `${names[context[0].dataIndex]}`,
                    label: (context) => `winrates ${winrates[context.dataIndex]}%`,
                    labelTextColor: (context) => setColor(winrates[context.dataIndex]),
                },
            },
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
        },
    }

    return (
        <div className="info">
            <div>
                <img src={props.image} alt={props.name} />
                <p>{props.name}</p>
            </div>
            <div className="chart">
                <Line options={options} data={data} />
            </div>
        </div>
    )
}

const setGradient = (value1, value2, color1, color2, context) => {
    const { ctx, chartArea } = context.chart
    if (!chartArea) {
        return null
    }
    const gradient = ctx.createLinearGradient(0, 0, 0, chartArea.bottom)
    gradient.addColorStop(value1, color1)
    gradient.addColorStop(value2, color2)
    return gradient
}

const setColor = (num) => {
    if (num > 50) {
        return "rgb(22, 229, 180, 1)"
    } else if (num < 50) {
        return "rgb(255, 70, 85,1)"
    } else {
        return "rgb(105, 211, 234,1)"
    }
}
