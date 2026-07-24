const title = document.getElementById("title");
title.textContent = "World History Quiz";

fetch("questions.json")
  .then(response => response.json())
  .then(data => {
      console.log(data);
      console.log(data[0].question);
  });
  
  questionElement.textContent = data[0].question;
