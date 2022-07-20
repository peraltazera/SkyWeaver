const prisms = require("./prisms.json")

const generateValues = () => {
    for (let i = 0; i < 15; i++) {
        prisms.chart[i].winrate = Math.round(Math.random() * (100 - 0) + 0)
    }
    prisms.winrate = Math.round(prisms.chart.map((e) => e.winrate).reduce((prev, current) => prev + current) / prisms.chart.length)
    const bestPrism = prisms.chart.map((e) => e.winrate).reduce((prev, current) => (prev < current ? current : prev))
    const worstPrism = prisms.chart.map((e) => e.winrate).reduce((prev, current) => (prev > current ? current : prev))
    prisms.bestPrism = prisms.chart.filter((e) => e.winrate === bestPrism).map((e) => e.imageUrl)[0]
    prisms.worstPrism = prisms.chart.filter((e) => e.winrate === worstPrism).map((e) => e.imageUrl)[0]
    return prisms
}

export default generateValues
