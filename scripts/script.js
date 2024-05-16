//cena do menu principal
class MainMenu extends Phaser.Scene {
    //carregar imagens sons gifs videos que serao usados
    preload() {

    }
    //carregar informa��es iniciais da cena
    create() {
        //instancia bot�o na tela, na div criada no index game-conteiner
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
        //a��o do bot�o
        button.addEventListener('click', function () {
            text = ref.add.text(100, 100, 'test');
        });
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

