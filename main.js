var inquirer = require('inquirer');
var fs = require('fs');

var BasicCcard = require('./basicCard.js');
var ClozeCard = require('./clozeCard.js');

inquirer.prompt([{
    name: 'ask',
    message: 'What would you like to do?',
    type: 'list',
    choices: [{
        name: 'add-a-flashcard'
    }, {
        name: 'show-cards'
    }]
}]).then(function(answer) {
    if (answer.ask === 'add') {
        addCard();
    } else if (answer.command === 'show-cards') {
        showCards();
    }
});

var addCard = function() {
    inquirer.prompt([{
    name: 'cardChoice',
    message: 'What flashcards do you like to do?',
    type: 'list',
    choices: [{
        name: 'basic-card'
    }, {
        name: 'cloze-card'
    }]
}]).then(function(answer) {
    if (answer.cardChoice === 'basic-flashcard') {    
    inquirer.prompt([{
    name: 'front',
    message: 'What is the question?',
    validate: function(input) {
        if (input === '') {
            console.log('Please suggest a question');
            return false;
        } else {
            return true;
        }
        }
    },  {
    name: 'back',
    message: 'What is the answer?',
    validate: function(input) {
        if (input === '') {
            console.log('Please provide an answer');
            return false;
        } else {
            return true;
        }
    }
}]).then(function(answer) {
    var newBasic = new BasicCard(answer.front, answer.back);
    newBasic.create();
    whatsNext();
});
} else if (answer.cardChoice === 'cloze-card') {
inquirer.prompt([{
    name: 'text',
    message: 'What is the full text?',
    validate: function(input) {
        if (input === '') {
            console.log('Please provide full text');
            return false;
        } else {
            return true;
        }
        }
},      {
    name: 'cloze',
    message: 'What is the cloze portion?',
    validate: function(input) {
        if (input === '') {
            console.log('Please provide cloze portion');
            return false;
        } else {
            return true;
        }
        }
}]).then(function(answer) {
    var text = answer.text;
    var cloze = answer.cloze;
    if (text.includes(cloze)) {
        var newCloze = new ClozeCard(text, cloze);
        newCloze.create();
        whatsNext();
    } else {
        console.log('The cloze portion you provided is not in the full text. Please try again.');
        addCard();
        }
    });
}
});
};
var whatElse = function() {
    // get user input
    inquirer.prompt([{
        name: 'whattodo',
        message: 'What else would you like to do?',
        type: 'list',
        choices: [{
            name: 'create-new-card'
        }, {
            name: 'show-all-cards'
        }, {
            name: 'nada'
        }]
    }]).then(function(answer) {
        if (answer.whatElse === 'create-new-card') {
            addCard();
        } else if (answer.whatElse === 'show-all-cards') {
            showCards();
        } else if (answer.whatElse === 'nothing') {
            return;
        }
    });
};

var showCards = function() {
     fs.readFile('./log.txt', 'utf8', function(error, data) {
         if (error) {
            console.log('Error occurred: ' + error);
        }
        var questions = data.split(';');
        var notBlank = function(value) {
            return value;
        };
        questions = questions.filter(notBlank);
        var count = 0;
        showQuestion(questions, count);
    });
};
