document.addEventListener("DOMContentLoaded", () => {
    const options = document.querySelectorAll(".options li");
    const submitButton = document.getElementById("submit");
    const retakeButton = document.getElementById("retake");
    const scoreDisplay = document.getElementById("score");
    let score = 0;
    let selectedAnswers = new Map();
    let submitted = false;

    options.forEach(option => {
        option.addEventListener("click", () => {
            if (submitted) return;
            const parent = option.parentElement;
            parent.querySelectorAll("li").forEach(li => li.classList.remove("selected"));
            option.classList.add("selected");
            selectedAnswers.set(parent, option);
        });
    });

    submitButton.addEventListener("click", () => {
        if (submitted) return;
        submitted = true;
        score = 0;
        selectedAnswers.forEach((selectedOption, parent) => {
            const isCorrect = selectedOption.dataset.answer === "true";
            if (isCorrect) {
                score++;
                selectedOption.classList.add("correct");
            } else {
                selectedOption.classList.add("incorrect");
            }
            parent.querySelectorAll("li").forEach(li => {
                li.style.cursor = "default";
                li.classList.remove("selected");
            });
        });
        scoreDisplay.textContent = `Your Score: ${score}/${selectedAnswers.size}`;
        retakeButton.style.display = "inline-block";
    });

    retakeButton.addEventListener("click", () => {
        submitted = false;
        score = 0;
        selectedAnswers.clear();
        scoreDisplay.textContent = "";
        options.forEach(option => {
            option.classList.remove("correct", "incorrect", "selected");
            option.style.cursor = "pointer";
        });
        retakeButton.style.display = "none";
    });
});