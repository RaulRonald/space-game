import { Spacegame } from "./spacegame.js"
//configura��es tela do jogo
var config = {
    type: Phaser.AUTO,
    width: 720,
    height: 360,
    scene: null,
    camera : null
};
//adicionando configura��es da tela ao jogo
var game = new Phaser.Game(config);
//adicionando cena ao jogo
game.scene.add('spacegame', new Spacegame());
//iniciando cena
game.scene.start('spacegame');
