$(function(){
	var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'game-canvas', { preload: preload, create: create });

	function preload () {
		game.load.image('logo', './assets/comp-soc.png');
	}

	function create () {
		var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
		logo.anchor.setTo(0.5, 0.5);
		
		var style = {
		font: "16px Arial",
		fill: "#fff", 
        align: "left",
        boundsAlignH: "left", 
        boundsAlignV: "top", 
        wordWrap: true,
        wordWrapWidth: 300
        };
        text = game.add.text(0, 0, "University of Derby/nComputing Society", style);
	}
});