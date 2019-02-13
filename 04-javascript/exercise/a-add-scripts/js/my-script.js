/* my-script.js */

/*
  PAY NO ATTENTION TO THE CODE INSIDE THIS SCRIPT!

  You don't need to know how this works. You just have to make sure
  the files are included correctly in add-scripts.html so the results
  appear on the page!
*/

var yourName = window.prompt("Hello! What is your name?");

var messages = ["Hello, " +`${yourName}!`, "How are you today?", "Do you like JavaScript?"]

d3.select("body")
  .selectAll("p")
  .data(messages)
  .enter()
  .append("p")
  .html((d) => d);
