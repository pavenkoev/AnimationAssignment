class Jerry {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./frames.png"),
         0, 390, 38, 28, 3, 0.15);

         this.x = 220;
         this.y = 160;
         this.speed = 220;
    };

    update() {
        this.x += this.speed*this.game.clockTick;
        if (this.x > 857) this.x = 220;
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}