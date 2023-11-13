document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".bt");
    
    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            // Remove any existing green background from correct answers in the same section
            const section = button.closest("section");
            const correctAnswersInSection = section.querySelectorAll(".bt.r");
            correctAnswersInSection.forEach(function (correctAnswer) {
                correctAnswer.style.backgroundColor = "rgb(31, 247, 2)";
            });

            // Check if the clicked button is the correct answer
            const isCorrect = button.classList.contains("bt r");

            if (!isCorrect) {
                // Find and display the correct answer in green for the current question
                const correctAnswer = section.querySelector(".bt.r");
                correctAnswer.style.backgroundColor = "rgb(31, 247, 2)";
            }
        });
    });
});