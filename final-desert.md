---
layout: base
title: The Desert
image: /images/desert.jpg
character: /images/tumbleweed.png
player: /images/walter.png
interactive: /images/jesse2.png
---
{% assign backgroundFile = site.baseurl | append: page.image %}
{% assign characterImage = site.baseurl | append: page.character %}
{% assign playerImage = site.baseurl | append: page.player %}
{% assign interactiveImage = site.baseurl | append: page.interactive %}
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
        // Character (Tumbleweed)
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
            // Player
            const player = {
                x: canvas.width - 50,
                y: canvas.height - 50,
                width: 200,
                height: 200,
                speed: 4, // Speed of movement
            };
            const playerImg = new Image();
            playerImg.src = '{{playerImage}}'; // Load the player image
            playerImg.onload = function () {
                // Interactive Element
                const interactive = {
                    x: canvas.width - 1250,
                    y: canvas.height - 100,
                    width: 100,
                    height: 100,
                };
                const interactiveImg = new Image();
                interactiveImg.src = '{{interactiveImage}}'; // Load the interactive image
                interactiveImg.onload = function () {
                    let dialogueVisible = false; // Flag to track if dialogue is visible
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
                    function drawPlayer() {
                        ctx.drawImage(playerImg, player.x - player.width / 2, player.y - player.height / 2, player.width, player.height); // Draw player
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
                    function drawInteractive() {
                        ctx.drawImage(interactiveImg, interactive.x - interactive.width / 2, interactive.y - interactive.height / 2, interactive.width, interactive.height); // Draw interactive element
                    }
                    function checkCollision() {
                        // Calculate the distance between player and interactive
                        const distance = Math.sqrt((player.x - interactive.x) ** 2 + (player.y - interactive.y) ** 2);
                        if (distance < player.width / 2 + interactive.width / 2) {
                            // If they touch, set the dialogue to be visible
                            dialogueVisible = true;
                        } else {
                            // If they are not touching, hide the dialogue
                            dialogueVisible = false;
                        }
                    }
                    function drawDialogue() {
                        if (dialogueVisible) {
                            // Display a dialogue bubble when dialogue is visible
                            ctx.fillStyle = 'white';
                            ctx.fillRect(player.x - player.width / 2, player.y - player.height / 2 - 30, player.width, 30);
                            ctx.fillStyle = 'black';
                            ctx.fillText('This stuff is the bomb Mr. White!', player.x - player.width / 2 + 10, player.y - player.height / 2 - 10);
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
                        drawPlayer();
                        updatePlayer();
                        drawInteractive();
                        checkCollision();
                        drawDialogue();
                        requestAnimationFrame(gameLoop); // Call the loop again
                    }
                    gameLoop(); // Start the game loop
                };
            };
        };
    </script>
</body>
</html>
