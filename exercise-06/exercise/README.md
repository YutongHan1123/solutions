# Warmup Exercise: d3 SVG & Visualizations

## Objectives

- Draw SVG with d3
- Draw a bar chart with d3
- Draw a scatterplot with d3


## Resources

- [D3.js - Data Driven Documents](https://d3js.org/)
- [D3 API Reference](https://github.com/d3/d3/blob/master/API.md)


## Instructions

This directory includes the following files:

- README.md (this file)
- a-d3-svg
  - css
    - style.css
  - d3svg.html
- b-d3-barchart
  - data
    - yankees.csv
  - d3barchart.html
- c-d3-scatterplot
  - data
    - yankees.csv
    - d3scatterplot.html

Build these pages *without* the aid of graphical user interface software (i.e. Dreamweaver, Sketch, etc.) or frameworks.

**Never copy and paste code; always type it in by hand.**


## Tasks

There are three separate exercises in this folder. These are independent of one another.

All exercises will use the [d3.js](https://d3js.org/) library. Make sure to create a separate directory for each exercise to hold the d3 library, which you are to download from the web site.

We will be doing this for now to start getting used to downloading the library and using the local file for our projects.

Make sure to make the call to the d3 library before you start calling the d3 object.


### Exercise A: Draw SVG with d3

**Use only d3 for to complete this exercise.**

1. Add an `svg` to `div#square`, below the "Rectangle & Square" heading. Include the `width` attribute, setting it to 600, and a `height` attribute, setting it to 800.

2. Inside the `svg`, add a rectangle with the following properties: 20 pixels from the top, 20 pixels from the left, a width of 200 pixels and a height of 100 pixels.

3. Add a square to the `svg` with the following properties: a width and height of 50 pixels, 120 pixels from the top and 90 pixels from the right.

4. Using `style` attributes, style the rectangle to be transparent and have a 2 pixel, solid, blue outline. Next, style the square to be white and have a 3 pixel, dotted, red outline.

5. Add an `svg` to `div#circle`, below the "Circles" heading. Use the same width and height as before.

6. Draw two circles. The center of both should be vertically centered in the `svg`. The center of the first circle should horizontally align with the first third of the `svg`; the center of the second circle should horizontally align with the second third. Both circles should have a radius of 50 pixels.

7. In `style.css`, style the circles to be orange with half opacity.


### Exercise B: d3 Bar Chart

Using the `yankees.csv` in the `data` directory, create a vertical bar chart with d3. The chart should meet the following requirements:

- The chart should have a height of 100 pixels and a width of 800 pixels.

- Each bar should have a width of 30 pixels.

- The height of each should represent a player's age.

- Each bar should be separated by 2 pixels.

- The bars should be going up not down.

- Each bar should be a a solid color.

- The label for each bar should be the player's initials followed by his position (e.g. "JP-C"). Make the font small enough to fit within the bar.


### Exercise C: d3 Scatterplot

Using the `yankees.csv` in the `data` directory, create a scatterplot with d3. The chart should meet the following requirements:

- The chart should have a height of 800 pixels and a width of 1200 pixels.

- The "x-axis" should be the player's age. Give this value a multiplier of 19 (many of the ages are similar so this will space them out a bit).

- The "y-axis" should be the Weight of the player (give this a multiplier of 2).

- Fill each circle into a blue color.

- The label for each bar should be the player's initials followed by his position (e.g. "JP-C").

- Make each the text in each white and place it at the center of each circle.

**Good luck!**
