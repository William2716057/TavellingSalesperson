# TavellingSalesperson

This is a simple implementation of the Traveling Salesman Problem (TSP) solver using a brute-force approach in JavaScript. 
The TSP is a classic optimization problem in which the goal is to find the shortest possible route that visits all given cities exactly once and returns to the starting city.

## How It Works

The code uses a brute-force approach with random route generation and optimization.

1. An initial set of points is randomly generated. The number of cities to generate is defined by the `totalCities` variable (default is 8).
2. The `calcDistance()` function calculates the total distance of a given route. It iterates through each city and calculates the distance between consecutive cities.
3. The initial route is stored as `best`, and its total distance is stored as `recordDistance`.
4. The `draw()` function displays the cities as small ellipses and draws the route based on the current `cities` array.
5. In each iteration of `draw()`, two random cities are swapped in the `cities` array, and the new total distance is calculated.
6. If the new distance is shorter than the current `recordDistance`, the new route becomes the `best` route, and the `recordDistance` is updated.
7. The process of swapping cities and optimizing the route continues until the user stops the program or a satisfactory solution is found.

## Usage

To run this program, simply open the `index.html` file in a web browser. The canvas will display the randomly generated cities and the current best route. The program will continuously swap cities and update the route until a better solution is found.

## Dependencies

The code uses the p5.js library for drawing and basic functionality.

## Limitations

The brute-force approach used in this implementation becomes inefficient for larger numbers of cities due to the exponential growth of possible routes to explore. 
It is recommended to use this implementation for small instances of the TSP to visualize the concept and explore possible solutions. 


## Acknowledgments

The idea and initial implementation are inspired by various TSP solver examples available online.
