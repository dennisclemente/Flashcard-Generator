var BasicCard = require("./BasicCard.js");

var ClozeCard = function(text, cloze) {
    if (this instanceof ClozeCard) {
        this.fullText = text;
        this.cloze = cloze;

        this.partial = function() {
            if (this.fullText.includes(this.cloze)) {
                return this.fullText.replace(this.cloze, '...');
            } else {
                var brokenCloze = "Oops! Full text: '" + this.fullText + "' doesn't contain the cloze: '" + this.cloze + "'.";
                return brokenCloze;
            }
        };
            } else {
                return new ClozeCard(text, cloze);
    }
};

    // var firstPresBasic = new BasicCard("Who was the first president of the US?", "George Washington");
    // console.log(firstPres.front);
    // console.log(firstPres.back);

    // var firstPresCloze = new ClozeCard("George Washington was the first president of the US.", "George Washington");
    // console.log(firstPresClose.fullText);
    // console.log(firstPresCloze.cloze);
    // console.log(firstPresCloze.partial());

    module.exports = ClozeCard;
