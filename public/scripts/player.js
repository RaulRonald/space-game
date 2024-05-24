
export class PlayerSpace extends Phaser.Physics.Arcade.Sprite {
    
    constructor(sabertexture,slashtexture,scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        //colocando a origem do jogador
        this.setOrigin(0, 0);
        //setando a sua velocidade
        let ref = this;
        this.playervelocity = 3;
        this.saber_dir = 1;
        //carregando objetos que serão usados no ataque básico
        this.saber = new Phaser.Physics.Arcade.Sprite(scene, x, y, sabertexture);
        scene.add.existing(this.saber);
        this.slash = new Phaser.Physics.Arcade.Sprite(scene,x, y, slashtexture);
        this.slash.visible = false;
        scene.add.existing(this.slash);
        //ataque ao clicar
        scene.input.on('pointerdown', function () {
            //ataque em sí
            if (ref.saber.visible == true) {
                ref.saber.visible = false;
                ref.slash.visible = true;
            }
            //cooldawn do ataque
            ref.scene.time.delayedCall(500, function () {
                ref.saber.visible = true;
                ref.slash.visible = false;
            }, [], ref.scene);
            });
    }
    update() {
        //função de movimento do jogador
        this.move();
        this.atack();
    }
    atack() {
        this.saber.x = this.x + (this.saber_dir * 35);
        this.saber.y = this.y + 15;
        this.slash.x = this.x + (this.saber_dir * 70);
        this.slash.y = this.y + 5;
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
            this.saber_dir = 1;
            this.slash.flipX = false;
            this.saber.flipX = false;
            this.flipX = false;
        }
        if (scene.cursors.left.isDown) {
            this.x -= this.playervelocity;
            this.saber_dir = -0.25;
            this.slash.flipX = true;
            this.saber.flipX = true;
            this.flipX = true;

        }
        //colisão com as bordas do jogo, vemos isso na config do jogo
        if (this.y <= 0) this.y += this.playervelocity;
        if ((this.y + this.height) >= scene.game.config.height) this.y -= this.playervelocity;
        if (this.x <= 0) this.x += this.playervelocity;
        if ((this.x + this.width) >= scene.game.config.width) this.x -= this.playervelocity;
    }
}
