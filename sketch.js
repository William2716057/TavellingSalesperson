//creates points and randomly tests out different routes and highlights the shortest 
var cities = [];
var totalCities = 8;
var recDistance;
var best;

function setup() {
    createCanvas(700, 700);
    for (var i = 0; i < totalCities; i++) {
        var v = createVector(random(width), random(height))
        cities[i] = v;
    }
    var d = calcDistance(cities);
    calcDistance(cities);
    recordDistance = d;
    best = cities.slice();
}

function draw() {
    background(255);
    fill(0);
    for (var i = 0; i < cities.length; i++) {
        ellipse(cities[i].x, cities[i].y, 8, 8)
    }
    stroke(0);
    strokeWeight(2);
    beginShape();
    noFill();
    for (var i = 0; i < cities.length; i++) {
        vertex(cities[i].x, cities[i].y)
    }
    endShape()

    stroke(255, 0, 255);
    strokeWeight(2);
    beginShape();
    noFill();
    for (var i = 0; i < cities.length; i++) {
        vertex(best[i].x, best[i].y)
    }
    endShape()


    var i = floor(random(cities.length));
    var j = floor(random(cities.length));
    swap(cities, i, j)

    var d = calcDistance(cities);
    if (d < recordDistance) {
        recordDistance = d;
        best = cities.slice();
        console.log(recordDistance);
    }
}
//will swap positions in array
function swap(a, i, j) {
    var temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}

//function that calculates distance between every point in array
//retuns total distance of points in order they are in 
function calcDistance(points) {
    var sum = 0;
    for (i = 0; i < points.length - 1; i++) {
        var d = dist(points[i].x, points[i].y, points[i + 1].x, points[i + 1].y);
        sum += d;
    }
    return sum;
}