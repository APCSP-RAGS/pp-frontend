---
layout: base
title: The Desert
image: /images/desert.jpg
character: /images/tumbleweed.png
player: /images/walter.gif
---
{% assign backgroundFile = site.baseurl | append: page.image %}
{% assign characterImage = site.baseurl | append: page.character %}
{% assign playerImage = site.baseurl | append: page.player %}
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
        // Character
        const character = {
            x: 50,
            y: canvas.height - 50,
            width: 100,
            height: 100,
            rotation: 0, // Initial rotation angle in radians
            speed: 2, // Speed of movement
            rotationSpeed: Math.PI / 180, // Rotation speed in radians per frame
        };
        // Player
        const player = {
            x: canvas.width - 50,
            y: canvas.height - 50,
            width: 100,
            height: 100,
            speed: 4, // Speed of movement
        };
        const characterImg = new Image();
        characterImg.src = '{{characterImage}}'; // Load the character image
        const playerImg = new Image();
        playerImg.src = '{{playerImage}}'; // Load the player image
        characterImg.onload = function () {
            playerImg.onload = function () {
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
                function updatePlayer() {
                    // Move player horizontally based on input (a and d keys)
                    if (keys['a']) {
                        player.x -= player.speed;
                    }
                    if (keys['d']) {
                        player.x += player.speed;
                    }
                    // Wrap player to the other side of the canvas when it goes off-screen
                    if (player.x > canvas.width + player.width / 2) {
                        player.x = -player.width / 2;
                    }
                }
                const keys = {}; // Object to track key states
                document.addEventListener('keydown', function (event) {
                    keys[event.key] = true;
                });
                document.addEventListener('keyup', function (event) {
                    keys[event.key] = false;
                });
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
                    updatePlayer();
                    requestAnimationFrame(gameLoop); // Call the loop again
                }
                gameLoop(); // Start the game loop
            };
        };
    </script>
</body>
</html>

