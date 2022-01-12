document
  .getElementById("change-activity")
  .addEventListener("click", function () {
    fetch("https://apis.scrimba.com/bored/api/activity")
      .then((response) => response.json())
      .then((data) => {
        data;
        document.getElementById("activity").textContent = data.activity;
        document.getElementById("title").textContent = "🦾 HappyBot🦿";
        document.body.classList.add("fun");
      });
  });
