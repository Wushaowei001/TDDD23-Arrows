var GAME = GAME || {};

GAME.Boot = function() {};

GAME.Boot.prototype = {
	preload: function() {

	},
	create: function() {

		// scales everything!!!
		this.input.maxPointers = 1;
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;  
        /*this.scale.minWidth = 375/2;
        this.scale.minHeight = 660/2;*/
        this.scale.maxWidth = gameWidth;
        this.scale.maxHeight = gameHeight;


        this.scale.pageAlignVertically = true;
        //this.scale.pageAlignHorizontally = true;
        this.scale.updateLayout(true);

		this.state.start('Preload');
	}
};

/*
var gameWidth = 400;
var gameHeight =  650;

*/