//configura��es tela do jogo
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

// Cria��o do jogo
var game = new Phaser.Game(config);

// Captura as teclas pressionadas
var cursors;
// Fun��o de pr�-carregamento de imagens sons e etc
function preload() {
    
}
//carregamento de vari�veis de predefini��es logo antes de iniciar o jogo
function create() {
    cursors = this.input.keyboard.createCursorKeys();

}
// Fun��o de atualiza��o , execu��o quadro a quadro
function update() {

}
