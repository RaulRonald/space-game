//configurações tela do jogo
var config = {
    type: Phaser.AUTO,
    width: 600,
    height: 300,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

// Criação do jogo
var game = new Phaser.Game(config);

// Captura as teclas pressionadas
var cursors;
// Função de pré-carregamento de imagens sons e etc
function preload() {
    
}
//carregamento de variáveis de predefinições logo antes de iniciar o jogo
function create() {
    cursors = this.input.keyboard.createCursorKeys();

}
// Função de atualização , execução quadro a quadro
function update() {

}
