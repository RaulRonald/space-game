//cena do menu principal
class MainMenu extends Phaser.Scene {
    //carregar imagens sons gifs videos que serao usados
    preload() {

    }
    //carregar informações iniciais da cena
    create() {
        //instancia botão na tela, na div criada no index game-conteiner
        var button = document.createElement('button');
        button.innerHTML = 'Play';
        button.id = 'my-button';
        button.style.position = 'absolute';
        button.style.transform = 'translateX(350%)';
        button.style.padding = '10px 20px';
        button.style.fontSize = '16px';
        //adicionando na div
        document.getElementById('game-container').appendChild(button);
        //referencia do ambiente
        var ref = this;
        //ação do botão
        button.addEventListener('click', function () {
            text = ref.add.text(100, 100, 'test');
        });
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

