---
layout: base
title: Alien World - Dog and Background
image: /images/desert.JPG
sprite: /images/tumbleweed.png
---

<!-- Liquid code, run by Jekyll, used to define location of asset(s) -->
{% assign backgroundFile = site.baseurl | append: page.image %}
{% assign spriteImage = site.baseurl | append: page.sprite %}

<style>
    #controls {
        position: relative;
        z-index: 2; /* Ensure the controls are on top of the dog canvas */
    }

    /* Style the dog canvas to be the same size as the viewport */
    #tumbleweedCanvas {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0; /* Place it below the background */
    }
</style>

<!-- Prepare DOM elements -->
<!-- Wrap both the dog canvas and controls in a container div -->
<div id="canvasContainer">
    <div id="controls"> <!-- Controls -->
        <button id="toggleCanvasEffect">Invert</button>
        <input type="radio" name="animation" id="idle">
        <label for="idle">Idle</label>
        <input type="radio" name="animation" id="barking">
        <label for="barking">Barking</label>
        <input type="radio" name="animation" id="walking" checked>
        <label for="walking">Walking</label>
    </div>
    <canvas id="backgroundCanvas">
        <img id="backgroundImage" src="{{backgroundFile}}">
    </canvas>

</div>

<script type="module">
import { Layer } from '/pp-frontend/classes/Layer.js';
import { Tumbleweed } from '/pp-frontend/classes/Tumbleweed.js';

/* Background part of Game
 * scrolling 
*/
// Prepare Background Image
const backgroundImg = new Image();
backgroundImg.src = '{{backgroundFile}}';  // Jekyll/Liquid puts filename here

// Prepare Sprite Image
const tumbleweedImg = new Image();
tumbleweedImg.src = '{{spriteImage}}';

// Prepare Canvas
const canvas = document.getElementById("backgroundCanvas");
const ctx = canvas.getContext('2d');

// Dog animation part
const tumbleweedCanvas = document.createElement("canvas");
const tumbleweedCtx = tumbleweedCanvas.getContext("2d");

// Prepare Window extents related to viewport
const maxWidth = window.innerWidth;
const maxHeight = window.innerHeight;

backgroundImg.onload = function () {
    // Setup background constants from background image
    const WIDTH = backgroundImg.width;  // Image() width (meta data)
    const HEIGHT = backgroundImg.height; // Image() height
    const ASPECT_RATIO = WIDTH / HEIGHT;
    const ADJUST = 1.42 // visual layer adjust, use "1"" for a perfect loop 

    // Set Dimensions to match the image width
    const canvasWidth = maxWidth;
    const canvasHeight = canvasWidth / ASPECT_RATIO;  // height is oriented by width
    const canvasLeft = 0; // Start image from the left edge horizontally
    const canvasTop = ((maxHeight - canvasHeight) / 2) + 500;  // center image vertically

    // Set Style properties for the background canvas
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    canvas.style.width = `${canvasWidth}px`;
    canvas.style.height = `${canvasHeight}px`;
    canvas.style.position = 'absolute';
    canvas.style.left = `${canvasLeft}px`;
    canvas.style.top = `${canvasTop}px`;

    // Game speed is a common game variable
    var gameSpeed = 0;

    // Setup Dog sprite constraints
    const SPRITE_WIDTH = 1024;  // matches sprite pixel width
    const SPRITE_HEIGHT = 31; // matches sprite pixel height
    const SPRITE_FRAMES = 24;  // matches number of frames per sprite row; this code assumes each row is the same
    const SPRITE_SCALE = 5;  // controls the size of the sprite on the canvas


    // Background object
    var backgroundObj = new Layer(backgroundImg, 0.2, WIDTH, HEIGHT, gameSpeed);
    var tumbleweedObj = new Tumbleweed(tumbleweedImg, 0.5, SPRITE_FRAMES, canvasWidth);

    // Append the dog canvas to the body
    document.body.appendChild(tumbleweedCanvas);

    // Animation loop
    function animation() {
        backgroundObj.update();
        backgroundObj.draw(ctx);

        tumbleweedObj.update(canvasWidth, tumbleweedCanvas);
        tumbleweedObj.draw(SPRITE_WIDTH, SPRITE_HEIGHT, SPRITE_SCALE, canvasHeight, tumbleweedCanvas, tumbleweedCtx);
        setTimeout(function() {
            requestAnimationFrame(animation);
        }, 250);
    }

    // Start animation process
    animation();

    /* Toggle "canvas filter property" 
    * look in _sass/minima/dark-mode.scss
    */
    var isFilterEnabled = true;
    const defaultFilter = getComputedStyle(document.documentElement).getPropertyValue('--default-canvas-filter');
    toggleCanvasEffect.addEventListener("click", function () {
        if (isFilterEnabled) {
            canvas.style.filter = "none";  // remove filter
            tumbleweedCanvas.style.filter = "none";
        } else {
            canvas.style.filter = defaultFilter; // Apply the default filter value
            tumbleweedCanvas.style.filter = defaultFilter; 
        }

        isFilterEnabled = !isFilterEnabled;  // switch boolean value
    });
    /* Control "dog action" 
     * changes y value, the row in sprite
    */
    // update frameY of dog object, action from idle, bark, walk radio control
    const controls = document.getElementById('controls');
    controls.addEventListener('click', function (event) {
        if (event.target.tagName === 'INPUT') {
            const selectedAnimation = event.target.id;
            switch (selectedAnimation) {
                case 'idle':
                    tumbleweedObj.frameY = 0;
                    break;
                case 'barking':
                    tumbleweedObj.frameY = 1;
                    break;
                case 'walking':
                    tumbleweedObj.frameY = 2;
                    break;
                default:
                    break;
            }
        }
    });
};
</script>;