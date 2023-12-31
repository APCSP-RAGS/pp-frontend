---
layout: base
title: The Desert
image: /images/desert.jpg
character: /images/tumbleweed.png
player: /images/walter.png
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
                        requestAnimationFrame(gameLoop); // Call the loop again
                    }
                    gameLoop(); // Start the game loop
                };
            };
        </script>
    </body>
</html>
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