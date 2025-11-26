// Simple Questions button alert
document.addEventListener("DOMContentLoaded", () => {
  const questionBtn = document.getElementById("questionBtn");

  if (questionBtn) {
    questionBtn.addEventListener("click", () => {
      alert("If you have questions, contact me at:\nisaiahpacheco04@gmail.com");
    });
  }
});
