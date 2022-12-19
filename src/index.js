const Plotly = require('plotly.js-dist');


function initializePloty() {
    const container = document.getElementById('plotly-demo');

    Plotly.newPlot( container, [{
        x: [1, 2, 3, 4, 5],
        y: [1, 2, 4, 8, 16] }], {
        margin: { t: 0 } } );   
}

initializePloty();