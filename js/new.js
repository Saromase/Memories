var Game = function (nbCards = 4) {
    const imageName = ["Digital", "Planet", "Planet X", "Sun"];
    const image = ["img/digital.jpg", "img/planet1.jpg", "img/planetX.jpg", "img/sun.jpg"];

    this.listCards = [];
    this.init = function () {
        for (var i = 0; i < nbCards; i++) {
            this.listCards.push(new Cards(imageName[i], image[i]));
        }
    }
    this.display = function () {
        for (var i = 0; i < this.listCards.length; i++) {
            $("#play").append("<img src='" + this.listCards[i].source + "' width='300' height='300'></img>");
        }
    }
}
var Cards = function (name, source) {
    this.name = name;
    this.source = source;
    this.display = false;
}

$(document).ready(function () {
    $("#start").click(function () {
        var game = new Game();
        game.init();
        game.display();
        console.log(game);
    });
});
