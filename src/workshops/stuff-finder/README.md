# Stuff Finder

Welcome to the stuff finder workshop! 👋

For the next few meetups, you’ll build a custom “stuff finder website”! 🔥 This requires **no prior experience** & we'll provide tutorials for all features you'd like to add 

We’ll first show you how to build a basic ice cream finder: \
\
<img src="https://i.ibb.co/Qvxr1dD/Group-16-1.jpg" alt="Group-16-1" border="0">\
\
Then, you’ll be able to customize to your liking! \
\
For example, you can build:

_• An ice cream store finder_ \
\
<img src="https://i.ibb.co/vVLFwBb/Screen-Shot-2022-11-22-at-11-18-57-PM-1.png" alt="Screen-Shot-2022-11-22-at-11-18-57-PM-1" border="0" width="400px"> \
_• A stock/crypto finder_ \
\
<img src="https://cdn.discordapp.com/attachments/1037891922825576509/1044851976627830824/Screen_Shot_2022-11-22_at_11.31.57_PM.png" alt="Screen-Shot-2022-11-22-at-11-18-57-PM-1" border="0" width="400px"> \
_• A pokemon finder_ \
\
<img src="https://cdn.discordapp.com/attachments/1037891922825576509/1044852335685415002/Screen_Shot_2022-11-22_at_11.39.10_PM.png" alt="Screen-Shot-2022-11-22-at-11-18-57-PM-1" border="0" width="400px"> \
• Or anything else you'd like!\
\
These will all be posted to a **megasite** (collective site of everyone's stuff finders), so be creative & have fun with it!

\
• We'll give more ideas & build support after you build the basics.

• Alex and Miguel are open to helping at any time!

## Recommended setup

Get your iPad & open this workshop there:

1 - Open Safari or Chrome on iPad\
2 - Go to [herseyhack.club](http://herseyhack.club) \
3 - Click "workshops" \
4 - Click "stuff finder" 

• Having it on your iPad lets you read & code simultaneously\
• Having it on your laptop lets you copy/paste essential links!\

<img src="https://i.ibb.co/BfSfzq3/IMG-7704.jpg" alt="IMG-7704" border="0">\
*Recommended setup ^^*

## Getting started **[🔨](https://emojipedia.org/hammer/)**

If you don’t have a replit account

• Create an account on [repl.it](http://repl.it).\
• Follow the instructions on the site & ask for help if needed

Once your account is set up, to get the starter code, go to  [https://replit.com/@MiguelAenlle1/Stuff-Finder?v=1](https://replit.com/@MiguelAenlle1/Stuff-Finder?v=1).

Click “Fork Repl” on the right hand side as shown below to duplicate the starter code!

![https://i.imgur.com/vQRA1Xh.png](https://i.imgur.com/vQRA1Xh.png)

You should now be editing a copy of the starter code.

![https://i.imgur.com/1XB6F2f.png](https://i.imgur.com/1XB6F2f.png)

___

Let’s start by first adding an `<h1>` tag on the line after it says `YOUR CODE HERE`:

```html
<h1>Ice Cream Finder 🍨</h1>
```

Under the `<h1>` tag, we’ll then add a `<p>` tag right under for the description:

```html
<p>Best ice cream in the Chicago area!</p>
```

Let's now add some styling!

Go to `style.css` in the left-hand navigator:

![IceCreamFinder.gif](https://i.ibb.co/fDjZtm3/Ice-Cream-Finder.gif)

Once you’re there, add `font-family: sans-serif` to the `html, body` style as follows:


```css
html, body {
	height: 100%;
	width: 100%;
	font-family: sans-serif;
}
```

This will set the font of the webpage to `sans-serif` for all text!

___

Let's now add the cells. Go back to `index.html`

Then, type this code right under the `p` tag to start creating a found ice cream store cell:

```html
<div>
	<h3>1. Nutella Cafe</h3>
	<p>The ultimate ice cream</p>
</div>
```

Then, let’s add an image by inserting an `img` tag right over `h3`

```html
<div>
  <img src="my image"/>
	<h3>1. Nutella Cafe</h3>
	<p>The ultimate ice cream</p>
</div>
```

Replace `my image` with this link:

[https://i.ibb.co/ZGJwh4t/5beb41d748eb126c09037343.webp](https://i.ibb.co/ZGJwh4t/5beb41d748eb126c09037343.webp) — an image of the Nutella Cafe.

It should now look like this:

![https://i.imgur.com/JJu2nIp.png](https://i.imgur.com/JJu2nIp.png)

Obviously not the best formatting 😂

So let’s go back to `style.css` to add a better format!

Let’s start by creating a style class for `cell` by adding

```html
.cell {

}
```

Right under the last bracket of `html, body { ... }`

Your code should now look like this:

![https://i.imgur.com/OhsSVNW.png](https://i.imgur.com/OhsSVNW.png)

In cell, let’s add this CSS to style it up:

```css
.cell {
  background-color: #f2f2f2;
  padding: 10px;
}
```

• `background-color` will change it to the background `#f2f2f2` (a light gray)\
• `padding: 10px` adds 10 pixels of padding to the cell, making content look better.

Now, go back to `index.html` and see the site:

![https://i.imgur.com/DP5wqKq.png](https://i.imgur.com/DP5wqKq.png)

One last step for the changes to apply! 

Type `class="cell"` in the cell’s div to tell `CSS` *********which********* `div` should have the styling applied to it:

![https://i.imgur.com/BuUNwgi.png](https://i.imgur.com/BuUNwgi.png)

You should now see the gray background on the cell:

![https://i.imgur.com/12XrCtq.png](https://i.imgur.com/12XrCtq.png)

Let’s now make the image better!

Go back to `style.css`

Then, a few lines under `.cell` ’s last bracket, add `.cell img {}` like this:

![https://i.imgur.com/8LRQsuT.png](https://i.imgur.com/8LRQsuT.png)

This applies whatever CSS we put within the brackets to any `img` tag inside a div of class `cell`.

Now, add this code within the `.cell img` brackets to format the image:

```css
.cell img {
	width: 100%,
  height: 150px
}
```

This will resize the image into the cell:

![https://i.imgur.com/2OwUpZr.png](https://i.imgur.com/2OwUpZr.png)

Problem: the image is super stretched! Let’s fix that by adding this to `.cell img`

```css
object-fit: cover
```

So your `.cell img {}` should now look like this:

```css
.cell img {
	width: 100%,
  height: 150px,
  object-fit: cover
}
```

You should now have a site that looks like this:

![https://i.imgur.com/xBTdTyt.png](https://i.imgur.com/xBTdTyt.png)

### Add a second ice cream store

Before you start customizing, try adding a second ice cream store!

Your goal is to make the site look like this:

![https://i.imgur.com/2ytNVp2.png](https://i.imgur.com/2ytNVp2.png)

You can use any name and description — 

This is the Image Link: [https://stories.starbucks.com/wp-content/uploads/2019/01/Roastery_Ice_Cream_low_res-1.jpg](https://stories.starbucks.com/wp-content/uploads/2019/01/Roastery_Ice_Cream_low_res-1.jpg)

### Let’s get hacking!

In this section, your challenge is to add additional features to the “stuff” finder to make it your own!

Here are some ideas for stuff you can find:

*****************insert some ideas*****************

Be creative! List anything & everything you can come up with

We also have tutorials on how to add more stuff:

• Further styling your site\
• Adding an API to display **********everything**********\
• Adding a map to your site