$(function(){
	var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game-canvas', { preload: preload, create: create });

	function preload () {
		game.load.image('logo', '../assets/comp-soc.png');
	}

	function create () {
		var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
		logo.anchor.setTo(0.5, 0.5);
	}
});