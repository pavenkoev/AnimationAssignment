class Tom {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./frames.png"),
         0, 182, 48, 32, 4, 0.15);

         this.x = 100;
         this.y = 140;
         this.speed = 220;
    };

    update() {
        this.x += this.speed*this.game.clockTick;
        if (this.x > 736) this.x = 100;
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}