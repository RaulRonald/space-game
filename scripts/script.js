//cena do menu principal
class MainMenu extends Phaser.Scene {
    //carregar imagens sons gifs videos que serao usados
    preload() {

    }
    //carregar informa��es iniciais da cena
    create() {
        
    }
    //informa��es que ser�o carregadas a cada frame
    update() {

    }
}
//configura��es tela do jogo
var config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    scene: [MainMenu]
};
const game = new Phaser.Game(config);

