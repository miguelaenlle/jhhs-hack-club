In this workshop, you’ll use APIs to build an **Ice Cream Finder** 🍨

*Sample Project:*

![Screen Shot 2022-11-27 at 10.56.04 AM.png](/images/Screen_Shot_2022-11-27_at_10.56.04_AM.png)

[*Final Project Demo*](https://Completed-Stuff-Finder.miguelaenlle1.repl.co)

## Timing/ work time



🕜 This workshop should take 1 hour

🔨 From there, you’ll have til Meetup 14 (2 meetups after 12/2) to customize. All will be posted to the showcase.

💻 It is highly recommended to finish the [personal portfolio website](https://workshops.hackclub.com/personal_website/) before doing this workshop (unless you’ve done basic HTML/CSS before)

## Part I: Setup 💻



***First*** start by retrieving the starter code:

Go to [https://replit.com/@MiguelAenlle1/Stuff-Finder?v=1](https://replit.com/@MiguelAenlle1/Stuff-Finder?v=1), then click “Fork Repl”:

![Screen Shot 2022-11-27 at 11.09.31 AM.png](/images/Screen_Shot_2022-11-27_at_11.09.31_AM.png)

Name the repl whatever you’d like and hit “Fork Repl”. This will bring you to the HTML/CSS editor:

![Screen Shot 2022-11-27 at 11.16.50 AM.png](/images/Screen_Shot_2022-11-27_at_11.16.50_AM.png)

You’re now ready to start building the **Ice Cream Finder** website!

*👋 Feeling lost? No worries. Remember that Alex and Miguel can help at any time, just call us over and we’ll explain and walk through anything you need!* 

## Part II: The HTML File 🧑‍💻



On the line after `<!-- YOUR CODE GOES HERE -->`, add an `h1` and `p` tag to serve as the title and description of your website:

```html
<body>
	<div>
		<h1>Ice Cream Finder</h1>
	  <p>The best ice cream!</p>
	</div>
	...
</body>
```

Under the `p` tag, we’ll then create a “results” `div` to put all of our found ice cream stores into. 

Adding `id="results"` makes the code more readable and will be helpful in **Part 4** 👀

Each result contains an image, the name of the restaurant, and a short description:

```html
<div id="results">
	<div>
    <img src="https://i.ibb.co/ZGJwh4t/5beb41d748eb126c09037343.webp" />
		<h3>Nutella Cafe</h3>
    <p>The ultimate ice cream</p>    
  </div>
</div>
```

Here’s the image to the link for copy/paste: [https://i.ibb.co/ZGJwh4t/5beb41d748eb126c09037343.webp](https://i.ibb.co/ZGJwh4t/5beb41d748eb126c09037343.webp) 

![Screen Shot 2022-11-27 at 11.47.17 AM.png](/images/Screen_Shot_2022-11-27_at_11.47.17_AM.png)

Now, it’s time to add some CSS to make the website look awesome💯

*👋 Feeling lost? No worries. Remember that Alex and Miguel can help at any time, just call us over and we’ll explain and walk through anything you need!* 

## ***Part III: Styling** 🎨



Before editing the CSS file, to ensure CSS knows which `div` to apply its styling to, set the `class` attribute of the Nutella Cafe `div` :

```html
<div id="results">
	<div class="result">
    <img src="https://i.ibb.co/ZGJwh4t/5beb41d748eb126c09037343.webp" />
		<h3>Nutella Cafe</h3>
    <p>The ultimate ice cream</p>    
  </div>
</div>
```

Now, switch over to the `style.css` file on the left-hand side to start editing the CSS:

![Screen Shot 2022-11-27 at 11.54.54 AM.png](/images/Screen_Shot_2022-11-27_at_11.54.54_AM.png)

Let’s change up the font first. In `html, body` , add `font-family: sans-serif` to set the font of all tags within `html` and `body` tags to `sans-serif`:

```css
html, body {
  height: 100%;
  width: 100%;
  font-family: sans-serif;
} 
```

Next, let’s add some style to the .result `div` . Under the `html, body` CSS, on the line under, add `.result` to specify the HTML for the `result` class, then:

- Set background color a light gray (#f2f2f2)
- Set padding to 10 pixels (10px) to keep the content from sticking on borders
- Set border-radius to 5 pixels (5pm) to round the edges

```css
.result {
  background-color: #f2f2f2;
  padding: 10px;
  border-radius: 5px;
}
```

![Screen Shot 2022-11-27 at 12.03.23 PM.png](/images/Screen_Shot_2022-11-27_at_12.03.23_PM.png)

*Looking better, let’s just fix that image*

Under the `.result` CSS, add `.result img {}` . This will let us edit the CSS of all `img` tags that are inside a `result` div:

```css
.result img {

}
```

In there, format the image to have a fixed `width` and `height` — `width` should take up the whole result div, and `height` should be fixed at `150px`:

```css
.result img {
	width: 100%;
  height: 150px;
}
```

![Screen Shot 2022-11-27 at 12.09.17 PM.png](/images/Screen_Shot_2022-11-27_at_12.09.17_PM.png)

*Let’s now fix the image stretching~*

Add the line `object-fit: cover` under the `height` CSS to fix the stretching. `object-fit` describes how objects should be resized within their containers. If you’re interested in learning more, check out [this playground by Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit) that explains `object-fit` more:

```css
.result img {
  width: 100%;
  height: 150px;
  object-fit: cover;
}
```

![Screen Shot 2022-11-27 at 12.15.06 PM.png](/images/Screen_Shot_2022-11-27_at_12.15.06_PM.png)

*Awesome! The website styling is now complete!* 🖌️

## Part IV: Connecting to an API 🚀



&rarr;  ************But, first, what’s an API?************

An API is an **Application Programming Interface.** Programmers use APIs to integrate someone else’s program with their own code. 

Although an API can do many things, its most standard use it to fetch information (data) from an outside source. 

&rarr;  ******************************************Why is an API useful?******************************************

Imagine you want to create a list of **every single coffee shop** in Chicago. Unless you have superpowers, you don’t have information about each of them memorized. However, you know that **Google**, **Apple**, or another maps application likely has all of those shops in their own database already. 🍵

So, you can use this to your advantage by using the APIs that many of these companies, or other developers offer! 🌎

&rarr;  ****************************************************************************************Time to finally connect our ice cream finder****************************************************************************************

Let’s set our **goal** before starting to write code - we want to…

- Learn how to talk with an API
- Get information about local ice cream places from the API
- Be able to display a box with the **name**, **description**, and **photo** of each ice cream place

…

Since we now know that we can “**fetch**” or get data from an API, we need to know how to **write the code that does it**

Make sure you are on the `script.js` through the tab switcher on the left-hand side. Since we are affecting the behavior of the page now, we must use JavaScript:

![Screenshot 2022-11-27 at 6.59.13 PM.png](/images/Screenshot_2022-11-27_at_6.59.13_PM.png)

Let’s start off by writing an empty function called **findIceCream.** This function will contain all the code that calls the API, and displays it to the screen:

```jsx
function findIceCream() {

}
```

Inside of our function, we will begin by storing the link to our API in a variable

- The **link** to our API is https://ig-food-menus.herokuapp.com/ice-cream

```jsx
const url = `https://ig-food-menus.herokuapp.com/ice-cream`;
```

JavaScript has a built in `fetch` method for accessing APIs. In our program, we want to `fetch` this API - we can do this using this line of code (inside the function):

```jsx
function findIceCream() {
	const url = `https://ig-food-menus.herokuapp.com/ice-cream`;
	fetch(url)
}
```

Right now, if we were to console.log `fetch(url)` , it would output an array with **27 objects**, **each representing an Ice Cream store:**

![Screenshot 2022-11-27 at 9.02.53 PM.png](/images/Screenshot_2022-11-27_at_9.02.53_PM.png)

E*ssentially, **each store** has it’s own **image**, **name**, **description** & some other small data*

For example, the **first object in the array** (array[0]) has the **description** *Ice Cream - Choose Your Own 6 Pints* and the **name** *Graeter’s Ice Cream*:

![Screenshot 2022-11-27 at 9.09.51 PM.png](/images/Screenshot_2022-11-27_at_9.09.51_PM.png)

For our code to be able to work with the data, we need to turn the data into a .json format (JavaScript Object Notation). The **data** the **fetch** responds with is called the “**response**”. We transform the response into a **.json** format using the **.json() method** that is already built into JavaScript:

```jsx
function findIceCream() {
	const url = `https://ig-food-menus.herokuapp.com/ice-cream`;
	fetch(url)
		.then(response => response.json())
}
```

&rarr;  ******************************************************************Showing our API on the big screen******************************************************************⭐

Now that our code has the ability to work with this data - let’s look back at our goals for a second.

- We need to turn **EACH** *Ice Cream Store* into a box on our page, that looks **something like this**:
    
    ![Screenshot 2022-11-27 at 9.16.37 PM.png](/images/Screenshot_2022-11-27_at_9.16.37_PM.png)
    

Luckily, the **creators of JavaScript** *had already thought of this problem* and gave us the `.map()` method! The .map() method in JavaScript **allows us to apply an action** (function) **to every single item in an array, and then RETURN a NEW array, with each item modified.**

**EXAMPLE using the .map() method:** 

```jsx
const array1 = [1, 4, 9, 16];

const map1 = array1.map(x => x * 2);

console.log(map1);
// output: Array [2, 8, 18, 32]
```

… 

As you can see, the map method applied `x = x * 2` to every single item in the array. This is **perfect** for us here, since our goal is to put **EACH** object from the API into its **OWN** box. Since .map() applies a function to each item, we need to create a function that will turn each object into a segment of HTML. We can store this function outside of the `findIceCream()` function.

…

Let’s call it `createIceCreamStoreDiv`:

```jsx
function createIceCreamStoreDiv() {

}
```

Since each ice cream store object will be **passed into this function one by one** when we use `.map()` , we need to add iceCreamStoreData as a parameter:

```jsx
function createIceCreamStoreDiv(iceCreamStoreData) {
	
}
```

It’s important that your **HTML** is back to this **basic template** (since we will no longer have to type out each cell on its own)

- To find this code, head back to your `index.html` file using the navigator on the left side of your replit tab

```jsx
<body>

  <h1>
    Ice Cream Finder 🍨
  </h1>
  <p>Best ice cream!</p>

  <script src="script.js"></script>
</body>
```

Make sure to add a **`<div id=“results"></div>`:**

- This is the element in which we will put each cell that the `.map()` method generates

```jsx
<body>

  <h1>
    Ice Cream Finder 🍨
  </h1>
  <p>Best ice cream!</p>

	<div id="results"></div>

  <script src="script.js"></script>
</body>
```

*Now heading back to our `script.js` file*

Each time the function is called we want it to **return** a **“result”.** We can use similar code to that when we individually displayed a single result in the early parts of this workshop:

*Don’t write this code yet, keep reading below - this code will end up going into your JavaScript*

```jsx

    <div class="result">
      <img 
        src="${iceCreamStoreData.img}" 
        onerror="this.src='${fallbackImageUrl}'"
      />
      <h3>${iceCreamStoreData.name}</h3>
      <p>${iceCreamStoreData.dsc}</p>
    </div>
```

However, instead of using a specific URL or a specific Name or Description - **we will use the name that is stored in the object that we just passed in as a parameter:**

- To access the properties of each of these objects, we simply write the name of the object: **`iceCreamStoreData` -** and then we add the name of the property we want to access
- For example, to access the name of the current object passed in (each object will be passed in my the `.map()` method)
    - `iceCreamStoreData.name`

&rarr;  **Quick Review**

- In order to display **variables inside of strings** in JavaScript, we need to use **special notation**
- **Backticks** **`` ``** instead of quotations `“ “`and `${**variableName**}` for each variable in the String.

Now, we must **RETURN** this code inside of backticks in our function (remember, we want a `div` for each store) :

```jsx
function createIceCreamStoreDiv(iceCreamStoreData) {
  return `
    <div class="result">
      <img 
        src="${iceCreamStoreData.img}" 
        onerror="this.src='${fallbackImageUrl}'"
      />
      <h3>${iceCreamStoreData.name}</h3>
      <p>${iceCreamStoreData.dsc}</p>
    </div>
  `
}
```

**Important:** you may have noticed that there is a **`onerror` attribute added to the image**

- *Sometimes*, due to **many reasons**, an image *may not load correctly* - even if your code **requests** it correctly (*not your fault!*)
- We can **ensure** that the images **aren’t left blank** by adding a **stock image of ice cream** to our code

At the top of our code, outside of the function we can add this code:

- This code will only activate if there is an error (`onerror`), the error being that there was no image

```jsx
const fallbackImageUrl = "https://thekitchencommunity.org/wp-content/uploads/2021/11/Ice-Cream-Flavors.jpg";
```

Now our javascript should look something like this:

```jsx
function createIceCreamStoreDiv(iceCreamStoreData) {
  return `
    <div class="result">
      <img 
        src="${iceCreamStoreData.img}" 
        onerror="this.src='${fallbackImageUrl}'"
      />
      <h3>${iceCreamStoreData.name}</h3>
      <p>${iceCreamStoreData.dsc}</p>
    </div>
  `
}
function findIceCream() {
  const url = `https://ig-food-menus.herokuapp.com/ice-cream`;
  fetch(url)
    .then(response => response.json())
}
```

…

Since we want to a**dd all of the elements to our HTML** after creating them in our javascript, **the simplest way is to add all of our newly created `<div>` elements after one another in a string**

…

First, let’s **create a string to store our map function’s results** (the divs) joined together:

*you may have to scroll to see the full line*

```jsx
function createIceCreamStoreDiv(iceCreamStoreData) {
  return `
    <div class="result">
      <img 
        src="${iceCreamStoreData.img}" 
        onerror="this.src='${fallbackImageUrl}'"
      />
      <h3>${iceCreamStoreData.name}</h3>
      <p>${iceCreamStoreData.dsc}</p>
    </div>
  `
}
function findIceCream() {
  const url = `https://ig-food-menus.herokuapp.com/ice-cream`;
  fetch(url)
    .then(response => response.json())
		.then(iceCreamStores => {
			const iceCreamStoresString = iceCreamStores.map(
			iceCreamStore => createIceCreamStoreDiv(iceCreamStore)
	}
}
```

***Review**: `.map()` can be applied to any array, and it will return a new array after applying a certain function to each item in the array*

```jsx
iceCreamStores.map(
	iceCreamStore => createIceCreamStoreDiv(iceCreamStore)
)
```

- Therefore, to explain the code segment seen above, we are applying the “**`createIceCreamStoreDiv()`**” function to **EACH object that we have received** from the API.
    - We give this array of objects the name **`iceCreamStores`** and ***each*** **object** the name **`iceCreamStore`**

**`.map()` returns a new ARRAY** - let’s make sure that this is being correctly put into a String by turning the array into a string

- The javascript function `.join()` does this for us already
- To join each with a space: `join(” “);`

```jsx
function findIceCream() {
  const url = `https://ig-food-menus.herokuapp.com/ice-cream`;
  fetch(url)
    .then(response => response.json())
		.then(iceCreamStores => {
			const iceCreamStoresString = iceCreamStores.map(
			iceCreamStore => createIceCreamStoreDiv(iceCreamStore)
			).join(" ");
	}
}
```

**Let’s make sure that we write code that adds this String (with all of the new divs in it) to our HTML:**

```jsx
const iceCreamStoreDiv = document.getElementById("results")
```

```jsx
iceCreamStoreDiv.innerHTML = iceCreamStoresString;
```

…

This code **identifies this div that we added** earlier (to store all the cells we create), and **adds the String we created** (with all of the divs in it) to the code using `.innerHTML`. Once this string is added to the HTML it will not longer be a String, but be a chunk of HTML code:

![Screenshot 2022-11-27 at 10.37.11 PM.png](/images/Screenshot_2022-11-27_at_10.37.11_PM.png)

Last but not least, let’s make sure that `findIceCream()` **function is actually called** - it needs to be called since **it includes the calls to our other functions**, and all of our logic inside of it! You can write this at the bottom of your JavaScript: 

```jsx
findIceCream();
```

Now, our page should look like **this** (*you can **scroll** to see all the stores the API returned)*

![Screenshot 2022-11-27 at 10.21.50 PM.png](/images/Screenshot_2022-11-27_at_10.21.50_PM.png)

**And your final code should look like this:**

```jsx
const fallbackImageUrl = "https://thekitchencommunity.org/wp-content/uploads/2021/11/Ice-Cream-Flavors.jpg";

function createIceCreamStoreDiv(iceCreamStoreData) {
  return `
    <div class="result">
      <img 
        src="${iceCreamStoreData.img}" 
        onerror="this.src='${fallbackImageUrl}'"
      />
      <h3>${iceCreamStoreData.name}</h3>
      <p>${iceCreamStoreData.dsc}</p>
    </div>
  `
}
const iceCreamStoreDiv = document.getElementById("results");

function findIceCream() {
  const url = `https://ig-food-menus.herokuapp.com/ice-cream`;
  console.log(fetch(url));
  fetch(url)
    .then(response => response.json())
    .then(iceCreamStores => {
      const iceCreamStoresString = iceCreamStores.map(
        iceCreamStore => createIceCreamStoreDiv(iceCreamStore)
      ).join(" ");
      iceCreamStoreDiv.innerHTML = iceCreamStoresString;
      console.log(iceCreamStores);
    })
}

findIceCream();
```

**Congratulations,** you did a great job - now you know how to fetch data from an API, use the `.map()` method, on the response, and display it to the screen! 

 *👋 Feeling lost? No worries. Remember that Alex and Miguel can help at any time, just call us over and we’ll explain and walk through anything you need!* 

## Part V: Hacking🔨

In this section, your challenge is to make the Stuff Finder find any item of your choice and customize it to your liking!

### 💡 **************************************************************************Find something other than ice cream!**************************************************************************

*************Instant setup*************

- Find [other types of restaurants](https://ig-food-menus.herokuapp.com/)!
- Find [universities](http://universities.hipolabs.com/search?country=United+States)!
- Find [Divvy Bikes](https://data.cityofchicago.org/resource/aavc-b2wj.json)!

- Find [crypto prices](https://api2.binance.com/api/v3/ticker/24hr)!
- Find [top Reddit posts](https://www.reddit.com/r/popular/top.json?limit=10&t=year)!

- Find [Pokemon](https://pokeapi.co/)!
- Find [Star Wars](https://swapi.dev/) planets, characters, etc!

***********Create a free account to get started w/ these***********

- Find [stocks](https://site.financialmodelingprep.com/)!
- Find [GPUs/PC parts](https://developer.bestbuy.com/)!

### 🎨 ********************************************************Change up your site’s theme********************************************************

Google is the best source of inspiration, like always! Take inspiration from other sites and use ideas/features from those sites in yours!

More inspiration:

- [Yelp](https://www.yelp.com/search?find_desc=ice+cream&find_loc=Chicago%2C+IL)
- [Pokedex](https://www.pokemon.com/us/pokedex/)
- [Singapore Taxi Tracker](https://taxirouter.sg/)
- [Yahoo Finance](https://finance.yahoo.com/screener/predefined/undervalued_growth_stocks/)

### ℹ️ Display more info for your stuff!

Adapt your site to the data your API provides & display it in the best format possible!



## Part VI: Sharing with Hersey Hack Club

Now that you’ve finished the workshop, submit your stuff finder by filling out this Typeform!

[https://1htona3vpjh.typeform.com/to/fuR1LL5n](https://1htona3vpjh.typeform.com/to/fuR1LL5n)

---

*Made with ❤️ by JHHS Hack Club Staff Team*