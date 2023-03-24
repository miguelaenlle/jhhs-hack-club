In this workshop, you'll build a custom **VR World** using HTML and A-Frame!

_What the final product looks like_
<iframe width="100%" height="500" src="https://www.youtube.com/embed/uqGSTCnqKec?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<br/>
<br/>

🕜 This workshop will take 1 meetup

💻 This workshop requires **zero coding experience**

👋 Feel free to ask questions and customize your website as you code!

## Getting Started

To get started:

1. Create an account on <a href="https://repl.it" target="_blank">repl.it</a>, our code editor
2. Clone the starter code <a href="https://replit.com/@MA157/VR-World-Starter" target="_blank">here</a>

Once you clone the starter code, your screen should look like this:

![https://i.ibb.co/DMjJtYZ/meme-gen.png](https://i.ibb.co/DMjJtYZ/meme-gen.png)
<br>
<br>

## A-Frame Cheat Sheet

### **Epic XYZ Directions Legend:**


<img src="https://i.ibb.co/0C1Fjk0/hackclub-1.png"/>

<br/>

## **How to add a box**
```html
<a-box width="1" height="1" depth="0.25" position="0 0 0" color="black"></a-box>
```
<br/>

## **How to add a text box**
```html
<a-text value="CHANGE THIS TEXT" color="white" align="center" position="0 0 0"></a-text>
```
<br/>


## **How to add an entity**<br>

In the `a-assets` imports, add the `a-asset-item` code within your `a-assets` tag:
```html
<a-assets>
    <!-- Code goes INSIDE the a-assets tag  -->
    <a-asset-item id="ID-OF-MODEL" src="filename.gltf"></a-asset-item>
</a-assets>

```
<br/>

Also, replace `ID-OF-MODEL` with an ID that describes the object, and the path to the GLTF file.


```html
<a-entity gltf-model="#ID-OF-MODEL" scale="1 1 1" position="0 0 0">
```
<br/>


## **Make the entity move**
```html
<a-entity 
    gltf-model="#model" 
    position="0 0 0" 
    animation="property: position; to: -10 0 0; dur: 1000; loop: true">
</a-entity>
```

`position=...` refers to the initial position<br/>
`to: ...` refers to the final position<br/>
`dur: ...` is the duration in milliseconds

<br/>


## **Adding custom entities**

<a href="https://sketchfab.com/feed" target="_blank">https://sketchfab.com/feed</a> is a good resource for custom entities. To use it:

1.&nbsp; Create an account on <a href="https://sketchfab.com" target="_blank">https://sketchfab.com</a><br>
2.&nbsp; Go to `Explore` > `Downloadable`<br>
3.&nbsp; Download the GLTF file for your desired asset. <br>
4.&nbsp; Afterwards, replace the `scene.bin` and `scene.gltf` files in the Replit with the newly downloaded ones.

<br>Try it on your own first, but if it doesn't make sense, call Miguel over to help.

<br>
<br>
<br>
