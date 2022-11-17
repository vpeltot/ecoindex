let quantilesDom = [0, 47, 75, 159, 233, 298, 358, 417, 476, 537, 603, 674, 753, 843, 949, 1076, 1237, 1459, 1801, 2479, 594601];
let quantilesReq = [0, 2, 15, 25, 34, 42, 49, 56, 63, 70, 78, 86, 95, 105, 117, 130, 147, 170, 205, 281, 3920];
let quantilesSize = [0, 1.37, 144.7, 319.53, 479.46, 631.97, 783.38, 937.91, 1098.62, 1265.47, 1448.32, 1648.27, 1876.08, 2142.06, 2465.37, 2866.31, 3401.59, 4155.73, 5400.08, 8037.54, 223212.26];

function computeEcoIndex(dom, req, size) {
    const quantileDom = computeQuantile(quantilesDom, dom);
    const quantileReq = computeQuantile(quantilesReq, req);
    const quantileSize = computeQuantile(quantilesSize, size);
    return 100 - 5 * (3 * quantileDom + 2 * quantileReq + quantileSize) / 6;
}

function computeQuantile(quantiles, value) {
    for (let i = 1; i < quantiles.length; i++) {
        if (value < quantiles[i]) return (i - 1 + (value - quantiles[i - 1]) / (quantiles[i] - quantiles[i - 1]));
    }
    return quantiles.length - 1;
}

function getEcoIndexGrade(ecoIndex) {
    if (ecoIndex > 80) return "A";
    if (ecoIndex > 70) return "B";
    if (ecoIndex > 55) return "C";
    if (ecoIndex > 40) return "D";
    if (ecoIndex > 25) return "E";
    if (ecoIndex > 10) return "F";
    return "G";
}

function computeGreenhouseGasesEmissionfromEcoIndex(ecoIndex) {
    return (2 + 2 * (50 - ecoIndex) / 100).toFixed(2);
}

function computeWaterConsumptionfromEcoIndex(ecoIndex) {
    return (3 + 3 * (50 - ecoIndex) / 100).toFixed(2);
}

module.exports = {
    computeEcoIndex,
    getEcoIndexGrade,
    computeGreenhouseGasesEmissionfromEcoIndex,
    computeWaterConsumptionfromEcoIndex
}