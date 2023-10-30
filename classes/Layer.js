class Layer {
    constructor(image, speedRatio) {
        this.x = 0;
        this.y = 0;
        this.width = WIDTH;
        this.height = HEIGHT;
        this.image = image;
        this.speedRatio = speedRatio;
        this.speed = gameSpeed * this.speedRatio;
        this.frame = 0;
    }
    update() {
        this.x = (this.x - this.speed) % this.width;
    }
    draw() {
        ctx.drawImage(this.image, this.x, this.y);
        ctx.drawImage(this.image, this.x + this.width, this.y);
    }
}
