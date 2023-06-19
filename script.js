
  document.addEventListener("DOMContentLoaded", function() {
    const box = document.getElementById("quote-box");
    const colorButton = document.getElementById("new-quote");
    const tasks = document.getElementById("new-task");
    getRandomQuotes();
    colorButton.addEventListener("click", function() {
      changeColor();
      getRandomQuotes();
    });
    tasks.addEventListener("click", function() {
        randomTask();
      });
    function changeColor() {
      const randomColor = getRandomColor();
      quote.style.color = randomColor;
      body.style.backgroundColor = randomColor;
      colorButton.style.color = randomColor;
      author.style.color = randomColor;
      
    }
  
    function getRandomColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
    function getRandomQuotes(){
      // const randomNumber = Math.floor(Math.random() * 1001);
      fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
        // Use the quote in your website
            const quoteElement = document.getElementById('quote');
            const authorElement = document.getElementById('author');
    
            // Display the quote and author
            quoteElement.textContent = data.content;
            authorElement.textContent = "- " + data.author;
          })
          .catch(error => console.error(error));
    }
    
    
    
  });
  