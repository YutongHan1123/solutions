# Warmup Exercise: JavaScript


## Objectives

- Intro to d3
- Access and manipulate the DOM
- Bind and use data


## Resources

- [D3.js - Data Driven Documents](https://d3js.org/)
- [D3 API Reference](https://github.com/d3/d3/blob/master/API.md)


## Instructions

This directory includes the following files:

- README.md (this file)
- a-selectors
  - selectors.html
- assets
  - avg_temp.csv
- b-access-data
  - access-data.html
- c-create-barchart
  - create-barchart.html

Build these pages *without* the aid of graphical user interface software (i.e. Dreamweaver, Sketch, etc.) or frameworks.

**Never copy and paste code; always type it in by hand.**


## Tasks

There are three separate exercises in this folder. These are independent of one another.

All examples will use the [d3.js](https://d3js.org/) library. Make sure to create a separate directory for each exercise to hold the d3 library.

We will be doing this for now to start getting used to downloading the library and using the local file for our projects.

Make sure to make the call to the d3 library before you start calling the d3 object.


### Exercise A: Selectors

1. Inside `selectors.html`, add a `d3` script that will add a `h2`, a `p`, a `span` and a `div` each with a different phrase.

2. Using the `style()` method to do the following: Give the `h2` text a color; change the font size of the text in `p` to 24px; make the text in `span` bold; and change the background color of the `div`.

3. Give the `div` a class and change the color of the text from a stylesheet. Be sure to place the stylesheet in a separate directory and link to it properly.


### Exercise B: Access Data

1. Inside `access-data.html`, there is an array of numbers. Bind this data to `div` tags.

2. Create an anonymous callback function in the `text()` method. Display a message in each `div` showing the number from the array and whether it is an even or an odd number.


### Exercise C: Create a Bar Chart

1. In the `assets` there is a file called `avg_temp.csv`. Copy this file into a `data` directory inside the `c-create-barchart` directory.

2. Create a script that will access the data inside `avg_temp.csv`.

3. Using `d3`, make a `div` for each row of the csv.

4. Each `div` must have the following characteristics:
  - The name of the state and the temperature must be inside the bar chart.
  - Make the background colors of the bars `steelblue`.
  - Give the width of each bar a multiplier of 5 so the bars are not too small (`var multiplier = d.Avg * 5`)
  - Give each bar a padding of `5px` at the top and bottom and `2px` at the sides.
  - Give each bar a margin of `4px` between them.
  - Make the color of the text `white`.

**Good luck!**
