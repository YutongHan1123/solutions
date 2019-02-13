# Warmup Exercise: SVG

## Objectives

- create SVG shapes
- use CSS properties to style SVG shapes


## Resources

- [Mozilla Developers Network: SVG](https://developer.mozilla.org/en-US/docs/Web/SVG)


## Instructions

This directory includes the following files:

- README.md (this file)
- assets
  - circles.png
  - lines.png
  - rectangles.png
- css
  - style.css
- index.html

Build these pages *without* the aid of graphical user interface software (i.e. Dreamweaver, Sketch, etc.) or frameworks.

As you code, you may reference the images in the `assets` folder to see if you are doing things correctly. (Your solution for `lines.png` may vary.)

**Never copy and paste code; always type it in by hand.**


## Tasks

1. Review the HTML. Is anything broken? Does the code [validate](http://validator.w3.org/)? (This should *always* be your first step).

2. In `style.css`, add rules which change the background to `#eee` and place a 1 pixel, solid, dark gray (`#222`) border around every `svg` element. This will help you visualize the area which will contain the shapes.

3. Add the first `svg` tag below the "Rectangle & Square" heading. Include the `width` attribute, setting it to 600, and a `height` attribute, setting it to 300.

4. Inside the `svg` you just created, add a rectangle with the following properties: 20 pixels from the top, 20 pixels from the left, a width of 200 pixels and a height of 100 pixels.

5. Add a square to the first `svg` with the following properties: a width and height of 50 pixels, 120 pixels from the bottom and 20 pixels from the right.

6. In `style.css`, style the rectangle to be transparent and have a 2 pixel, solid, blue outline. Next, style the square to be white and have a 3 pixel, dotted, red outline. You may have to adjust the HTML to differentiate the rectangle from the square.

7. Add the second `svg` tag below the "Circles" heading. Use an inline `style` attribute to set the width and height to 600 pixels and 300 pixels, respectively.

8. Draw two circles. The center of both should be vertically centered in the `svg`. The center of the first circle should horizontally align with the first third of the `svg`; the center of the second circle should horizontally align with the second third. Both circles should have a radius of 50 pixels.

9. Style the circles in `style.css` to be orange with half opacity. (There are actually two ways to do this!)

10. Add the third `svg` below the "Lines" heading. In `style.css`, set the dimensions to have a width of 600 pixels and height of 200 pixels. Do not add any attributes to this svg. If done properly, this will change the dimensions of the first svg. What does this tell you about styles vs. HTML attributes?

11. Draw a triangle. There are two properties which will let you do this -- one has you do it the 'easy' way, one the 'hard' way. In `style.css` be sure to style the `stroke` property for these tags, otherwise the shape will not appear! When you complete a triangle using one technique, try creating another with the other. Why would you chose one approach over the other?


## How to tackle this exercise

**Read the task.**

Decide what you need to do, one step at a time.

Write down the task to be completed. When you finish, check it off.

Decide on the next task to tackle.

It is okay if you get stuck. Set aside the task giving you trouble, decide on another and move on. Be sure you have written down the task giving you trouble (so you can revisit it later or ask questions).

**Good luck!**
