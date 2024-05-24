import { PlayerSpace } from "./player.js";
//cena do jogo
export class Spacegame extends Phaser.Scene {
    constructor() {
        super({ key: 'spacegame' });
        //variáveis da cena
        //jogador
        this.playerspace;
        //controle de teclado
        this.cursor;
    }
    preload() {
        //carregando os sprites
        this.load.image('player', 'data/assets/sprites/player-placeholder.png');
        this.load.image('saber', 'data/assets/sprites/saber-placeholder.png');
        this.load.image('slash', 'data/assets/sprites/slash-placeholder.png');
        this.load.image('map', 'data/assets/images/grass_battle_area.png');
    }
    create() {
        //adicionando fundo da tela
        this.add.image(0, 0, 'map').setOrigin(0).setScrollFactor(1);
        //aderindo a variável o controle do teclado
        this.cursors = this.input.keyboard.createCursorKeys();
        //aderindo a variavel as informações da classe do jogador
        this.playerspace = new PlayerSpace('saber','slash',this, 0, 0,'player', 0);
        this.add.existing(this.playerspace);
        //configurações da camera principal
        this.cameras.main.setBounds(0, 0, 720, 360);
        //camera seguir o jogador
        this.cameras.main.startFollow(this.playerspace, true);
        //zoom da camera
        this.cameras.main.setZoom(1.25);
    }
    update() {
        //update do jogador
        this.playerspace.update();
    }
}
