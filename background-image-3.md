---
layout: base
title: The Desert
image: /images/desert.JPG
character: /images/tumbleweed.png
---
{% assign backgroundFile = site.baseurl | append: page.image %}
{% assign characterImage = site.baseurl | append: page.character %}
<html>
<head>
    <style>
        canvas {
            border: 1px solid black;
        }
    </style>
</head>
<body>
    <canvas id="gameCanvas"></canvas>
    <script>
        const canvas = document.getElementById("gameCanvas");
        const ctx = canvas.getContext("2d");
        // Get window width and height
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const character = {
            x: 50,
            y: canvas.height - 50,
            width: 100,
            height: 100,
            rotation: 0, // Initial rotation angle in radians
            speed: 2, // Speed of movement
            rotationSpeed: Math.PI / 180, // Rotation speed in radians per frame
        };
        const characterImg = new Image();
        characterImg.src = '{{characterImage}}'; // Load the character image
        characterImg.onload = function () {
            function drawCharacter() {
                ctx.save(); // Save the current canvas state
                ctx.translate(character.x, character.y); // Translate to character's position
                ctx.rotate(character.rotation); // Rotate
                ctx.drawImage(characterImg, -character.width / 2, -character.height / 2, character.width, character.height); // Draw character
                ctx.restore(); // Restore the canvas state
            }
            function updateCharacter() {
                character.x += character.speed; // Move character horizontally
                character.rotation += character.rotationSpeed; // Rotate character
                // Wrap character to the other side of the canvas when it goes off-screen
                if (character.x > canvas.width + character.width / 2) {
                    character.x = -character.width / 2;
                }
            }
            function drawBackground() {
                const backgroundImg = new Image();
                backgroundImg.src = '{{backgroundFile}}';
                backgroundImg.onload = function () {
                    ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height); // Draw background image
                };
            }
            function gameLoop() {
                drawBackground();
                drawCharacter();
                updateCharacter();
                requestAnimationFrame(gameLoop); // Call the loop again
            }
            gameLoop(); // Start the game loop
        };
    </script>
</body>
</html>
