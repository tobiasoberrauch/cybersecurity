var nodes = [
    { "x": 300, "y": 350, "r": 250, "label": "Artifical Intelligence", "color": "rgb(62, 40, 214)" },
    { "x": 300, "y": 400, "r": 200, "label": "Machine Learning", "color": "rgb(146, 125, 214)" },
    { "x": 300, "y": 450, "r": 150, "label": "Supervised", "color": "rgb(183, 168, 228)" },
    { "x": 300, "y": 500, "r": 100, "label": "Deep learning", "color": "rgb(219, 212, 241)" },
]


var width = 960,
    height = 800;

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)

var elem = svg.selectAll("g myCircleText")
    .data(nodes)

/*Create and place the "blocks" containing the circle and the text */
var elemEnter = elem.enter()
    .append("g")
    .attr("transform", function (d) { return "translate(" + d.x + ", " + d.y + ")" })

/*Create the circle for each block */
var circle = elemEnter.append("circle")
    .attr("r", function (d) { return d.r })
    .attr("fill", function (d) { return d.color })

/* Create the text for each block */
elemEnter.append("text")
    .attr("dx", function (d) { return -d.r / 2 })
    .attr("dy", function (d) { return -d.r / 2 })
    .text(function (d) { return d.label })