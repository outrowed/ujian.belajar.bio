
const urlParams = new URLSearchParams(window.location.search);
const archiveId = urlParams.get("id");
const data = await fetch(`./data/${archiveId}`).then(i => i.json());

const archiveTitleElem = document.querySelector("#archive-title");
archiveTitleElem.textContent = `Archive: ${archiveId}`;

function createQuestionAnswerEntry({ question, answers = [], rightAnswer }) {
    const template = document.querySelector("#question-template");
    const element = template.content.cloneNode(true);
    
    element.querySelector(".question").textContent = question;
    element.querySelector(".right-answer").textContent = `Right answer: ${rightAnswer}`;

    const answersElem = element.querySelector(".answers");
    
    for (const answerText of answers) {
        const answerElem = document.createElement("div");
        answerElem.textContent = answerText;
        answersElem.appendChild(answerElem);
    }
    return element;
}

for (const i of data) {
    document.body.appendChild(createQuestionAnswerEntry(i))
}