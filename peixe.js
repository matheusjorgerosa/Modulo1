var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var peixinho;
var peixinho2;
var peixinho3;
var x;
var y;
var velocidade1 = 5; // velocidade peixinho 2
var velocidade2 = 7; // velocidade peixinho 3


function preload() {
    this.load.image('mar', 'assets/bg_azul-escuro.png');
    this.load.image('logo', 'assets/logo-inteli_branco.png');
    this.load.image('peixe', 'assets/peixes/peixinho_laranja.png');
    this.load.image('peixe2', 'assets/peixes/peixe_listra.png');
    this.load.image('peixe3', 'assets/peixes/peixe_turquesa.png');
}

function create() {
    this.add.image(400, 300, 'mar');
    this.add.image(400, 525, 'logo').setScale(0.5);
    peixinho = this.add.image(400, 300, 'peixe');
    peixinho.setFlip(true, false);
    peixinho2 = this.add.image(300, 200, 'peixe2');
    peixinho3 = this.add.image(500, 400, 'peixe3');

}

function update() {
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;

    peixinho2.x += velocidade1;
    if(velocidade1 > 0 ){
        peixinho2.setFlip(false,false);
    }else if(velocidade1 < 0){
        peixinho2.setFlip(true,false);
    }
    if(peixinho2.x >= 800 || peixinho2.x <=0){
        velocidade1 *= -1;
    }

    peixinho3.x += velocidade2;
    if(velocidade2 > 0 ){
        peixinho3.setFlip(true,false);
    }else if(velocidade2 < 0){
        peixinho3.setFlip(false,false);
    }
    if(peixinho3.x >= 800 || peixinho3.x <=0){
        velocidade2 *= -1;
    }
}

