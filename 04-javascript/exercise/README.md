# Warmup Exercise: JavaScript


## Objectives

- demonstrate ability to add scripts to HTML
- work with JavaScript syntax
- write loops to iterate over data


## Resources

- [Mozilla Developers Network: JavaScript](https://developer.mozilla.org/en-US/docs/Web/javascript)
- [Mozilla Developers Network: JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)


## Instructions

This directory includes the following files:

- README.md (this file)
- assets
  - a-add-scripts.png
  - b-loops.png
- a-add-scripts
  - js
    - vendor
      - d3.min.js
    - my-script.js
  - add-scripts.html
- b-loops
- c-debug

Build these pages *without* the aid of graphical user interface software (i.e. Dreamweaver, Sketch, etc.) or frameworks.

As you code, you may reference the images in the `assets` folder to see if you are doing things correctly. (Your solution for `lines.png` may vary.)

**Never copy and paste code; always type it in by hand.**


## Tasks

There are three separate exercises in this folder. These are independent of one another.


### Exercise A: Add Scripts

1. Inside `add-scripts.html`, add the `d3` library (`d3.min.js`). Scripts should be added at the end of the body, just before the `</body>` tag.

2. Add the `my-scripts.js` file below the `script` tag you just created.

3. View the web page in a browser. You should be prompted to enter your name. Does it work? Does the browser display text on screen?

4. Below the `script` tag containing `my-script.js`, add another set of `script` tags. This time, we will include our code between them, not via an external source. Copy (*type!* — do not copy/paste) the following between the `script` tags:

```javascript
// 1. Ask a yes or no question.

var pEl = document.createElement("p");
var response = "";

// 2. Add an if statement which provides a result based on the user's answer.

var pText = document.createTextNode(response)
document.body.appendChild(pText);
```

5. Let's fill in the details. Do not change any other parts of the code.

  For comment No. 1, create a new variable, `codeQuestion`. Assign this variable to to store the response from the Window Object Model's `confirm` method. Ask the user, "Do you like JavaScript?"

  (`confirm` is similar to the `prompt` method used in the `my-scripts.js` file. [Read about `confirm` on MDN.](https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm))

6. For comment No. 2, add an `if-else` statement which tests the value stored in `codeQuestion`. If the user agrees, set the `response` variable to say "Wonderful! JavaScript is fun!" Otherwise, set the `response` variable to say "JavaScript is weird, isn't it?"

  Refer to the example in `assets` to see if your version of this exercise matches! (Though the last sentence may be different if you told the browser you like JavaScript.)


### Exercise B: Loops

1. Inside `loops.html`, there is an array of cats. We want to use this list to populate the `ul` tag on line 14. Add a (traditional) `for` loop which iterates over the `cats` array and displays each name in a list item (`li`).

  Use the following code to build each element and add it to the list. Note on the second line (`var itemText = document.createTextNode( /* your code */ );`) there is a comment. Update this with the correct variable to display the text of the given array item.

```javascript
var listItem = document.createElement("li");
var itemText = document.createTextNode( /* your code! */ );
listItem.appendChild(itemText);
document.querySelector("ul").appendChild(listItem);
```

2. Comment out the (presumably working) loop you just wrote. Re-write the loop using only the `forEach` method demonstrated in class. Use an anonymous function as the argument.

3. Modify the `forEach` loop in the last step so it uses an arrow function as the anonymous funcion.


### Exercise C: Debugging

This is what happens when you let cats code. 😉😸😸

Look over the code and find syntax errors. You are not to add anything new to the script -- it will work fine when the errors are corrected. Just fix what is causing the script to break. Use the JavaScript Console to help track down errors.

When the mistakes are caught the script will produce the output shown in the `c-debugging.png` image in `assets.`

**Good luck!**
