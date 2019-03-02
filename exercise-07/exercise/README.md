# Exercise: d3 Scales & Axes

## Objectives

- Make a scaled scatterplot
- Make a scaled scatterplot with axes

## Resources

- [D3.js - Data Driven Documents](https://d3js.org/)
- [D3 API Reference](https://github.com/d3/d3/blob/master/API.md)

## Instructions

This directory includes the following files:

- README.md (this file)
- a-scaled-padded-plot
  - index.html
- b-axes
  - index.html
- js
  - d3.js

Build these pages *without* the aid of graphical user interface software (i.e. Dreamweaver, Sketch, etc.) or frameworks.

**Never copy and paste code; always type it in by hand.**


## Tasks

There are three separate exercises in this folder. These are independent of one another.

All exercises will use the [d3.js](https://d3js.org/) library. Use the provided `d3.js` library in the `js` directory.

Make sure to make the call to the d3 library before you start calling the d3 object.


### Exercise A: Scaled & Padded Scatterplot

1. In the file `index.html` the data is already provided for you.

2. Create an `svg` with a width of 500 and a height of 100.

3. Make a scatterplot with a padding of 20 pixels.

4. Use the data to find create dynamic scales.

  Create horizontal scale using the first set of data in the dataset `d[0]` and create the vertical scale using the second set of data in the dataset `d[1]`.

5. Add labels to each plot and make sure all labels and circles can be seen fully.


### Exercise B: Axes

1. In the file `index.html` the data is already provided for you.

2. Create an `svg` with a width of 500 and a height of 300.

3. Make a scatterplot with a padding of 30 pixels.

4. Using the data create three scales:

- `xScale` using the `x` value in each `[x,y]` pair.
- `yScale` using the `y` value in each `[x,y]` pair.
- `rScale` passing the `y` value in each `[x,y]` pair to a `scaleSqrt()` method.

5. Add labels to each plot and make sure all labels and circles can be seen fully.

6. Add the x axis. Try formatting the tick labels in different ways.

7. Add the y axis. Try formatting the tick labels in different ways.

8. Switch the y axis and make the top the lower numbers and the bottom the higher numbers.

**Good luck!**
