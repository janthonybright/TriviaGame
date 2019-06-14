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

let quizContainer = document.getElementById('quiz');
let resultsContainer = document.getElementById('results');
let submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
        // we'll need a place to store the output and the answer choices
        let output = [];
        let answers;

        // for each question...
        for(let i=0; i<questions.length; i++){
            
            // first reset the list of answers
            answers = [];

            // for each available answer...
            for(letter in questions[i].answers){

                // ...add an html radio button
                answers.push(
                    '<label>'
                    + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                    + ' ' + letter + ' : '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }

            // add this question and its answers to the output
            output.push(
                '<div class="question" style="text-align:center;margin:auto 0;padding:10px;">' + questions[i].question + '</div>'
                + '<div class="answers" style="text-align:center;margin:auto 0;padding:10px;">' + answers.join('') + '</div>'
            );
        }

        // finally combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer){
        
        // gather answer containers from our quiz
        let answerContainers = quizContainer.querySelectorAll('.answers');
        
        // keep track of user's answers
        let userAnswer = '';
        let numCorrect = 0;
        
        // for each question...
        for(let i=0; i<questions.length; i++){

            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            // if answer is correct
            if(userAnswer===questions[i].correctAnswer){
                // add to the number of correct answers
                numCorrect++;
                
                // color the answers green
                answerContainers[i].style.color = 'lightgreen';
            }
            // if answer is wrong or blank
            else{
                // color the answers red
                answerContainers[i].style.color = 'red';
            }
        }

        // show number of correct answers out of total
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

    // show questions right away
    showQuestions(questions, quizContainer);
    
    // on submit, show results
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }

}