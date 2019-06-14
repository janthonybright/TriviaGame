// Question and Answer objects
let myQuestions = [
    {
        question: "What cartoon features a team of superheroes that includes Cyborg, Beast Boy, Starfire, and Raven?",
        answers: {
            1: 'Justice League',
            2: 'Teen Titans',
            3: 'Thundercats',
            4: 'Galaxy Force'
        },
        correctAnswer: '2'
    },
    {
        question: "What blue-skinned cartoon characters took North America by storm in 1981?",
        answers: {
            1: 'Teletubbies',
            2: "Blue's Clues",
            3: 'Pokemon',
            4: 'Smurfs'
        },
        correctAnswer: '4'
    },
    {
        question: 'What cartoon characters were created when Professor Utonium accidentally added "Chemical X" to a concoction that also included sugar, spice, and everything nice?',
        answers: {
            1: 'Powerpuff Girls',
            2: 'Tennage Mutant Ninja Turtles',
            3: 'The Barbie Bunch',
            4: 'Mucha Lucha'
        },
        correctAnswer: '1'
    },
    {
        question: "Which of the following superheroes did NOT appear in the Super Friends cartoons?",
        answers: {
            1: 'Green Lantern',
            2: 'Apache Chief',
            3: 'Hawkgirl',
            4: 'Black Vulcan'
        },
        correctAnswer: '3'
    },
    {
        question: "During the final season of The Flintstones, what little green alien from the planet Zetox is assigned to serve prehistoric 'dumb-dumbs' Fred and Barney?",
        answers: {
            1: 'Gumby',
            2: 'Gazoo',
            3: 'Gravelberry',
            4: 'Gazam'
        },
        correctAnswer: '2'
    }
];
// elements on html
let triviaContainer = document.getElementById('trivia');
let resultsContainer = document.getElementById('results');
let submitButton = document.getElementById('submit');
// functions for showing my trivia game
generateQuiz(myQuestions, triviaContainer, resultsContainer, submitButton);

function generateQuiz(questions, triviaContainer, resultsContainer, submitButton) {

    function showQuestions(questions, triviaContainer) {
        let output = [];
        let answers;
        for (let i = 0; i < questions.length; i++) {
            answers = [];
            for (letter in questions[i].answers) {
                answers.push(
                    '<label>'
                    + '<input type="radio" name="question' + i + '" value="' + letter + '">'
                    + ' ' + letter + ' : '
                    + questions[i].answers[letter]
                    + '</label>'
                );
            }
            output.push(
                '<div class="question" style="margin-top: 20px; margin-bottom: 0px;">' + questions[i].question + '</div>'
                + '<div class="answers" style="margin-botton: 10px; margin: 0px;">' + answers.join('') + '</div>'
            );
        }
        triviaContainer.innerHTML = output.join('');
    }
    // showing results function
    function showResults(questions, triviaContainer, resultsContainer) {
        let answerContainers = triviaContainer.querySelectorAll('.answers');
        let userAnswer = '';
        let numCorrect = 0;

        for (let i = 0; i < questions.length; i++) {
            userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;
            if (userAnswer === questions[i].correctAnswer) {
                numCorrect++;
                answerContainers[i].style.color = 'lightgreen';
            }
            else {
                answerContainers[i].style.color = 'red';
            }
        }
        $(resultsContainer).html(numCorrect + ' out of ' + questions.length);
    }
    showQuestions(questions, triviaContainer);

    $('#submit').on('click', function () {
        showResults(questions, triviaContainer, resultsContainer);
    })
}
    // count down timer
    let countDown = $('#timer')
    