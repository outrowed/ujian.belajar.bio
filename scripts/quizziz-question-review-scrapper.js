var maxAnswersLength = 5;
var maxQuestionsLength = 15;
var nextBtn = document.querySelector(".items.next")
var correctAnswers = [];
var stopLoopy = false;

window.setInterval(() => {
    if (!stopLoopy && nextBtn.getAttribute("aria-disabled") == "false") {
        const question = document.querySelector(".question-review-container .question").textContent;
        const answers = Array.from(document.querySelectorAll(".question-review-container .option")).map(i => i.textContent);
        const rightAnswer = document.querySelector(".question-review-container .option.is-selected").textContent;
    
        correctAnswers.push({
            question,
            answers,
            rightAnswer
        });
        nextBtn.click();
    }
}, 600)
