Welcome to the stuff finder basics workshop! 👋

In this workshop, you’ll first build an ********************************Ice Cream Finder******************************** 🍨, then you’ll be able to hack it to list *anything you’d like*!

![Screen Shot 2022-11-27 at 10.56.04 AM (1).png](/images//Screen_Shot_2022-11-27_at_10.56.04_AM_(1).png)

[*Final Project Demo*](https://Completed-Stuff-Finder.miguelaenlle1.repl.co)

🕜 This workshop should take roughly 1 hour

💻 This workshop requires ********************************zero coding experience********************************

*👋 Remember that Alex and Miguel can help at any time! Need a walkthrough or just some help? Call us over!*

## Part I: Setup



We’ll be using [repl.it](http://repl.it) to code up the Ice Cream Finder.

—> **What is repl.it?**

[Repl.it](http://repl.it/) is an online code editor. It's similar to Google Docs, but has some important features that make it much better for typing code than a regular text editor.

First, go to [https://replit.com/signup](https://replit.com/signup) to create an account:

![Screen Shot 2022-11-28 at 11.33.00 PM.png](/images//Screen_Shot_2022-11-28_at_11.33.00_PM.png)

…

You can use any username, email, and/or password. You can also continue with Google if you prefer.

…

Then, answer the questions that follow. If you receive a prompt that looks like this:

![Screen Shot 2022-11-28 at 11.34.03 PM.png](/images//Screen_Shot_2022-11-28_at_11.34.03_PM.png)

→ Click ******************************No, I got this.******************************

Now that you have a Replit account, click this link, which has the starter code for the Ice Cream Finder:

[https://replit.com/@MiguelAenlle1/Stuff-Finder-Basics?v=1](https://replit.com/@MiguelAenlle1/Stuff-Finder-Basics?v=1)

![Screen Shot 2022-12-01 at 3.03.48 PM.png](/images//Screen_Shot_2022-12-01_at_3.03.48_PM.png)

After that, click “fork repl” on the right-hand side, as circled.

![Screen Shot 2022-12-01 at 3.03.48 PM.png](/images//Screen_Shot_2022-12-01_at_3.03.48_PM.png)

*Forking* is basically coding-speak for cloning. In this case, it clones the starter code:

![Screen Shot 2022-11-27 at 11.09.31 AM.png](/images//Screen_Shot_2022-11-27_at_11.09.31_AM.png)

Name the repl whatever you’d like and hit “Fork Repl”. This will bring you to the HTML/CSS editor:

![Screen Shot 2022-11-27 at 11.16.50 AM.png](/images//Screen_Shot_2022-11-27_at_11.16.50_AM.png)

You’re now ready to start building the **********************************Ice Cream Finder********************************** website✨

## Part II: The HTML File 🧑‍💻



You may have noticed that there are **three files** on the left hand side bar. 

Click on any file to edit it:

![Screen Shot 2022-11-30 at 7.50.00 PM.png](/images//Screen_Shot_2022-11-30_at_7.50.00_PM.png)

The file we’ll be editing this section is  `index.html` . Hence the `.html` ending, it’s an HTML file.

**What’s an HTML file?**

HTML stands for HyperText Markup Language, pronounced H-T-M-L. It’s basically a language that web developers use to tell web browsers how to display content on a webpage.

HTML is made up of a bunch of different elements, which are just tags that tell the browser how to display the content. For example, the following HTML code tells the browser to display the text "Hello, world!" as a heading:

```jsx
<h1>Hello, world!</h1>
```

—> **HTML consists of a series of elements**

HTML elements are made up of a **start tag**, some **content**, and an **end tag**. The start tag tells the browser where the element begins or starts to take effect, and the end tag tells the browser where the element ends. The content is the text or other HTML elements that are contained between the start and end tags.

For example,

```jsx
<h1>Hello, world!</h1>
```

is an HTML element that tells the browser to display the text "Hello, world!" as a heading. The `<h1>` is the start tag, the `</h1>` is the end tag, and the `Hello, world!` is the content.

Here's a small list of some of the most common HTML elements:

| Element | Description |
| --- | --- |
| `<h1>-<h6>` | These elements are used to display headings. The `<h1>` element is the most important heading and `<h6>` is the least important heading. |
| `<p>` | This element is used to display a paragraph of text. |
| `<a>` | This element is used to create a link to another page or to an anchor on the same page. |
| `<img>` | This element is used to display an image. |

Additionally, there are a bunch of other elements that you can use to format text, create lists, tables, and more. You can find a list of all of the HTML elements [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element).

### Time to start writing code:

On the line after `<!-- YOUR CODE GOES HERE -->`, add an `h1` and `p` tag to serve as the title and description of your website

```html
<body>
  ...	
	<h1>Ice Cream Finder</h1>
  <p>The best ice cream!</p>
  ...
</body>
```

The output from that code should look like:

![Screenshot 2022-11-30 at 12.43.48 AM.png](/images//Screenshot_2022-11-30_at_12.43.48_AM.png)

Under the `p` tag, we’ll then create a `div` to put all of our ice cream stores into.

A `div` tag is another HTML element. It **div**ides content into boxes:

```jsx
<body>	
	<h1>Ice Cream Finder</h1>
  <p>The best ice cream!</p>
  <div></div>
</body>
```

Let’s put another `div` inside that `div` to make a box for an individual ice cream store:

```jsx
<body>	
	<h1>Ice Cream Finder</h1>
  <p>The best ice cream!</p>
  <div>
		<div>

		</div>
	</div>
</body>
```

Now, let’s add an image of the restaurant. We can use an `<img />` tag to do so:

```jsx
<img src="" />
```

`src` stands for source, the source of the image’s data. This source is a URL for the image.

Replace the empty quotation marks `""` with the below link to fill the image:

[https://i.ibb.co/ZGJwh4t/5beb41d748eb126c09037343.webp](https://i.ibb.co/ZGJwh4t/5beb41d748eb126c09037343.webp) 

Now your code should look like this: 

```html
<body>

	<h1>Ice Cream Finder</h1>
  <p>The best ice cream!</p>

	<div>
		<div>
	    <img src="https://i.ibb.co/ZGJwh4t/5beb41d748eb126c09037343.webp" />
	  </div>
	</div>
</body>
```

Lastly, let’s add an `<h3>` tag and a `<p>` tag for the Name and Description of the ice cream store:

```jsx

<body>
  ...
	<div>
		<div>
	    <img src="https://i.ibb.co/ZGJwh4t/5beb41d748eb126c09037343.webp" />

			<h3>Nutella Cafe</h3>
	    <p>The ultimate ice cream</p>    
	  </div>
	</div>
</body>

```

![Screen Shot 2022-11-27 at 11.47.17 AM.png](/images//Screen_Shot_2022-11-27_at_11.47.17_AM.png)

Now, it’s time to add some CSS to make the website look epic. But before that:

### *Hack Break*

For 2-3 minutes, play with the code a little!

- Change the store’s name
- Change its description
- Google an image and change it to that
- Make multiple stores!

**************Happy hacking!**************

*👋  Need help adding a feature, fixing errors, or on anything else? Alex and Miguel can help at any time, just call us over and we’ll help with anything you need!* 

## ****************Part III: Styling (The CSS File)**************** 🎨



Using the left hand navigator bar, click on the `style.css` file. This is what is called a “CSS” file.

So what is CSS? CSS, also known as Cascading Style Sheets, is a language used for styling the tags (or "elements") on a web page.

While HTML oversees the content and the way it's structured, CSS is how you'll specify **how you'd** like your content to look. With it you can set things like **colors**, s p a c i n g, and *more*. The two languages work together to make up what you see on a webpage.

Make sure that you have selected the style.css file using the left hand navigator bar.

![Screen Shot 2022-11-27 at 11.54.54 AM.png](/images//Screen_Shot_2022-11-27_at_11.54.54_AM.png)

**What are the benefits of having CSS in your programming projects?**

It’s simple, really. UI is basically aesthetics, the better the aesthetics, the better the user’s experience.

CSS lets you target multiple elements with the same styling, meaning you don’t have to write the same code twice.

Without CSS your website will look like this: 

![Untitled](/images//Untitled.png)

Once you add CSS:

![Untitled](/images//Untitled%201.png)

CSS and HTML code looks a little different. In CSS, everything is based off of “rules”. A rule looks like this:

![Untitled](/images//Untitled%202.png)

The first part of a CSS rule is a **selector**. The selector “selects” what you want to be adding styling to. In CSS, there are 3 ways to target things you want to style. 

**Class selector:** In HTML you can add “class” attributes to elements (in the same place you added the attributes from the HTML section)

```jsx
<h1 class="header">My Website!</h1>
```

To modify a class in CSS we use a period followed by brackets

```css
.header {
	//css code here
}
```

**ID Selector:** the same way you add a class, you can also add an id to an element in CSS. An ID is used to target ONE single element. A class can be used to apply the same styling to multiple elements.

****************************************************************************************************The following are code samples, not for the ice cream finder**************************************************************************************************** 

```html
<h1 id="header">My Website!</h1>
```

To modify a ID in CSS we use # followed by brackets

```css
#header {
	//css code here
}
```

**Great! We know how to select elements, but how do we actually write the code inside the brackets that modifies them?**

Each CSS style is made up of two parts: the `property`and the `value`.

![Untitled](/images//Untitled%202.png)

The **property** is the type of modification you want to make. For example, if you want to modify the color you make the “property” color. 

```css
.header {
	color: //value here;
}
```

The value is what you want to do that property of the thing you selected, a value comes right after a property and ends in a semi-colon ;

```css
.header {
	color: blue;
	background-color: black;
}
```

The code above would make our header blue, and the background color of our header black.

**Now that we know how CSS works, let’s start writing our own code on replit!**

Before editing the CSS file, to ensure CSS knows which `div` to apply its styling to, set the `class` attribute of the Nutella Café `div` :

```html
<div>

	<div class="result"> <!-- Edit this line here! -->

    <img src="https://i.ibb.co/ZGJwh4t/5beb41d748eb126c09037343.webp" />
		<h3>Nutella Cafe</h3>
    <p>The ultimate ice cream</p>    
  </div>
</div>
```

Let’s change up the font first. In `html, body` , add `font-family: sans-serif` to set the font of all tags within `html` and `body` tags to `sans-serif`:

```css
html, body {
  height: 100%;
  width: 100%;

  font-family: sans-serif; // Add this!
} 
```

Adding the `height: 100%;` and `width: 100%;` modifier allows the body of the page to take up 100% of the width and height of the page. 

Next, let’s add some style to the result `div` . Under the `html, body` CSS, on the line under, add `.result` to specify the HTML for the `result` class, then:

- Set background color a light gray
- Set padding to 10 pixels to keep the content from sticking on borders
- Set border-radius to 5 pixels to round the edges

```css
.result {
  background-color: #f2f2f2;
  padding: 10px;
  border-radius: 5px;
}
```

![Screen Shot 2022-11-27 at 12.03.23 PM.png](/images//Screen_Shot_2022-11-27_at_12.03.23_PM.png)

Looking better, let’s just fix that image and your site will look epic

Under the `.result` CSS, add `.result img {}` . 

*How does this selector work? Why does it have two selectors?*

This selector is even more specific than previous ones. It let’s us modify all `img` elements with the `.result` class. Since we only have one image here, we could modify it with a basic `img { }` selector. However, it is better to be specific so that you can add more images with specific CSS in the future.

```css
.result img {

}
```

If you are curious about what other CSS modifiers do, check out this link - there are a million ways to modify HTML with CSS!

[https://www.w3schools.com/css/](https://www.w3schools.com/css/) (also, you can always google questions! if you have any problem, someone had it before you, guaranteed)

In there, format the image to have a fixed `width` and `height` — `width` should take up the whole result div, and `height` should be fixed at `150px`:

This modification will force the image to be no taller than 150px.

```css
.result img {
	width: 100%;
  height: 150px;
}
```

![Screen Shot 2022-11-27 at 12.09.17 PM.png](/images//Screen_Shot_2022-11-27_at_12.09.17_PM.png)

*That’s much better sizing! Let’s now fix the image stretching~*

Add the line `object-fit: cover` under the `height` CSS to fix the stretching:

```css
.result img {
	width: 100%;
  height: 150px;
  object-fit: cover;
}
```

![Screen Shot 2022-11-27 at 12.15.06 PM.png](/images//Screen_Shot_2022-11-27_at_12.15.06_PM.png)

*Awesome! The website styling is now complete! 🖌️*

## Part IV: Hacking 🔨



In this section, your challenge is to make the Stuff Finder find any item of your choice and customize it to your liking!

*👋 Need help finding something not on the list or just want to discuss ideas? 
Call Alex or Miguel over any time!*

### 💡 **************************************************************************Use something other than ice cream!**************************************************************************

- Use stocks/crypto
- Use PC parts
- Use football teams
- Use mechanical keyboards

o*****************r anything other ideas!*****************

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

![Untitled](/images//Untitled%203.png)

- [Pokedex](https://www.pokemon.com/us/pokedex/)

![Untitled](/images//Untitled%204.png)

- [Yahoo Finance](https://finance.yahoo.com/screener/predefined/undervalued_growth_stocks/)

### ℹ️ Display more info for your stuff!

List more info for your stuff by adding more `<p>` tags!

For example, you can list locations, numbers, etc.

## Part VI: Sharing with Hersey Hack Club



Now that you’ve finished the workshop, submit your stuff finder by filling out this Typeform!

 If you want to submit the form later, it’ll always be available on the showcase page at the [herseyhack.club](http://herseyhack.club) site!

[https://1htona3vpjh.typeform.com/to/fuR1LL5n](https://1htona3vpjh.typeform.com/to/fuR1LL5n)



**************Credits**************

[https://www.cytronicoder.com/](https://www.cytronicoder.com/) Zeyu Zao for the HTML explanation

[https://workshops.hackclub.com/](https://workshops.hackclub.com/) Hack Club for site layout and ideas

*Made with ❤️ by JHHS Hack Club Staff Team*