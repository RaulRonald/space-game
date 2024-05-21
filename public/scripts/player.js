
export class PlayerSpace extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        //colocando a origem do jogador
        this.setOrigin(0, 0);
        //setando a sua velocidade
        this.playervelocity = 3;
    }
    update() {
        //função de movimento do jogador
        this.move();
    }
    move() {
        const scene = this.scene;
        //movimento com base no cursor
        if (scene.cursors.down.isDown) {
            this.y += this.playervelocity;
        }
        if (scene.cursors.up.isDown) {
            this.y -= this.playervelocity;
        }
        if (scene.cursors.right.isDown) {
            this.x += this.playervelocity;
        }
        if (scene.cursors.left.isDown) {
            this.x -= this.playervelocity;
        }
        //colisão com as bordas do jogo, vemos isso na config do jogo
        if (this.y <= 0) this.y += this.playervelocity;
        if ((this.y + this.height) >= scene.game.config.height) this.y -= this.playervelocity;
        if (this.x <= 0) this.x += this.playervelocity;
        if ((this.x + this.width) >= scene.game.config.width) this.x -= this.playervelocity;
    }
}
