import { Layer } from '/pp-frontend/classes/Layer.js'
export class Tumbleweed extends Layer {
    constructor(image, speedRatio, SPRITE_FRAMES, canvasWidth) {
        super(image, speedRatio);
        this.minFrame = 0;
        this.maxFrame = SPRITE_FRAMES;
        this.frameX = 0;
        this.frameY = 2;  // walking as default
        this.tumbleweedX = canvasWidth; // Initialize the dog's x position to the right edge of the canvas
    }

    update(canvasWidth, tumbleweedCanvas) {
        if (this.frameY == 2) {
            this.tumbleweedX -= this.speed;  // Move the dog to the left
            // Check if the dog has moved off the left edge of the canvas
            if (this.tumbleweedX < -tumbleweedCanvas.width) {
                this.tumbleweedX = canvasWidth; // Reset the dog's x position to the right edge
            }
        }
        // Update frameX of the object
        if (this.frameX < this.maxFrame) {
            this.frameX++;
        } else {
            this.frameX = 0;
        }
    }

    // Draw dog object
    draw(SPRITE_WIDTH, SPRITE_HEIGHT, SPRITE_SCALE, canvasHeight, tumbleweedCanvas, tumbleweedCtx) {
        // Set fixed dimensions and position for the dogCanvas
        tumbleweedCanvas.width = SPRITE_WIDTH * SPRITE_SCALE;
        tumbleweedCanvas.height = SPRITE_HEIGHT * SPRITE_SCALE;
        tumbleweedCanvas.style.width = `${tumbleweedCanvas.width}px`;
        tumbleweedCanvas.style.height = `${tumbleweedCanvas.height}px`;
        tumbleweedCanvas.style.position = 'absolute';
        tumbleweedCanvas.style.left = `${this.tumbleweedX}px`; // Set the dog's left position based on its x-coordinate
        tumbleweedCanvas.style.top = `${canvasHeight}px`;

        tumbleweedCtx.drawImage(
            this.image,
            this.frameX * SPRITE_WIDTH,
            this.frameY * SPRITE_HEIGHT,
            SPRITE_WIDTH,
            SPRITE_HEIGHT,
            0,
            0,
            tumbleweedCanvas.width,
            tumbleweedCanvas.height
        );
    }
}
