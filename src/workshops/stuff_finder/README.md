# Stuff Finder

In this workshop, you’ll first build an ********************************Ice Cream Finder******************************** 🍨 with APIs, then you’ll be able to hack it to find *anything you’d like*!

*********************************What the final product looks like:*********************************

![Screen_Shot_2022-11-27_at_10.56.04_AM.png](/images//Screen_Shot_2022-11-27_at_10.56.04_AM.png)

[*Final Project Demo*](https://Completed-Stuff-Finder.miguelaenlle1.repl.co)

### Timing/ work time



🕜  This workshop should take 1 hour to complete

🔨 After that, you’ll have til Meetup 14 (3 meetups from now) to customize the site you build

💻  *Basic HTML/CSS* is needed to do this workshop, but we also have an ultra-beginner friendly version **here** which requires *zero coding experience*!

## Part I: Setup 💻



Let’s start by retrieving the starter code!

Go to [https://replit.com/@MiguelAenlle1/Stuff-Finder?v=1](https://replit.com/@MiguelAenlle1/Stuff-Finder?v=1), then click “Fork Repl”:

![Screen Shot 2022-11-27 at 11.09.31 AM.png](/images//Screen_Shot_2022-11-27_at_11.09.31_AM.png)

Name the repl whatever you’d like and hit “Fork Repl”. This will bring you to the HTML/CSS editor:

![Screen Shot 2022-11-27 at 11.16.50 AM.png](/images//Screen_Shot_2022-11-27_at_11.16.50_AM.png)

You’re now ready to start building the **********************************Ice Cream Finder********************************** website!

*👋 Feeling lost? No worries. Remember that Alex and Miguel can help at any time, just call us over and we’ll explain and walk through anything you need!* 

## Part II: The HTML File 🧑‍💻



On the line after `<!-- YOUR CODE GOES HERE -->`, add an `h1` and `p` tag to serve as the title and description of your website:

```html
<body>
	<!-- YOUR CODE GOES HERE -->
	<div>
		<h1>Ice Cream Finder</h1>
	  <p>The best ice cream!</p>
	</div>
	...
</body>
```

Underneath the `div`, create another `div` to put all of our found ice cream stores into. 

Add `id="results"` to this `div` to make your code easier to read and for *stuff coming up in part 4 👀*

```html
<body>
  <!-- YOUR CODE GOES HERE -->
  <div>
    <h1>Ice Cream Finder</h1>
    <p>The best ice cream!</p>
  </div>

  <div id="results">

  </div>
</body>
```

Then, inside `<div id="results">`, we'll make a single result `div`. In it, there will be:

- An `<img>` tag: an image of the cafe
- A `<h3>` tag: the cafe's name
- A `<p>` tag: basic info about the cafe

************************************************************************************************************************************Copy and paste the image URL, but don’t copy and paste the code************************************************************************************************************************************

Here’s the URL for the image of the `<img>` tag: [https://i.ibb.co/ZGJwh4t/5beb41d748eb126c09037343.webp](https://i.ibb.co/ZGJwh4t/5beb41d748eb126c09037343.webp) 

```html
<div>
  <!-- YOUR CODE GOES HERE -->
  <div>
    ...
  </div>
  <div id="results">
    <div>
      <!-- An image of the cafe -->
      <img src="[https://i.ibb.co/ZGJwh4t/5beb41d748eb126c09037343.webp](https://i.ibb.co/ZGJwh4t/5beb41d748eb126c09037343.webp)" /> 
      <!-- Cafe's name -->
      <h3>Nutella Cafe</h3>
      <!-- Description of the cafe -->
      <p>The ultimate ice cream</p>    
    </div>
  </div>
</div>
```

![Screen Shot 2022-11-27 at 11.47.17 AM.png](/images//Screen_Shot_2022-11-27_at_11.47.17_AM.png)

Now, it’s time to add some CSS to make the website look epic. But before that:
<br/>

### ***********************Hack Break***********************

For 2-3 minutes, play with the code a little!

- Change the name of the store
- Change the description
- Google an image & change it to that!

*Happy hacking!*
<br/>

---

*👋  Need help adding a feature, fixing errors, or on anything else? Alex and Miguel can help at any time, just call us over and we’ll help with anything you need!* 

## ****************Part III: Styling**************** 🎨



Before editing the CSS file, to ensure CSS knows which `div` to apply its styling to, set the `class` attribute of the Nutella Cafe `div` :

```html
<div id="results">
	<!-- Change the line below -->
	<div class="result">
    <img src="https://i.ibb.co/ZGJwh4t/5beb41d748eb126c09037343.webp" />
		<h3>Nutella Cafe</h3>
    <p>The ultimate ice cream</p>    
  </div>
</div>
```

Now, switch over to the `style.css` file on the left-hand side to start editing the CSS:

![Screen Shot 2022-11-27 at 11.54.54 AM.png](/images//Screen_Shot_2022-11-27_at_11.54.54_AM.png)

Let’s change up the font first. In `html, body` , add `font-family: sans-serif` to set the font of all tags within `html` and `body` tags to `sans-serif`:

```css
html, body {
  height: 100%;
  width: 100%;

  font-family: sans-serif;
} 
```

Next, let’s add some style to the `div` with `class="result"` . On the line under the `html, body` CSS, add `.result` to specify the HTML for the `result` class. 

```css
html, body {
	...
}

/* Right under here! */

.result {
	
}
```

In that `.result` class:

- Set background color a light gray (#f2f2f2)
- Set padding to 10 pixels (10px) to keep the content from sticking on borders
- Set border-radius to 5 pixels (5px) to round the edges

```css
.result {
  background-color: #f2f2f2;
  padding: 10px;
  border-radius: 5px;
}
```

![Screen Shot 2022-11-27 at 12.03.23 PM.png](/images//Screen_Shot_2022-11-27_at_12.03.23_PM.png)

Let’s add `border-bottom` of `5px` as well to give spacing between ice cream store results. This will be helpful when we display multiple stores:

```css
.result {
  background-color: #f2f2f2;
  padding: 10px;
  border-radius: 5px;

	border-bottom: 5px;
}
```

Getting there. Let’s now fix the image! 



Under the `.result` CSS, add `.result img {}` . This will let us edit the CSS of all `img` tags that are inside a `result` div:

```css
.result img {

}
```

In there, format the image to have a fixed `width` and `height` 

- `width` should take up the whole result div (`100%`)
- `height` should be fixed at `150px`:

```css
.result img {
	width: 100%;
  height: 150px;
}
```

![Screen Shot 2022-11-27 at 12.09.17 PM.png](/images//Screen_Shot_2022-11-27_at_12.09.17_PM.png)



Let’s do one last fix to un-stretch the image.

Add the line `object-fit: cover` under the `height` CSS to fix the stretching. 

```css
.result img {
	width: 100%;
  height: 150px;
  object-fit: cover;
}
```

![Screen Shot 2022-11-27 at 12.15.06 PM.png](/images//Screen_Shot_2022-11-27_at_12.15.06_PM.png)

Awesome! The website now looks epic! 🖌️ 

Before we move onto APIs, let‘s have a quick Hack Break.

<br/>
<br/>

### ***********************Hack Break***********************

For 2-3 minutes, play with the CSS styling a little!

- Change the background of `.result`
- Change the `object-fit` property of the image. Some values you can use:
    
    ```css
    object-fit: contain;
    object-fit: cover;
    object-fit: fill;
    object-fit: none;
    object-fit: scale-down;
    ```
    
- Change the text’s font size
- Change the text’s color with `color` attribute

*Happy hacking!*


<br/>

<br/>

*👋 Need help adding a feature, fixing errors, or on anything else? Alex and Miguel can help at any time, just call us over and we’ll help with anything you need!* 

## Part IV: Connecting to an API 🚀



—> ************But, first, what’s an API?************

An API is an **Application Programming Interface.** Programmers use APIs to integrate someone else’s program with their own code. 

Although an API can do many things, its most standard use it to fetch information (data) from an outside source. 

—> ******************************************Why is an API useful?******************************************

Imagine you want to create a list of every single coffee shop in Chicago. Unless you have superpowers, you don’t have information about each of them memorized. However, you know that **Google**, **Apple**, or another maps application likely has all of those shops in their own database already. 🍵

So, you can use this to your advantage by using the APIs that many of these companies, or other developers offer! 🌎

—> ****************************************************************************************Time to finally connect our ice cream finder****************************************************************************************

Let’s set our goal before starting to write code - we want to---

- Learn how to talk with an API
- Get information about local ice cream places from the API
- Be able to display a box with the **name**, **description**, and **photo** of each ice cream place

---

Let’s first see what the data from the Ice Cream Finder API looks like.

Click this URL to see what the data looks like:

[https://free-food-menus-api-lb7o-main-aogbnndyra-wm.a.run.app/ice-cream](https://free-food-menus-api-lb7o-main-aogbnndyra-wm.a.run.app/ice-cream) 

![Screen Shot 2022-12-01 at 7.31.31 PM.png](/images//Screen_Shot_2022-12-01_at_7.31.31_PM.png)

That’s a lot of data!

Essentially, each store has it’s own image, name, description & some other info*

For example, the first object in the array (array[0]) has the description *Ice Cream - Choose Your Own 6 Pints* and the name *Graeter’s Ice Cream*:

![Screen Shot 2022-12-01 at 7.32.19 PM.png](/images//Screen_Shot_2022-12-01_at_7.32.19_PM.png)

...

Since we now know that we can “fetch” or get data from an API, we need to know how to write the code that does it

Switch to  `script.js` using the file switcher on the left-hand side. We must use JavaScript to affect page behavior:

![Screenshot 2022-11-27 at 6.59.13 PM.png](/images//Screenshot_2022-11-27_at_6.59.13_PM.png)

Let’s start off by writing an empty function called **findIceCream.** This function will contain all the code that calls the API, and displays it to the screen:

```jsx
function findIceCream() {

}
```

Inside of our function, we will begin by storing the link to our API in a variable

The link to our API is [https://free-food-menus-api-lb7o-main-aogbnndyra-wm.a.run.app/ice-cream](https://free-food-menus-api-lb7o-main-aogbnndyra-wm.a.run.app/ice-cream)

********Copy and paste the URL, but don’t copy and paste the code********

```jsx
function findIceCream() {
	const url = "https://free-food-menus-api-lb7o-main-aogbnndyra-wm.a.run.app/ice-cream";
}
```

<br/>

JavaScript has a built in `fetch` method for accessing APIs. In our program, we want to `fetch` this API - we can do this using this line of code (inside the function):

```jsx
function findIceCream() {
	const url = `https://free-food-menus-api-lb7o-main-aogbnndyra-wm.a.run.app/ice-cream`;

	fetch(url) // add this line!
}
```

Outputting the value of `fetch(url)` right now just returns `Promise {}` :

![Screen Shot 2022-12-01 at 7.22.43 PM.png](/images//Screen_Shot_2022-12-01_at_7.22.43_PM.png)

Let’s add a few more lines of code to access all the Ice Cream Store data:

```jsx
function findIceCream() {
	const url = `https://free-food-menus-api-lb7o-main-aogbnndyra-wm.a.run.app/ice-cream`;

	fetch(url)
		.then(response => response.json())
		.then(iceCreamStores => {
			console.log(iceCreamStores);
		})
}
```

 *👋 If you need more explanation or just want to chat, Alex and Miguel can help at any time!*

To see the data, you’ll first need to open the Console (the output window).

On the top-right of the screen, click the Wrench

![Screen Shot 2022-12-01 at 7.39.10 PM.png](/images//Screen_Shot_2022-12-01_at_7.39.10_PM.png)

That opens the Console on the bottom of your screen:

![Screen Shot 2022-12-01 at 7.41.23 PM.png](/images//Screen_Shot_2022-12-01_at_7.41.23_PM.png)

If you save the file, the ice cream store list will show up in the Console:

![Screenshot 2022-11-27 at 9.02.53 PM.png](/images//Screenshot_2022-11-27_at_9.02.53_PM.png)

 



—> ******************************************************************Showing our API data on the big screen******************************************************************⭐

Now that our code has the ability to work with this data - let’s look back at our goals for a second.

- We need to turn **EACH** *Ice Cream Store* into a box on our page, that looks **something like this**:

![Screenshot 2022-11-27 at 9.16.37 PM.png](/images//Screenshot_2022-11-27_at_9.16.37_PM.png)

Luckily, the creators of JavaScript *had already thought of this problem* and gave us the `.map()` method! The .map() method in JavaScript allows us to apply an action (function) to every single item in an array, and then RETURN a NEW array, with each item modified.

**EXAMPLE using the .map() method:** 

(don’t write this code)

```jsx
const array1 = [1, 4, 9, 16];

const map1 = array1.map(x => x * 2);

console.log(map1);
// output: Array [2, 8, 18, 32]
```

--- 

As you can see, the map method applied `x = x * 2` to every single item in the array. This is perfect for us here, since our goal is to put EACH object from the API into its OWN box. Since .map() applies a function to each item, we need to create a function that will turn each object into a segment of HTML. We can store this function outside of the `findIceCream()` function.

---

Let’s call it `createIceCreamStoreDiv`:

```jsx
function createIceCreamStoreDiv() {

}

// put the function above findIceCream()

function findIceCream() {

}
```

Since each ice cream store object will be **passed into this function one by one** when we use `.map()` , we need to add `iceCreamStoreData` as a parameter:

```jsx
function createIceCreamStoreDiv(iceCreamStoreData) {
                                // add this ^
	
}
```

Let's quickly go back to the `index.html` file. Comment out the single result, since we'll be generating results **by code** rather than typing them out by hand

```jsx
<body>

  <h1>
    Ice Cream Finder 🍨
  </h1>
  <p>Best ice cream!</p>

  <div id="results">
    // <div class="result">
    //   <img src="https://i.ibb.co/ZGJwh4t/5beb41d748eb126c09037343.webp" />
    //   <h3>Nutella Cafe</h3>
    //   <p>The ultimate ice cream</p>
    // </div>
  </div>

  <script src="script.js"></script>
</body>

```

Make sure that `id="results"` is set. This will tell our JavaScript file *where* to put the results.

Now, head back to `script.js`.



Each time the function is called we want it to **return** a **“result”.** We can use similar HTML to that when we individually displayed a single result earlier in the workshop:

*Don’t write this code, we’ll show you how to add it soon*

```html
<div class="result">
  <img
    src="${iceCreamStoreData.img}"onerror="this.src='${fallbackImageUrl}'"/>
  <h3>${iceCreamStoreData.name}</h3>
  <p>${iceCreamStoreData.dsc}</p>
</div>

```

However, instead of using a set, manually-typed URL, Name, or Description, we will use the name that is stored in the object that we just passed in as a parameter (`iceCreamStoreData`)

<br/>
<br/>

To access the properties of each of these objects, we simply write the name of the object (**`iceCreamStoreData`**  in this case) and then we add the name of the property we want to access. 
<br/>
<br/>
For the name of iceCreamStoreData, it would be:
```javascript

iceCreamStoreData.name

```

👋 *Need a better clarification of this idea? Feel free to call Miguel or Alex over!*

<br/>
<br/>

Almost done connecting to the API!

---

—> **Quick Review**

- In order to display **variables inside of strings** in JavaScript, we need to use **special notation**
- **Backticks** **\` \`** instead of quotations " " and `${variableName}` for each variable in the String.

Now, we must **RETURN** this code inside of **backticks** in our function (remember, we want a `div` for each store) 

Note that we’re returning a string:

```jsx
function createIceCreamStoreDiv(iceCreamStoreData) {
  return `
    <div class="result">
      <img 
        src="${iceCreamStoreData.img}" 
      />
      <h3>${iceCreamStoreData.name}</h3>
      <p>${iceCreamStoreData.dsc}</p>
    </div>
  `
}
```

---

Since we want to add all of the elements to our HTML after creating them in our javascript, the simplest way is to add all of our newly created `<div>` elements after one another in a string.

So we’ll use code to generate a string that looks like this:

```jsx
<div>
	<img src="..."/>
	<h3>...</h3>
  <p>...</p>
</div>
<div>
	<img src="..."/>
	<h3>...</h3>
  <p>...</p>
</div>
<div>
	<img src="..."/>
	<h3>...</h3>
  <p>...</p>
</div>
<div>
	<img src="..."/>
	<h3>...</h3>
  <p>...</p>
</div>
```

That will later be inserted into a `div` on the page.

First, let’s create a string to store our map function’s results (the divs) joined together:

*You may have to scroll to see the full line*

```jsx
function createIceCreamStoreDiv(iceCreamStoreData) {
   // ...
}
function findIceCream() {
  const url = `https://free-food-menus-api-lb7o-main-aogbnndyra-wm.a.run.app/ice-cream`;
  fetch(url)
    .then(response => response.json())
		.then(iceCreamStores => {
      // add the code generator below this line!
			const iceCreamStoresString = iceCreamStores.map(
			iceCreamStore => createIceCreamStoreDiv(iceCreamStore)
	}
}
```

**Review**: `.map()` can be applied to any array, and it will return a new array after applying a certain function to each item in the array

```jsx
iceCreamStores.map(
	iceCreamStore => createIceCreamStoreDiv(iceCreamStore)
)
```

**`createIceCreamStoreDiv()`** is applied to **EACH received object** from the API and returns an array of outputs from running over each object. 

We give this array of objects the name **`iceCreamStores`** and *each* object the name **`iceCreamStore`**

**`.map()`** returns a new array filled with Strings. It looks like this:

```jsx
[`
<div>
	<img src="..."/>
	<h3>...</h3>
  <p>...</p>
</div>
`,
`
<div>
	<img src="..."/>a
	<h3>...</h3>
  <p>...</p>
</div>
`,
`
<div>
	<img src="..."/>
	<h3>...</h3>
  <p>...</p>
</div>
`
]
```

Let’s join all these Strings together to make one mega-String with all the divs in it. The “mega-String” will look like this:

```jsx
`
<div>
	<img src="..."/>
	<h3>...</h3>
  <p>...</p>
</div>
<div>
	<img src="..."/>a
	<h3>...</h3>
  <p>...</p>
</div>
<div>
	<img src="..."/>
	<h3>...</h3>
  <p>...</p>
</div>
`
```

The javascript function `.join(" ")` lets us “join” all the strings together! It takes each element in the array and joins it with a space in between. 

```jsx
function findIceCream() {
  const url = `https://free-food-menus-api-lb7o-main-aogbnndyra-wm.a.run.app/ice-cream`;
  fetch(url)
    .then(response => response.json())
		.then(iceCreamStores => {

			const iceCreamStoresString = iceCreamStores.map(
			iceCreamStore => createIceCreamStoreDiv(iceCreamStore)
			).join(" "); // add the .join(" ")
		})
	
}
```

Now, let’s write the code to insert all these divs into the `html` file.

Under the `.join(" ")` line, let’s create a new variable called `iceCreamStoreDiv` that equals `document.getElementById("results")`

```jsx

fetch(url)
	.then(response => response.json())
	.then(iceCreamStores => {
		const iceCreamStoresString = // ...

		// add this line
		const iceCreamStoreDiv = document.getElementById("results")
	})

```

`document.getElementById(---)` points to the div with the “results” ID in the HTML file.

![https://herseyhack.club/images/results.PNG](https://herseyhack.club/images/results.PNG)

With this pointer, we can change up any properties of that `div` we’d like. The one we want to change is the content in the `inner HTML`:

```jsx
iceCreamStoreDiv.innerHTML = iceCreamStoresString;
```

What this does is it sets the HTML between the start and end tags. Here’s a visualization:

Let’s say `iceCreamStoreString` equals

```jsx
`
<div class="result">
    <img src="https://i.ibb.co/ZGJwh4t/5beb41d748eb126c09037343.webp " />
    <h3>Nutella Cafe</h3>
    <p>The ultimate ice cream</p>
</div>
<div class="result">
    <img src="https://i.ibb.co/ZGJwh4t/5beb41d748eb126c09037343.webp " />
    <h3>Nutella Cafe</h3>
    <p>The ultimate ice cream</p>
</div>
<div class="result">
    <img src="https://i.ibb.co/ZGJwh4t/5beb41d748eb126c09037343.webp " />
    <h3>Nutella Cafe</h3>
    <p>The ultimate ice cream</p>
</div>
<div class="result">
    <img src="https://i.ibb.co/ZGJwh4t/5beb41d748eb126c09037343.webp " />
    <h3>Nutella Cafe</h3>
    <p>The ultimate ice cream</p>
</div>
`
```

The HTML between the start and end tags of `results` will be set to the value of `iceCreamStoreString`

Before the code adds our string:

![Screen Shot 2022-12-01 at 8.09.10 PM.png](/images//Screen_Shot_2022-12-01_at_8.09.10_PM.png)

After the code adds our string:

![Screen Shot 2022-12-01 at 8.09.38 PM.png](/images//Screen_Shot_2022-12-01_at_8.09.38_PM.png)



Now, our page should look like this!

![Screen Shot 2022-11-30 at 7.19.04 PM.png](/images//Screen_Shot_2022-11-30_at_7.19.04_PM.png)

Awesome!! Let’s do one last thing before you start customizing your site: fix the missing images.

---

👋 *Need any help or further explanation? Feel free to call Miguel or Alex over!*



For all store results with no store image, let’s use a ***********placeholder*********** image.

At the top of `script.js` , before the first `function` , add a variable that contains the link to the placeholder image.

**************************************************************************************************************************Copy and paste the link, but don’t copy and paste the code.**************************************************************************************************************************

Placeholder Image Link: 

[https://thekitchencommunity.org/wp-content/uploads/2021/11/Ice-Cream-Flavors.jpg](https://thekitchencommunity.org/wp-content/uploads/2021/11/Ice-Cream-Flavors.jpg) 

```jsx
// Add this variable to the VERY TOP of the page
const placeholderImageUrl = "https://thekitchencommunity.org/wp-content/uploads/2021/11/Ice-Cream-Flavors.jpg";

function createIceCreamStoreDiv(iceCreamStoreData) {
   // ...
```

Then, update the `img` tag in `createIceCreamStoreDiv` to display the placeholder image when the image from the API fails to load with the `onerror` line:

```jsx
const placeholderImageUrl = "https://thekitchencommunity.org/wp-content/uploads/2021/11/Ice-Cream-Flavors.jpg";

function createIceCreamStoreDiv(iceCreamStoreData) {
  return `
    <div class="result">
      <img 
        src="${iceCreamStoreData.img}" 
        onerror="this.src='${placeholderImageUrl}'" // add this!
      />
      ...
    </div>
  `
}
```

All stores should now have images!

**Your final `index.js` code should look like this:**

```jsx
const placeholderImageUrl = "https://thekitchencommunity.org/wp-content/uploads/2021/11/Ice-Cream-Flavors.jpg";

function createIceCreamStoreDiv(iceCreamStoreData) {
  return `
    <div class="result">
      <img 
        src="${iceCreamStoreData.img}" 
        onerror="this.src='${placeholderImageUrl}'"
      />
      <h3>${iceCreamStoreData.name}</h3>
      <p>${iceCreamStoreData.dsc}</p>
    </div>
  `
}
const iceCreamStoreDiv = document.getElementById("results");

function findIceCream() {
  const url = `https://free-food-menus-api-lb7o-main-aogbnndyra-wm.a.run.app/ice-cream`;
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

**Congratulations!** You now know how to fetch data from an API, use the `.map()` method on the response, and display it to the screen! We’re excited to see what you build with your new skills 🎉

## Part V: Hacking 🔨

In this section, your challenge is to make the Stuff Finder find any item of your choice and customize it to your liking!

### 💡 **************************************************************************Find something other than ice cream!**************************************************************************

*************Instant setup*************

- Find [other types of restaurants](https://free-food-menus-api-lb7o-main-aogbnndyra-wm.a.run.app)!
- Find [universities](http://universities.hipolabs.com/search?country=United+States)!
- Find [Divvy Bikes](https://data.cityofchicago.org/resource/aavc-b2wj.json)!

- Find [crypto prices](https://api.wazirx.com/sapi/v1/tickers/24hr)!
- Find [top Reddit posts](https://www.reddit.com/r/popular/top.json?limit=10&t=year)!

- Find [Pokemon](https://pokeapi.co/)!
- Find [Star Wars](https://swapi.dev/) planets, characters, etc!

***********Create a free account to get started w/ these***********

- Find [stocks](https://site.financialmodelingprep.com/)!
- Find [GPUs/PC parts](https://developer.bestbuy.com/)!

👋 *Need any help sorting through API data? Call Alex or Miguel over and we’d love to help out!*

### 🎨 ********************************************************Change up your site’s theme********************************************************

- Change up the text colors
- Change up the background
- Make the colors & theme match whatever content you’re making

Google is the best source of inspiration, like always! Take inspiration from other sites and use ideas/features from those sites in yours!

More inspiration:

- [Crypto Tracker](https://www.google.com/search?q=crypto+app&&tbm=isch&ved=2ahUKEwiBs5P18tn7AhXRFmIAHRDxDY0Q2-cCegQIABAA&oq=crypto+app&gs_lcp=CgNpbWcQAzIFCAAQgAQyBAgAEEMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDoECCMQJzoICAAQgAQQsQNQiwNY-xBgqBFoA3AAeACAAU2IAaIHkgECMTOYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=S2SJY8HhLdGtiLMPkOK36Ag&bih=1336&biw=1448&rlz=1C5CHFA_enUS902US902#imgrc=a6eP_46XyN-jEM)
    
    ![Screen Shot 2022-12-01 at 8.36.14 PM.png](/images//Screen_Shot_2022-12-01_at_8.36.14_PM.png)
    
- [Stock Tracker](https://www.google.com/search?rlz=1C5CHFA_enUS902US902&sxsrf=ALiCzsacmKTE8RoS6DxKRuJqoczEFJ1C0A:1669948490387&q=stocks+app+ios&tbm=isch&sa=X&ved=2ahUKEwi447_08tn7AhV7EVkFHbDHCFwQ0pQJegQICRAB&biw=1448&bih=1336&dpr=2#imgrc=k9_lkI-Kg2F7pM&imgdii=H_8q1EPJEORnBM)
    
    ![Screen Shot 2022-12-01 at 8.35.01 PM.png](/images//Screen_Shot_2022-12-01_at_8.35.01_PM.png)
    
- [Yelp](https://www.yelp.com/search?find_desc=ice+cream&find_loc=Chicago%2C+IL)

![Untitled](/images//Untitled.png)

- [Pokedex](https://www.pokemon.com/us/pokedex/)

![Untitled](/images//Untitled%201.png)

- [Yahoo Finance](https://finance.yahoo.com/screener/predefined/undervalued_growth_stocks/)

### ℹ️ Display more info for your stuff!

Adapt your site to the data your API provides & display it in the best format possible!



## Part VI: Sharing with Hersey Hack Club

Now that you’ve finished the workshop, submit your stuff finder by filling out this Typeform!

 If you want to submit the form later, it’ll always be available on the showcase page at the [herseyhack.club](http://herseyhack.club) site!

[https://1htona3vpjh.typeform.com/to/fuR1LL5n](https://1htona3vpjh.typeform.com/to/fuR1LL5n)



*Made with ❤️ by JHHS Hack Club Staff Team*