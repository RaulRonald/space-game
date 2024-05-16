//cena do menu principal
class MainMenu extends Phaser.Scene {
    //carregar imagens sons gifs videos que serao usados
    preload() {

    }
    //carregar informações iniciais da cena
    create() {
        
    }
    //informações que serão carregadas a cada frame
    update() {

    }
}
//configurações tela do jogo
var config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    scene: [MainMenu]
};
const game = new Phaser.Game(config);

